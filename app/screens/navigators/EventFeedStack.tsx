import React from 'react';
import getCustomRouter, {RequiredProps} from "./CustomRouter";
import {createStackNavigator} from "react-navigation";
import {CustomNavigatorProps} from "./RootNavigator";
import EventFeed from "../EventFeed";
import { Button, Text, Platform} from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { Icon } from "react-native-elements";
import Container from "../../containers/Container";
import EventDetails from "../EventDetails";


interface EventFeedStackProps {
}

interface EventFeedStackState {
}

interface NavigatorProps extends RequiredProps {
    screenProps: {
        navigateToEvent(eventID: string): void
    }
}

type CustomProps = CustomNavigatorProps & {screenProps: {navigateToEvent(e: string): void}};

export default getCustomRouter<NavigatorProps>(createStackNavigator({
    EventFeed: {
        screen: ({
            screenProps,
            navigation
        }: CustomProps) => <EventFeed
            navigateToEventDetails={(eventID: string) => navigation.navigate("EventDetails", {eventID})}
        />,
        navigationOptions: {
            // Make this get current Month name
            headerTitle: () => <Text>Month</Text>,
            headerRight: (
                <Icon name={'search'} containerStyle={{ marginRight: 10 }}/>
            ),

        }
    },
    EventDetails: {
        screen: ({
            screenProps,
            navigation
        }: CustomProps) => <EventDetails
            eventID={"abcd"}
        />
    }
}));

