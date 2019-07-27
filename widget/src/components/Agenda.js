import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

export default class Agenda extends React.Component {
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
              <div>
                <h2>{name}</h2>
                {events.map(
                  ({id, name, feed, description, start, end, location}) => (
                    <div key={id}>
                      <h2>{name}</h2>
                      <h3>Brought to you by {feed.name}</h3>
                      <ul>
                        <li>
                          From {start} to {end}
                        </li>
                        <li>At {location}</li>
                      </ul>
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
