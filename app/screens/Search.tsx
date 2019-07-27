import React from 'react';
import CustomText from "../components/CustomText";


interface SearchProps {
}

interface SearchState {
}

export default class Search extends React.Component<SearchProps, SearchState> {
    render() {
        return (<CustomText heading bold>S E A R C H</CustomText>)
    }
}
