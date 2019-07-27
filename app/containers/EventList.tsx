import React from 'react';
import EventItem from "../components/EventItem";
import _ from "underscore";
import {View, Text, StyleSheet} from "react-native";

const organisers = {
    tpc: 'The Programming Club',
    csit: 'CSIT Society'
};

interface EventListProps {
    navigateToEventDetails(eventID: string): void

    events: EventItemData[]
}

type EventItemData = {
    id: string;
    name: string;
    start: string;
    end: string;
    description: string;
    location: string;
    feed: {
        id: string;
        name: string;
    }
}

interface EventListState {
}

export default class EventList extends React.Component<EventListProps, EventListState> {
    render() {

        let grouping = this.groupByDate();

        console.log(grouping);

        return <View>
            {Object.values(grouping).map((eventsIndividuals, date) => {
                console.log("EI:", eventsIndividuals);
                return (
                    <View><View style={styles.Divider}>
                        <Text style={styles.DividerText}>
                            {eventsIndividuals[0].start.toLocaleString('en-GB', {
                                day: 'numeric', month: 'short', weekday: 'long'
                            })}</Text></View>
                        {eventsIndividuals.map((event: EventItemData) => <EventItem
                            key={event.id}
                            id={event.id}
                            // clubName={"TPC"}
                            colour={"#FF0001"}
                            name={event.name}
                            start={event.start}
                            end={event.end}
                            organiser={event.feed.name}
                            description={event.description}
                            navigateToEventDetails={this.props.navigateToEventDetails}
                            location={event.location}
                            // imageURL={event.imageURL}
                        />)}
                    </View>
                )
            })}</View>
    }

    groupByDate() {
        let options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        };
        return _.groupBy(this.props.events, (event) => event.start.toLocaleDateString());
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
        backgroundColor: "#F0F0F0"
    }

});
