import React from 'react';
import 'common/styles/main.scss';

import Header from 'common/header/index.jsx';
import WidgetStore from 'widget/widget.store.jsx';


class Board extends React.Component {
    constructor() {
        super();
        this.state = {widgets:[]};
    }

    componentDidMount() {
        WidgetStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        WidgetStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange() {
        this.setState({
            widgets: WidgetStore.getWidgets()
        });
    }

    render() {
        return (
            <div className="office-board">
                <Header />
                <section>
                    {this.state.widgets}
                </section>
            </div>
        );
    }
}

React.render(<Board />, document.body);