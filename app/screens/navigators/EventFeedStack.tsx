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
    EventScreen: {
        screen: ({
            screenProps,
            navigation
        }: CustomNavigatorProps & {screenProps: {navigateToEvent(e: string): void}}) => <EventFeed
            navigateToEventDetails={(eventID: string) => screenProps.navigateToEvent(eventID)}
        />,
        navigationOptions: {
                // Make this get current Month name
                headerTitle: () => <Text>Month</Text>,
            headerRight: (
                <Icon name={'search'} containerStyle={{ marginRight: 10 }}/>
            ),
        }
    }
}));

