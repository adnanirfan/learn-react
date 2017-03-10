import React, { Component } from 'react';
import { Link } from 'react-router';

class Repos extends Component {

    repo = [
        {
            name: 'Repo 1', url: 'https://github.com/adnanirfan'
        },
        {
            name: 'Repo 2', url: 'https://github.com/adnanirfan'
        },
        {
            name: 'Repo 3', url: 'https://github.com/adnanirfan'
        }
    ];
    render() {
        return (
            <div>
                <h1>Repos</h1>
                <ul>
                    {
                        this.repo.map((item, index) => {
                            return <li key={index}>
                                <Link to={"/repo/"+index}>{item.name}</Link>
                            </li>
                        })
                    }
                </ul>

                <div>
                    {this.props.children}
                </div>



            </div>
        );
    }
}
export default Repos;