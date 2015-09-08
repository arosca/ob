import React from 'react';
import WeatherStore from 'weather/weather.store.js';
import Weather from 'weather/weather.jsx';
import Dispatcher from 'dispatcher';

let tempFlag = 30;
var WeatherWidget = React.createElement(Weather);

var weatherUpdate = (store) => {
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

WeatherStore.on('change',weatherUpdate);
