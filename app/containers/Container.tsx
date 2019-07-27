import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from "react-native";
import UtilityHOC from "../utils/UtilityHOC";


interface ContainerProps {
    scrollable?: true;
    centerItems?: true;
    row?: true;
    left?: true;
    screenContainer?: true;

    onPress?(): void;
    style?: object;
}

interface ContainerState {
}

class Container extends React.Component<ContainerProps, ContainerState> {
    render() {
        const {
            scrollable,
            children,
            style,
            centerItems,
            row,
            left,
            screenContainer,
            onPress
        } = this.props;

        const {
            centerItems: centerItemsStyle,
            row: rowStyle,
            left: leftStyle,
            scrollable: scrollableStyle,
            screenContainer: screenContainerStyle
        } = styles;

        let element = <View
            style={[
                centerItems && centerItemsStyle,
                row && rowStyle,
                left && leftStyle,
                (scrollable || screenContainer) && scrollableStyle,
                screenContainer && screenContainerStyle,
                style
            ]}
        >{children}</View>;

        if (onPress) {
            element = <TouchableOpacity onPress={onPress}>{element}</TouchableOpacity>
        }
        if (scrollable || screenContainer) {
            element = <ScrollView>{element}</ScrollView>
        }

        return element;
    }
}

const styles = StyleSheet.create({
    centerItems: {
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center"
    },
    scrollable: {
        marginBottom: 13
    },
    screenContainer: {
        paddingTop: 25,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 13,
    },
    left: {
        justifyContent: "flex-start"
    }
});

export default UtilityHOC<ContainerProps>(Container)