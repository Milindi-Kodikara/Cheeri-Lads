import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import CustomText, {CustomTextProps} from "./CustomText";
import UtilityHOC from "../utils/UtilityHOC";


interface CustomButtonProps extends CustomTextProps{
    onPress(): void;
    textStyle?: object;
    style?: object;
}

interface CustomButtonState {
}

class CustomButton extends React.Component<CustomButtonProps, CustomButtonState> {

    render() {
        const {onPress, children, textStyle, style, ...textProps} = this.props;
        const {defaultButton, defaultButtonText} = styles;

        return <TouchableOpacity
            onPress={onPress}
            style={[
                defaultButton,
                style
            ]}
        >
            <CustomText
                centered
                style={[
                    defaultButtonText,
                    textStyle
                ]}
                {...textProps}
            >{children}</CustomText>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    defaultButton: {
        padding: 7,
        borderRadius: 5,
        backgroundColor: "#222222",
        alignSelf: "flex-start"
    },
    defaultButtonText: {
        color: "#FFFFFF"
    }
});

export default UtilityHOC(CustomButton)
