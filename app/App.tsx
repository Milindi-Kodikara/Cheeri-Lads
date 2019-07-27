import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from "./screens/navigators/RootNavigator";
import {ApolloProvider} from "react-apollo";
import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
  uri: "http://192.168.43.116:3000/graphql"
});

export default class App extends React.Component<{}, {}> {
  render() {
    return <ApolloProvider
      client={client}
    >
      <RootNavigator/>
    </ApolloProvider>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
