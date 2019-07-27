import React from 'react';
import getCustomRouter, {RequiredProps} from "./CustomRouter";
import {createStackNavigator} from "react-navigation";
import {CustomNavigatorProps} from "./RootNavigator";
import EventFeed from "../EventFeed";


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
        screen: ({screenProps, navigation}: CustomNavigatorProps & {screenProps: {navigateToEvent(e: string): void}}) => <EventFeed
            navigateToEventDetails={(eventID: string) => screenProps.navigateToEvent(eventID)}
        />
    }
}));

