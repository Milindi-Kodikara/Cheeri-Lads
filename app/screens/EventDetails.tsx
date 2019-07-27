import React from 'react';
import {Text} from 'react-native'
import Query from "react-apollo";
import gql from "graphql-tag";
import CustomText from "../components/CustomText";

interface EventDetailsProps {
    eventID: string
}

interface EventDetailsState {
}

export default class EventDetails extends React.Component<EventDetailsProps, EventDetailsState> {
    render() {
        return <CustomText>HEY</CustomText>
    }
}
