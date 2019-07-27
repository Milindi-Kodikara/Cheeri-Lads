import React from 'react';
import logo from './logo.svg';
import './App.css';
//Components
import Agenda from './components/Agenda';

import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://192.168.43.116:3000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Agenda />
        </header>
      </div>
    </ApolloProvider>
  );
}
export default App;
