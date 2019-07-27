import React from 'react';
import CustomText from "../components/CustomText";
import { SearchBar } from 'react-native-elements';


interface SearchProps {
}

interface SearchState {
}

export default class Search extends React.Component<SearchProps, SearchState> {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    // Need to embed this in to the nav bar
    render() {
        const { search } = this.state;
        return (
            <SearchBar
                platform="ios"
                placeholder="Search..."
                onChangeText={this.updateSearch}
                value={search}
            />
        );
        
        // Need a List View Here, could re use the EventList view
    }
}
