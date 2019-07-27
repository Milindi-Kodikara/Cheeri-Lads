import React from 'react';
import EventItem from "../components/EventItem";


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
        start: new Date(),
        end: new Date(),
        name: 'Some Event Name',
        description: 'Some Event Description',
        imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
    }
];

interface EventListProps {
}

interface EventListState {
}

export default class EventList extends React.Component<EventListProps, EventListState> {
    render() {
        return (events.map((event) => <EventItem
            key={event.id}
            id={event.id}
            // clubName={"TPC"}
            colour={"#FF0000"}
            name={event.name}
            start={event.start}
            end={event.end}
            description={event.description}
            location={"here!"}
            // imageURL={event.imageURL}
        />))
    }
}
