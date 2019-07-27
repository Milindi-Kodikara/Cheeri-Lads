import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

export default class Agenda extends React.Component {
  render() {
    return (
      <div>
        <h1>Agenda</h1>
        <Query
          query={gql`
            {
              allEvents {
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
          `}>
          {({loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error Occurred</p>;

            return data.allEvents.edges
              .map(node => node.node)
              .map(({id, name, feed, description, start, end, location}) => (
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
              ));
          }}
        </Query>
      </div>
    );
  }
}
