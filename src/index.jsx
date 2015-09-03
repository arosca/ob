import React from 'react';
import './main.scss';


import Header from './common/header/index.jsx';
import Weather from './weather/index.jsx';

class Board extends React.Component {
    componentWillMount() {
        this.widgets = [
            <Weather />
        ];
    }
    render() {
        return (
        <div>
            <Header />
            <div className="office-board">
                {this.widgets}
            </div>
        </div>
        );
    }
}

React.render(<Board />, document.body);