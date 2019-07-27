import React from 'react';
import EventList from "../containers/EventList";


interface EventFeedProps {
    navigateToEventDetails(eventID: string): void
}

interface EventFeedState {
}

export default class EventFeed extends React.Component<EventFeedProps, EventFeedState> {
    render() {
        return <EventList/>
    }
}
