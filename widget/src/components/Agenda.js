import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import { Dropdown} from 'semantic-ui-react'
import './Agenda.css'

const options = [
    { key: 'technology', text: 'Technology', value: 'technology' },
    { key: 'psychology', text: 'Psychology', value: 'psychology' },
    { key: 'engineering', text: 'Engineering', value: 'engineering' },
]

export default class Agenda extends React.Component {
    state = {}

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

            return (
              <div className="page">
                <h1 className="header">{name}</h1>

                  <Dropdown placeholder='Filter' fluid multiple selection options={options} />



                {events.map(
                  ({id, name, feed, description, start, end, location}) => (
                    <div key={id} className="event_section">
                        <h2 className="event_name">{name}</h2>
                        <p className="tags">{feed.category}</p>
                        <h3>Brought to you by {feed.name}</h3>
                        <p>From {start} to {end} at {location}</p>
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
