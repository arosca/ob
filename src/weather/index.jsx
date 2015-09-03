import React from 'react';
import Widget from '../widget/index.jsx';

import WeatherStore from './weather.store.js';

let tempFlag = 30;

module.exports = class Weather extends Widget {
    constructor() {
        super();
        this.state = WeatherStore.toJSON();
        WeatherStore.on('change',()=>{ // this sucks
            this.setState(WeatherStore.toJSON());
        });
    }
    render() {
        // this sucks
        if (!this.state.main) {
            return <div className="card">Loading</div>
        }

        if (this.state.main.temp > tempFlag) {
            return <div className="card">E foarte clad!</div>
        } else {
            return <div className="card">Meh</div>
        }
    }
};
