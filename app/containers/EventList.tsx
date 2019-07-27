import React from 'react';
import EventItem from "../components/EventItem";
import _ from "underscore";
import {View, Text, StyleSheet} from "react-native";

const organisers ={
    tpc: 'The Programming Club',
    csit: 'CSIT Society'
};

const events = [
    {
        id: 'abcde',
        eventDate: new Date(),
        start: new Date().toLocaleTimeString(),
        end: new Date().toLocaleTimeString(),
        name: '101 Web Dev',
        location: '80.5.10',
        organiser: organisers.tpc,
        description: 'Some Event Description',
        imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
    }, {
        id: 'abcdf',
        eventDate: new Date(),
        start: new Date().toLocaleTimeString(),
        end: new Date().toLocaleTimeString(),
        name: 'Fun with Python',
        location: '12.10.11',
        organiser: organisers.csit,
        description: 'Some Event Description',
        imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
    }, {
        id: 'abcdg',
        eventDate: new Date(),
        start: new Date(1).toLocaleTimeString(),
        end: new Date().toLocaleTimeString(),
        name: 'Git Crash Course',
        location: '80.06.11',
        organiser: organisers.tpc,
        description: 'Some Event Description',
        imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
    }
];

interface EventListProps {
    navigateToEventDetails(eventID: string): void
}

interface EventListState {
}

export default class EventList extends React.Component<EventListProps, EventListState> {
    render() {

        let grouping = this.groupByDate();

        return <View>
            {Object.values(grouping).map((eventsIndividuals, date) => (
                <View><View style={styles.Divider}>
                    <Text style={styles.DividerText}>
                        {eventsIndividuals[0].eventDate.toLocaleString('en-GB', {
                            day: 'numeric', month: 'short', weekday: 'long'
                        })}</Text></View>
                    {eventsIndividuals.map((event) => <EventItem
                        key={event.id}
                        id={event.id}
                        // clubName={"TPC"}
                        colour={"#FF0001"}
                        name={event.name}
                        start={event.start}
                        end={event.end}
                        organiser={event.organiser}
                        description={event.description}
                        navigateToEventDetails={this.props.navigateToEventDetails}
                        location={event.location}
                        // imageURL={event.imageURL}
                    />)}
                </View>
            ))}</View>
    }

    groupByDate() {
        let options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };
        return _.groupBy(events, (event) => event.start.toLocaleString('en-GB', options));
    }

}

const styles = StyleSheet.create({

    DividerText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000"
    },

    Divider: {
        padding: 5,
        paddingLeft: 10,
        backgroundColor: "#F0F7F7"
    }

});
