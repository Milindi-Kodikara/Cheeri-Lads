import React from 'react';
import {createAppContainer, createSwitchNavigator, NavigationContainerComponent, NavigationParams, NavigationRoute, NavigationScreenProp} from 'react-navigation'
import EventFeed from '../EventFeed';
import EventDetails from '../EventDetails';
import EventFeedStack from "./EventFeedStack";


interface RootNavigatorProps {
}

interface RootNavigatorState {
}

export interface AppProps {

}

export interface CustomNavigatorProps {
    navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;
    screenProps: AppProps
}

const RootNavigation = createAppContainer(createSwitchNavigator(
    {
        EventFeed: {
            screen: ({screenProps, navigation}: CustomNavigatorProps) => <EventFeedStack
                navigation={navigation}
                screenProps={{
                    ...screenProps,
                    navigateToEvent: (eventID: string) => navigation.navigate("EventDetailScreen", {eventID})
                }}
            />
        },
        EventDetailScreen: {
            screen: ({screenProps, navigation}: CustomNavigatorProps) => <EventDetails
                eventID={navigation.getParam("eventID", null)}
            />
        }
    }
));

export default class RootNavigator extends React.Component<RootNavigatorProps, RootNavigatorState> {
    private navigator: NavigationContainerComponent | null;

    constructor(props) {
        super(props);

        this.navigator = null;
    }


    render() {
        return <RootNavigation
            ref={nav => this.navigator = nav}
            screenProps ={{
                ...this.props
            }}
        />
    }
}
