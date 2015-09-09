import React from 'react';
import Widget from 'widget/index.jsx';

import 'weather/weather.scss';

module.exports = class Weather extends Widget {
    render() {
        return (<div className="card">E foarte cald!</div>)
    }
};
