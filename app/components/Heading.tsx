import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Heading extends React.Component<{},{}>{
    render(){
        return <Text style={styles.Heading}>{this.props.children}</Text>
    }
}

const styles = StyleSheet.create({
    Heading: {fontSize: 30, color: "#FFF"}
});
