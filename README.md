This react app is based on this [boilerplate](https://github.com/mxstbr/react-boilerplate).
To know more - please, [read docs here](https://github.com/mxstbr/react-boilerplate/tree/master/docs).

# Preparations

### Install dependencies

`npm install` or `yarn install`

### Run server

`npm start`

### Scaffolding

`npm run generate conponent`

`npm run generate container`

`npm run generate router`

These commands will bring a dialog where you can choose how to name your
component/container/router, ...

### Run tests

`npm test`

### Linting JS

`npm run lint`


# Conventions

- Try to **split** your code into components/containers
- **Component** - something that just render some thing, e.g Button. To
  generate component use `npm run generate component`. Select `ES6
Class` or `Stateless Function` (if it's pretty dumb) as the type of component. Add i18n messages if this component
uses text.
- **Container** - something that contains complex logic and holds state.
  To generate container use `npm run generate container`. Select
`Component` as base component. Add headers for *pages* (see
corresponding menu option).  Add i18n messages if this component
uses text.
- **Pages** - something that represents a whole page.



See [this post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.oy1x3kj09) to understand containers/components.
