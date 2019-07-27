import React from 'react';
import EventList from "../containers/EventList";
import {TouchableOpacity, Text, View, StyleSheet} from "react-native";


interface EventFeedProps {
    navigateToEventDetails(eventID: string): void
}

interface EventFeedState {
}

export default class EventFeed extends React.Component<EventFeedProps, EventFeedState> {
    render() {
        return <View>
            <Text style={styles.Heading}>Monthly Feed</Text>
            <EventList navigateToEventDetails={this.props.navigateToEventDetails}/>
            <TouchableOpacity onPress={() => this.props.navigateToEventDetails("abc")}>
                <Text>click me</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    Heading: {
        padding: 25,
        fontSize: 25,
        color: "#00F"
    }
});