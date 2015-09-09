
Office board experiment
=======================

**Todo**

- figure out react & flux
- add widgets
- acquire currency, disregard females

Widgets
-------

The board is configured to display widgets. A widget is an independent encapsulated component and should typically contain a controller (index.js) which is responsible for the widget instantiation, a store, the widget styles and the actual react component (jsx).

The controller is responsible for checking if the widget is "active". It uses the dispatcher to notify the board when to show or remove the component.

All widgets should be imported in the `widget.manifest.js` bootstrap.

**Todo**

- widget fade out transitions
- widget display options like timing
- widget sorting and priority
- investigate build options (dist/script is over 1MB)

**Widget suggestions**
- payday
- birthdays
- devops
- slack group messages