import React, { Component } from 'react';


class Repos extends Component {
    
    render() {
        return (
            <div>
                <h1>Repo {this.props.params.repo}</h1>
            </div>
        );
    }
}
export default Repos;