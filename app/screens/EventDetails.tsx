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

    constructor(props) {
        super(props);
        this.state = {
            registered: false
        }
    }

    render() {

        let event = {
            id: 'abcde',
            eventDate: new Date(),
            start: new Date(),
            end: new Date(),
            name: '101 Web Dev',
            location: '80.5.10',
            organiser: "The Programming Club",
            description: 'Wanna develop a webpage with our Boi Nolan?! Well look no more coz we are hosting a workshop just for that!!! Also featuring boy wonder Thomas "Bert" Frantzzzzzz!',
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
                <Text style={{fontSize: 20}}>{event.name}</Text>
                <Text style={{fontSize: 15}}>{event.organiser}</Text>
            </View>
            <Image source={{uri: event.imageURL}} style={styles.Image}/>
            <CustomButton style={styles.Button} onPress={() => {
                this.setState({registered: !this.state.registered})
            }}>{this.state.registered ? " Cancel " : "Register"}</CustomButton>
            <Container row style={{alignItems: 'flex-start', borderTopColor: "#F0F0F0", borderTopWidth: 1, marginLeft: 10, marginRight:10}}>
                <Text style={{fontSize: 14, padding: 20, flex: 1}}>{event.description}</Text>
                <View style={{flex: 1, padding: 20}}>
                    <Container row style={{alignItems: 'center', paddingRight: 10}}>
                        <Icon name={'schedule'}/>
                        <View style={{flex: 1}}>
                            <Text style={{
                                fontSize: 11,
                                padding: 10
                            }}>{event.start.toLocaleString('en-GB', options)}</Text></View>
                    </Container>
                    <Container row style={{alignItems: 'center', paddingRight: 10}}>
                        <Icon name={'location-on'}/>
                        <View style={{flex: 1}}>
                            <Text style={{fontSize: 11, padding: 10}}>{event.location}</Text></View>
                    </Container>
                    {/*<Text style={{fontSize: 10}}>{event.end.toLocaleString('en-GB', options)}</Text>*/}
                </View>
            </Container>
            <Text style={{marginLeft: 10, padding: 10, fontSize: 14}}>See who else is coming . . .</Text>
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
        padding: 10,
        color: "#000"
    },
    Image: {
        margin: 10,
        width: 394,
        aspectRatio: 2,
        borderRadius: 10
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
        paddingLeft: 10,
        width: 80,
        aspectRatio: 1,
        borderRadius: 40
    }
});