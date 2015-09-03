import Backbone from 'backbone';

class WeatherStore extends Backbone.Model {
    constructor() {
        super();
        this.url = 'http://api.openweathermap.org/data/2.5/weather?q=bucharst&units=metric';

        setInterval(this.fetch.bind(this),900000); // this sucks
        this.fetch();
    }

    getTemp() {
        if (this.get('main')) {
            return this.get('main').temp;
        }
    }
}

module.exports = new WeatherStore();