import Backbone from 'backbone';
import Dispatcher from 'dispatcher';
import EventEmitter from 'events';

import 'widget.manifest';

let addWidget = (widget)=>{
    widgets.push(widget);
}

let removeWidget = (widget)=>{
    let index = widgets.indexOf(widget);
    if (index !== -1) {
        widgets = widgets.splice(index+1,1);
    }
}

let sortWidgets = () => {
    // console.log(widgets);
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

let widgets = [];
let WidgetStore = new Store();

Dispatcher.register((payload)=>{
    switch(payload.actionType) {
        case 'widget:active':
            addWidget(payload.widget);
            sortWidgets();
            WidgetStore.emit('change');
            break;
        case 'widget:inactive':
            removeWidget(payload.widget);
            sortWidgets();
            WidgetStore.emit('change');
            break;
    }
});

module.exports = WidgetStore;