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
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };

        return <Container row style={[styles.Card, {borderColor: this.props.colour}]}>
            <View style={{flex: 1, height: 75}}>
                <Text style={styles.Title}>{this.props.name}</Text>
                <Text style={styles.SubTitle}>{this.props.organiser}</Text>
                <Text style={styles.LocationTitle}>{this.props.location}</Text>
            </View>
            <View style={{ alignItems: 'right'}}>
                <Container row>
                    <Icon name={'schedule'}/>
                    <View style={{}}>
                        <Text style={styles.EventTime}>{this.props.start.toLocaleString('en-GB', {
                            hour: 'numeric', minute: 'numeric', hour12: 'true'
                        })}</Text></View>
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

    Title: {
        fontSize: 15,
        color: "#000"
    },

    SubTitle: {
        fontSize: 14,
        color: "#26282A"
    },

    LocationTitle: {
        fontSize: 13,
        color: "#7E7E7E"
    },

    EventTime: {
        fontSize: 11,
        paddingStart: 5,
        padding: 2
    },

    GeneralText: {},

});
