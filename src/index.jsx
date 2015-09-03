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
        <div className="office-board">
            <Header />
            <section>
                {this.widgets}
            </section>
        </div>
        );
    }
}

React.render(<Board />, document.body);