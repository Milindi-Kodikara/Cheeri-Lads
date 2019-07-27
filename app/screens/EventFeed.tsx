import React from 'react';
import EventList from "../containers/EventList";
import {TouchableOpacity, Text, View, StyleSheet} from "react-native";
import gql from "graphql-tag";
import {Query} from "react-apollo";


interface EventFeedProps {
    navigateToEventDetails(eventID: string): void
}

interface EventFeedState {
}


const GET_EVENTS = gql`query GET_EVENTS {
    allEvents {
        edges {
            node {
                id
                name
                start
                end
                description
                location
                feed {
                    id
                    name
                    color
                }
            }
        }
    }
}`;

type Data = {
    allEvents: {
        edges: {
            node: {
                id: string;
                name: string;
                start: string;
                end: string;
                description: string;
                location: string;
                feed: {
                    id: string;
                    name: string;
                    color: string;
                }
            }
        }[]
    }
}
    ;

export default class EventFeed extends React.Component<EventFeedProps, EventFeedState> {
    render() {
        return <Query<Data, {}> query={GET_EVENTS}>{({data, error}) => {
            console.log("PLEASE", data);
            console.log(data.allEvents ? data.allEvents.edges.map((base) => ({
                ...base.node,
                start: new Date(base.node.start),
                end: new Date(base.node.end)
            })) : []);

            return <View>
                <EventList events={data.allEvents ? data.allEvents.edges.map((base) => ({
                    ...base.node,
                    start: new Date(base.node.start),
                    end: new Date(base.node.end),
                    colour: "#" + base.node.feed.color
                })) : []} navigateToEventDetails={this.props.navigateToEventDetails}/>
            </View>
        }}</Query>
        }
    }

    const styles = StyleSheet.create({
        Heading: {
        padding: 25,
        fontSize: 25,
        color: "#00F"
    }
});