import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag'

export default class Agenda extends React.Component {
    render() {
       return (
           <div>
                <h1>Agenda</h1>
                <Query query={gql`
                    {
                        allCourses{
                        name
                        club
                        description
                        time
                        place
                    }
                }
           `}>
                    {({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error Occurred</p>

                        return data.allEvents.map(({id, name, club, description, time, place}) =>(
                            <div key={id}>
                                <h2>{'${name}'}</h2>
                                <h3>{'Brought to you by ${club}'}</h3>
                                <ul>
                                    <li>{'On ${time}'}</li>
                                    <li>{'At ${place}'}</li>
                                </ul>
                                <p>{'${description}'}</p>
                            </div>
                        ))
                    }}
                </Query>
           </div>
       )
    }
}

