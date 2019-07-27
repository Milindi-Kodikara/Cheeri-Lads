import React from 'react';
import { View } from 'react-native'
import { ListItem } from 'react-native-elements'
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Container from "../containers/Container";
import CustomText from "../components/CustomText";
import { string } from 'prop-types';
import EventList from "../containers/EventList";
import _ from "underscore";

interface FilterProps {
    
}

const GET_FEEDS = gql`query GET_FEEDS {
    allFeeds {
        edges {
            node {
                id
                name
                color
                category
            }
        }
    }
}`;

type Data = {
    allFeeds: {
        edges: {
            node: {
                id: string;
                name: string;
                end: string;
                category: string;
                feed: {
                    id: string;
                    name: string;
                    color: string;
                }
            }
        }[]
    }
};

export default class Filter extends React.Component{
    render() {
        return <Query<Data, {}> query={GET_FEEDS}>{({ data, error, loading }) => {
            
            if (loading) {
                return <CustomText>Loading!</CustomText>
            } else {
                let categories = _.uniq(data.allFeeds.edges.map(edge => edge.node.category))
                return <View>
                    {categories.map((category) => (
                        <ListItem
                            key={category}
                            title={category}
                        />
                    ))}
                </View>
            }
        }}</Query>
    }
}
