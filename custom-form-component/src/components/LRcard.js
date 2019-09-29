import React, { Component } from 'react';
import Dropdown from './Dropdown.js';

class LRCard extends Component {
    state = {
        location: [
            {
                id: 0,
                title: 'New York',
                selected: false,
                key: 'location'
            },
            {
                id: 1,
                title: 'Dublin',
                selected: false,
                key: 'location'
            },
            {
                id: 2,
                title: 'California',
                selected: false,
                key: 'location'
            },
            {
                id: 3,
                title: 'Istanbul',
                selected: false,
                key: 'location'
            },
            {
                id: 4,
                title: 'Izmir',
                selected: false,
                key: 'location'
            },
            {
                id: 5,
                title: 'Oslo',
                selected: false,
                key: 'location'
            }
        ]
    }

    toggleSelected(id, key){
        let temp = this.state[key] // key is location. this.state.location
        temp[id].selected = !temp[id].selected //this.state.location[id] is a way to select a speific object in state
        this.setState({ [key] :  temp}) //
    }

render(){
        return (
            <div>
                <Dropdown
                title="Select location"
                titleHelper='Location'
                list={this.state.location}
                toggleitem={this.toggleSelected}
                />
            </div>
        )
    }
}

export default LRCard;
