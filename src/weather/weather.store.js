import Backbone from 'backbone';

class WeatherStore extends Backbone.Model {
    constructor() {
        super();
        // this.url = 'http://api.openweathermap.org/data/2.5/weather?q=bucharst&units=metric';
        this.url = 'mock.json';

        // setInterval(this.fetch.bind(this),900000); // 15 minutes, this sucks
        setInterval(this.fetch.bind(this),5000);
        this.fetch();
    }
}

module.exports = new WeatherStore();