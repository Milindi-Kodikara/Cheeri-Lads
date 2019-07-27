import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Dropdown} from 'semantic-ui-react';
import './Agenda.css';
import _ from 'lodash';

const options = [
  {key: 'technology', text: 'Technology', value: 'technology'},
  {key: 'psychology', text: 'Psychology', value: 'psychology'},
  {key: 'engineering', text: 'Engineering', value: 'engineering'},
];

export default class Agenda extends React.Component {
  state = {filter: []};

  render() {
    return (
      <div>
        <Query
          query={gql`
            query getCalendar($calendarId: ID!) {
              calendar(id: $calendarId) {
                name
                feeds {
                  edges {
                    node {
                      name
                      events {
                        edges {
                          node {
                            id
                            name
                            location
                            feed {
                              name
                              color
                              category
                            }
                            start
                            end
                            description
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          variables={{
            calendarId: new URLSearchParams(window.location.search).get(
              'calendar',
            ),
          }}>
          {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error Occurred</p>;
            let name = data.calendar.name;
            let events = data.calendar.feeds.edges.reduce(
              (total, current) =>
                total.concat(current.node.events.edges.map(edge => edge.node)),
              [],
            );

            events.sort(
              (a, b) =>
                new Date(a.start).getTime() - new Date(b.start).getTime(),
            );

            let feeds = data.calendar.feeds.edges.map(edge => edge.node.name);
            console.log(feeds);

            let filteredEvents =
              this.state.filter.length === 0
                ? events
                : events.filter(event =>
                    this.state.filter.includes(event.feed.name),
                  );

            return (
              <div className="page">
                <h1 className="header">{name}</h1>

                <Dropdown
                  placeholder="Filter"
                  fluid
                  multiple
                  selection
                  options={feeds.map(feed => ({
                    key: feed,
                    text: feed,
                    value: feed,
                  }))}
                  value={this.state.filter}
                  onChange={(event, props) =>
                    this.setState({filter: props.value})
                  }
                />

                {filteredEvents.map(
                  ({id, name, feed, description, start, end, location}) => (
                    <div key={id} className="event_section">
                      <h2 className="event_name">{name}</h2>
                      <p className="tags">{feed.category}</p>
                      <h3>Brought to you by {feed.name}</h3>
                      <p>
                        From {start} to {end} at {location}
                      </p>
                      <p>{description}</p>
                    </div>
                  ),
                )}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
