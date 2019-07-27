import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from "react-native-elements";
import Container from "../containers/Container";

interface EventItemProps {
    id: string;
    start: Date;
    end: Date;
    name: string;
    description: string;
    location: string;
    colour: string;
    navigateToEventDetails(eventID: string): void
}

interface EventItemState {
}

export default class EventItem extends React.Component<EventItemProps, EventItemState> {

    render() {
        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };
        return <Container row style={[styles.Card, {borderColor: this.props.colour}]}>
            <View style={{flex: 1}}>
                <Text style={styles.Heading}>{this.props.name}</Text>
                <Text>{this.props.location}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                <Text style={styles.Dates}>{this.props.start.toLocaleString('en-GB', options)}</Text>
                <Text style={styles.Dates}>{this.props.end.toLocaleString('en-GB', options)}</Text>
            </View>
            <Icon name={'chevron-right'} onPress={() => this.props.navigateToEventDetails(this.props.id)}/>
        </Container>
    }
}

const styles = StyleSheet.create({
    Card: {
        padding: 10,
        borderLeftWidth: 5,
        borderBottomColor: "#8a8a8a",
        borderBottomWidth: 1
    },

    Heading: {
        fontSize: 20,
        color: "#000"
    },

    Dates: {
        fontSize: 10
    },

    GeneralText: {},

});
