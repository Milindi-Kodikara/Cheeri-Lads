import React from 'react';
import {View} from "react-native";


export default function UtilityHOC<Props extends object>(WrappedComponent: React.ComponentType<Props>) {
    interface UtilityProps{
        centered?: true;
        padded?: true | number;
        padTop?: true;
        padBottom?: true;
        padLeft?: true;
    }

    interface UtilityState {
    }

    return class extends React.Component<UtilityProps & Props, UtilityState> {
        render() {
            const {
                centered,
                padded,
                padTop,
                padBottom,
                padLeft,
                ...wrappedProps
            } = this.props;

            return (
                <View
                    style={[
                        centered && {alignSelf: "center"},
                        (padded !== undefined) && {
                            padding: 13 * (padded === true || padded === undefined ? 1 : padded as number)
                        },
                        padTop && {paddingTop: 13},
                        padBottom && {paddingBottom: 13},
                        padLeft && {paddingLeft: 13}
                    ]}
                >
                    <WrappedComponent {...wrappedProps as Props}/>
                </View>
            )
        }
    }
}
