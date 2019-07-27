import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native'
import Query from "react-apollo";
import gql from "graphql-tag";
import CustomText from "../components/CustomText";
import CustomButton from "../components/CustomButton";
import Container from "../containers/Container";
import {Icon} from "react-native-elements";

interface EventDetailsProps {
    eventID: string
}

interface EventDetailsState {
    registered: boolean;
}

export default class EventDetails extends React.Component<EventDetailsProps, EventDetailsState> {

    constructor(props){
        super(props);
        this.state = {registered: false
        }
    }
    render() {

        let event = {
            id: 'abcde',
            start: new Date(),
            end: new Date(),
            name: 'Welcome Day 2019',
            organiser: 'RUSU',
            location: "Some where ",
            description: 'Welcome to uni, again, suckahs!!!!!! BLOOPP BLERP BLEEEP BLOP PLOP JDIFDJJDOIWIDHUWIUSIOIDADDJ DJDOIADSJOI DIWIDJWKJD BARARARAAMAMAMAP{APAPAMAAPAPA',
            imageURL: 'https://sportslinkt-images.s3-ap-southeast-2.amazonaws.com/profile_410_600.jpg'
        };

        let options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return <View>
            <View style={styles.Header}>
                <Text style={{fontSize: 25}}>{event.name}</Text>
                <Text style={{fontSize: 20}}>{event.organiser}</Text>
            </View>
                <Image source={{uri: event.imageURL}} style={styles.Image}/>
            <CustomButton style={styles.Button} onPress={() => { this.setState({registered: !this.state.registered})
                     }}>{this.state.registered ? " Cancel " : "Register"}</CustomButton>
            <Container row style={{alignItems: 'flex-start', borderTopColor: "#000", borderTopWidth: 1, margin: 10}}>
            <Text style={{fontSize: 12, padding: 20, flex: 1}}>{event.description}</Text>
            <View style={{flex: 1, padding: 20}}>
                <Container row style={{alignItems: 'flex-start', paddingRight: 10}}>
                <Icon name={'schedule'} />
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 11}}>{event.start.toLocaleString('en-GB', options)}</Text></View>
            </Container>
                <Container row style={{alignItems: 'flex-start', paddingRight: 10}}>
                <Icon name={'location-on'} />
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 11}}>{event.location}</Text></View>
            </Container>
                {/*<Text style={{fontSize: 10}}>{event.end.toLocaleString('en-GB', options)}</Text>*/}
            </View>
            </Container>
            <Text style={{margin: 10, padding: 10, fontSize: 11}}>"See who else is coming  . . ."</Text>
            <Container row style={{alignItems: 'flex-start', paddingRight: 10}}>
            {/*The bottom part should go in a different function according to the number of people attending*/}
            <Image source={{uri: event.imageURL}} style={styles.Avatar}/>
                <Image source={{uri: event.imageURL}} style={styles.Avatar}/>
                <Image source={{uri: event.imageURL}} style={styles.Avatar}/>
                <Image source={{uri: event.imageURL}} style={styles.Avatar}/>
            </Container>
                {/*Add the map at the end*/}
                </View>
    }
}

const styles = StyleSheet.create({
    Header: {
        padding:10,
        color: "#000"
    },
    Image: {
        margin: 10,
        width: 394,
        aspectRatio: 2
    },
    Button: {
        margin: 10,
        paddingLeft: 150,
        paddingRight: 150,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "#000",
        alignSelf: "center"
    },
    Avatar: {
        marginLeft: 20,
        padding: 10,
        width: 80,
        aspectRatio: 1,
        borderRadius: 40
    }
});