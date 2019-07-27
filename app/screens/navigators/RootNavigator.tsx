import React from 'react';
import {createAppContainer, createSwitchNavigator, NavigationContainerComponent, NavigationParams, NavigationRoute, NavigationScreenProp, createStackNavigator} from 'react-navigation'
import EventFeed from '../EventFeed';
import EventDetails from '../EventDetails';
import EventFeedStack from "./EventFeedStack";
import Search from "../Search";
import getCustomRouter from "./CustomRouter";


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
            screen: EventFeedStack
        },
        Search: getCustomRouter(createStackNavigator({Search}))
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
