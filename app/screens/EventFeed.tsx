import React from 'react';
import EventList from "../containers/EventList";
import {TouchableOpacity, Text, View} from "react-native";


interface EventFeedProps {
    navigateToEventDetails(eventID: string): void
}

interface EventFeedState {
}

export default class EventFeed extends React.Component<EventFeedProps, EventFeedState> {
    render() {
        return <View>
            <EventList/>
            <TouchableOpacity onPress={() => this.props.navigateToEventDetails("abc")}>
                <Text>clck me</Text>
            </TouchableOpacity>
        </View>
    }
}
