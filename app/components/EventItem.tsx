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
    organiser: string;

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
            minute: 'numeric',
            hour12: true

        };
        return <Container row style={[styles.Card, {borderColor: this.props.colour}]}>
            <View style={{flex: 1, height: 75}}>
                <Text style={styles.Heading}>{this.props.name}</Text>
                <Text style={styles.SubHeading}>{this.props.organiser}</Text>
                <Text style={styles.SubHeading}>{this.props.location}</Text>
            </View>
            <View style={{flex: 1}}>
                <Container row style={{alignItems: 'center', paddingRight: 10}}>
                    <Icon name={'schedule'}/>
                    <View style={{flex: 1}}>
                        <Text style={{
                            fontSize: 11,
                            padding: 10
                        }}>{this.props.start.toLocaleString('en-GB', options)}</Text></View>
                </Container>
            </View>
            <Icon name={'chevron-right'} onPress={() => this.props.navigateToEventDetails(this.props.id)}/>
        </Container>
    }
}

const styles = StyleSheet.create({
    Card: {
        padding: 10,
        borderLeftWidth: 5,
        borderBottomColor: "#DFE1E5",
        borderBottomWidth: .5
    },

    Heading: {
        fontSize: 15,
        color: "#000"
    },

    SubHeading: {
        fontSize: 14,
        color: "#26282A"
    },

    Dates: {
        fontSize: 11,
        color: "#3F3C42"
    },

    GeneralText: {},

});
