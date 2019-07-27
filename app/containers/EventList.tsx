import React from 'react';
import EventItem from "../components/EventItem";
import _ from "underscore";
import {View, Text, StyleSheet} from "react-native";


const events = [
    {
        id: 'abcde',
        start: new Date(),
        end: new Date(),
        name: 'Some Event Name',
        description: 'Some Event Description',
        imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
    }, {
        id: 'abcdf',
        start: new Date(),
        end: new Date(),
        name: 'Some Event Name',
        description: 'Some Event Description',
        imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
    }, {
        id: 'abcdg',
        start: new Date(1),
        end: new Date(),
        name: 'Some Event Name',
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
                <View><View style={styles.TitleBorder}>
                    <Text style={styles.Titles}>
                        {eventsIndividuals[0].start.toLocaleString('en-GB', {
                            day: 'numeric', month: 'numeric', year: 'numeric', weekday: 'long'
                        })}</Text></View>
                    {eventsIndividuals.map((event) => <EventItem
                        key={event.id}
                        id={event.id}
                        // clubName={"TPC"}
                        colour={"#FF0000"}
                        name={event.name}
                        start={event.start}
                        end={event.end}
                        description={event.description}
                        location={"This is where you should go!"}
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

    Titles: {
        fontSize: 15,
        color: "#000"
    },

    TitleBorder: {
        padding: 5,
        marginLeft: 25,
        backgroundColor: "#20c3ff"
    }

});
