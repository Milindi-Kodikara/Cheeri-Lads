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
        return <Container row style={styles.Card}>
            <View style={{flex: 1}}>
                <Text style={styles.Heading}>{this.props.name}</Text>
                <Text>{this.props.location}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                <Text style={styles.Dates}>{this.props.start.toLocaleString('en-GB', options)}</Text>
                <Text style={styles.Dates}>{this.props.end.toLocaleString('en-GB', options)}</Text>
            </View>
            <Icon name={'chevron-right'}></Icon>
        </Container>
    }
}

const styles = StyleSheet.create({
    Card: {
        padding: 10,
        borderLeftColor: "#000",
        borderLeftWidth: 2,
        marginBottom: 10,
        marginLeft: 25,
        marginRight: 10
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
