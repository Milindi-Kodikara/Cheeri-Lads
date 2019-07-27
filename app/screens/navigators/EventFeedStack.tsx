import React from 'react';
import getCustomRouter, {RequiredProps, TabInfusedProps} from "./CustomRouter";
import {createStackNavigator} from "react-navigation";
import EventFeed from "../EventFeed";
import CustomText from "../../components/CustomText";
import { Icon } from "react-native-elements";
import EventDetails from "../EventDetails";


interface NavigatorProps extends RequiredProps {
    screenProps: {
        navigateToEvent(eventID: string): void
    }
}

export default getCustomRouter<NavigatorProps>(createStackNavigator({
    EventFeed: {
        screen: ({
            screenProps,
            navigation
        }: TabInfusedProps) => <EventFeed
            navigateToEventDetails={(eventID: string) => navigation.navigate("EventDetails", {eventID})}
        />,
        navigationOptions: ({ navigation, screenProps }: TabInfusedProps) => ({
            headerLeft: <Icon name={'settings'} containerStyle={{ marginLeft: 10 }} onPress={() => {}}>Filter</Icon>,
            // Make this get current Month name
            headerTitle: () => <CustomText subheading bold>Agenda</CustomText>,
            headerRight: (
                <Icon name={'search'} containerStyle={{ marginRight: 10 }} onPress={() => {}}/>
            ),

        })
    },
    EventDetails: {
        screen: ({
            screenProps,
            navigation
        }: TabInfusedProps) => <EventDetails
            eventID={navigation.getParam("eventID")}
        />,
        navigationOptions: {
            headerTitle: () => <CustomText subheading bold>Event</CustomText>
        }
    }
}));

