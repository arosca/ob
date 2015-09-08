import Backbone from 'backbone';
import Dispatcher from 'dispatcher';
import EventEmitter from 'events';

import 'weather/';

var addWidget = (widget)=>{
    widgets.push(widget);
}

var removeWidget = (widget)=>{
    var index = widgets.indexOf(widget);
    widgets = widgets.splice(index+1,1);
}

class Store extends EventEmitter {

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    getWidgets() {
        return widgets;
    }
};

var widgets = [];
var WidgetStore = new Store();

Dispatcher.register((payload)=>{
    switch(payload.actionType) {
        case 'widget:active':
            addWidget(payload.widget);
            WidgetStore.emit('change');
            break;
        case 'widget:inactive':
            removeWidget(payload.widget)
            WidgetStore.emit('change');
            break;
    }
});

module.exports = WidgetStore;