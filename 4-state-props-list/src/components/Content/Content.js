import React, { Component } from 'react';
import './Content.css'

class Content extends Component {
    getList(li) {
        return (
            li.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        )
    }
    render() {
        return (
            <div className="App-intro">
                <h2>Content</h2>
                <p>Count: {this.props.count}</p>
                <table>

                    <colgroup>
                        <col style={{ backgroundColor: 'red' }} />
                        <col style={{ backgroundColor: 'yellow' }} />
                    </colgroup>

                    <thead>
                        <tr>
                            <th>Framework</th>
                            <th>Library</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    {this.getList(this.props.framework)}
                                </ul>
                            </td>

                            <td>
                                <ul>
                                    {this.getList(this.props.library)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Content;