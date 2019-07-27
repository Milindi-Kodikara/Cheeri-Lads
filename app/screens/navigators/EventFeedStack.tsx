import React from 'react';
import getCustomRouter, {RequiredProps, TabInfusedProps} from "./CustomRouter";
import {createStackNavigator} from "react-navigation";
import {CustomNavigatorProps, NavigationProp} from "./RootNavigator";
import EventFeed from "../EventFeed";
import { Button, Text, Platform} from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { Icon } from "react-native-elements";
import Container from "../../containers/Container";
import EventDetails from "../EventDetails";
import Query from "react-apollo";
import gql from "graphql-tag";


interface EventFeedStackProps {
}

interface EventFeedStackState {
}

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
        navigationOptions: ({navigation, screenProps}: TabInfusedProps) => ({
            // Make this get current Month name
            headerTitle: () => <Text style={{ marginLeft: 10}}>Som Mon</Text>,
            headerRight: (
                <Icon name={'search'} containerStyle={{ marginRight: 10 }} onPress={() => {screenProps.tabNavigation.navigate("Search")}}/>
            ),

        })
    },
    EventDetails: {
        screen: ({
            screenProps,
            navigation
        }: TabInfusedProps) => <EventDetails
            eventID={navigation.getParam("eventID")}
        />
    }
}));

