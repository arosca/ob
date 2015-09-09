import React from 'react';
import WeatherStore from 'weather/weather.store.js';
import Weather from 'weather/weather.jsx';
import Dispatcher from 'dispatcher';

const tempFlag = 30;
let WeatherWidget = React.createElement(Weather, {priority: 1});

let weatherUpdate = (store) => {
    if (store.get('main').temp > tempFlag) {
        return Dispatcher.dispatch({
            actionType: 'widget:active',
            widget: WeatherWidget
        });
    }
    return Dispatcher.dispatch({
        actionType: 'widget:inactive',
        widget: WeatherWidget
    });
}

WeatherStore.on('change', weatherUpdate);
