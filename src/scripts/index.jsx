import React from 'react';

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
                {this.widgets}
            </div>
        );
    }
}

React.render(<Board />, document.body);