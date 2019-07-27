import React from 'react';
import {NavigationParams, NavigationRoute, NavigationScreenProp} from "react-navigation";


export interface RequiredProps {
    screenProps: {}
    navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
}

export default function getCustomRouter<NavigatorProps extends RequiredProps>(Navigator: any) {
    return class extends React.Component<NavigatorProps, {}> {
        static router = Navigator.router;

        render() {
            const {screenProps, navigation, ...props} = this.props;

            return <Navigator
                {...props}
                screenProps={{...screenProps, tabNavigation: navigation}}
                navigation={navigation}
            />
        }
    }
}
