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
        return <Container row style={styles.Card}>
            <View style={{flex: 1}}>
            <Text style={styles.Heading}>{this.props.name}</Text>
            <Text>{this.props.location}</Text>
            <Text>{this.props.description}</Text>
            </View>
            <View style={{flex: 1}}>
            <Text>{this.props.start.toISOString()}</Text>
            <Text>{this.props.end.toISOString()}</Text>
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
        marginLeft: 25
    },

    Heading: {
        fontSize: 25,
        color: "#000"
    },

    Dates: {
        padding: 1,
    },

    GeneralText: {},

});
