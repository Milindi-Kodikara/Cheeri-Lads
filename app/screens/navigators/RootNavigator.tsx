import React from 'react';
import {
    createAppContainer,
    createSwitchNavigator,
    NavigationContainerComponent,
    NavigationParams,
    NavigationRoute,
    NavigationScreenProp,
    createStackNavigator,
    HeaderBackButton
} from 'react-navigation'
import EventFeed from '../EventFeed';
import EventDetails from '../EventDetails';
import EventFeedStack from "./EventFeedStack";
import Search from "../Search";
import getCustomRouter, {TabInfusedProps} from "./CustomRouter";
import {SearchBar} from "react-native-elements";
import CustomText from "../../components/CustomText";


interface RootNavigatorProps {
}

interface RootNavigatorState {
}

export interface AppProps {

}

export type NavigationProp = NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>;

export interface CustomNavigatorProps<ScreenProps = AppProps> {
    navigation: NavigationProp;
    screenProps: ScreenProps
}

const RootNavigation = createAppContainer(createSwitchNavigator(
    {
        EventFeed: {
            screen: EventFeedStack
        },
        Search: {
            screen: getCustomRouter(createStackNavigator({
                Search: {
                    screen: Search,
                    navigationOptions: ({screenProps: {tabNavigation}, navigation}: TabInfusedProps) => ({
                        headerLeft: <HeaderBackButton onPress={() => {
                            tabNavigation.navigate("EventFeed")
                        }}/>
                    })
                }
            }))

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
            screenProps={{
                ...this.props
            }}
        />
    }
}
