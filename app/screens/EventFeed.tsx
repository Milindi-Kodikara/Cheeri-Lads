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
                }
            }
        }[]
    }
}
    ;

export default class EventFeed extends React.Component<EventFeedProps, EventFeedState> {
    render() {
        return <Query<Data, {}> query={GET_EVENTS}>{({data: {allEvents}}) => {
            // console.log(allEvents ? allEvents.edges.map((base) => base.node) : []);

            return <View>
                <EventList events={allEvents ? allEvents.edges.map((base) => ({
                    ...base.node,
                    start: new Date(base.node.start),
                    end: new Date(base.node.end)
                })) : []} navigateToEventDetails={this.props.navigateToEventDetails}/>
                <TouchableOpacity onPress={() => this.props.navigateToEventDetails("abc")}>
                </TouchableOpacity>
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