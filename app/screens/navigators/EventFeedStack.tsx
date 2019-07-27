import React from 'react';
import getCustomRouter, {RequiredProps} from "./CustomRouter";
import {createStackNavigator} from "react-navigation";
import {CustomNavigatorProps} from "./RootNavigator";
import EventFeed from "../EventFeed";
import CustomText from "../../components/CustomText";
import {Icon} from "react-native-elements";
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
            headerTitle: () => <CustomText bold style={{marginLeft: 20}}>Feed</CustomText>,
            headerRight: <Icon name={'search'} onPress={() => {}} containerStyle={{marginRight: 20}}/>
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

