import React from 'react';
import {Text} from 'react-native'
import Query from "react-apollo";
import gql from "graphql-tag";

interface EventDetailsProps {
    eventID: string
}

interface EventDetailsState {
}

export default class EventDetails extends React.Component<EventDetailsProps, EventDetailsState> {
    render() {
        return <Query<{}, {}>
            query={gql`query allEvents {
  allEvents {
    edges {
      node {
        id
        name
        start
        end
        description
        location
      }
    }
  }
}`}
        >{
            () => <Text>Hey</Text>
        }
        </Query>
    }
}
