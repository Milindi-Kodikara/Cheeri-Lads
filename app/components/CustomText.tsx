import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import UtilityHOC from "../utils/UtilityHOC";


export interface CustomTextProps {
    style?: object
    heading?: true
    subheading?: true;
    bold?: true
    label?: true
    onPress?(): void;
}

interface CustomTextState {
}

class CustomText extends React.Component<CustomTextProps, CustomTextState> {
    render() {
        const {
            style,
            children,
            heading,
            subheading,
            bold,
            label,
            onPress
        } = this.props;

        const {
            defaultText,
            heading: headingStyle,
            subheading: subheadingStyle,
            bold: boldStyle
        } = styles;

        if (label) {
            const segments = React.Children.toArray(children).join("").split(": ");

            return <View
                style={{flexDirection: "row"}}
            >
                <Text
                    style={[defaultText, boldStyle, style]}
                >{segments[0]}: </Text>
                <Text
                    style={[defaultText, style]}
                >{segments[1]}</Text>
            </View>
        }

        return <Text
            style={[
                defaultText,
                heading && headingStyle,
                subheading && subheadingStyle,
                bold && boldStyle,
                style,
            ]}
            onPress={onPress}
        >{children}</Text>
    }
}

const styles = StyleSheet.create({
    defaultText: {
        // fontFamily: "Montserrat Regular",
        fontSize: 16
    },
    heading: {
        fontSize: 32,
        paddingBottom: 13
    },
    subheading: {
        fontSize: 24,
        paddingBottom: 7
    },
    bold: {
        // fontFamily: "Montserrat Bold"
        fontWeight: "bold"
    }
});

export default UtilityHOC(CustomText)