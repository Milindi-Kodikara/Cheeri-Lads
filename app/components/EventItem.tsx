import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface EventItemProps {
    id: string;
    start: Date;
    end: Date;
    name: string;
    description: string;
    location: string;
    colour: string;
}

interface EventItemState {
}

export default class EventItem extends React.Component<EventItemProps, EventItemState> {
    render() {
        return <View>
            <Text>{this.props.name}</Text>
            <Text>{this.props.start.toISOString()}</Text>
            <Text>{this.props.end.toISOString()}</Text>
            <Text>{this.props.location}</Text>
            <Text>{this.props.description}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    card: {

    }
});
