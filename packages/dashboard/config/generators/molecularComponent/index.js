/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a molecular component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value.charAt(0).toUpperCase() + value.slice(1)) ? 'This name already exists' : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want Headers with react helmet ?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message: 'Do you want an actions/constants/selectors/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
  ],
  actions: data => {
    // index.js
    const actions = [
      {
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/index.js',
        templateFile: './utils/seeds/index.js.hbs',
        abortOnFail: true,
      },
      // Constants
      {
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/constants.js',
        templateFile: './utils/seeds/constants.js.hbs',
        abortOnFail: true,
      },
      // index.test.js
      {
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/tests/index.test.js',
        templateFile: './utils/seeds/test.js.hbs',
        abortOnFail: true,
      },
      // Loadable
      {
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/Loadable.js',
        templateFile: './utils/seeds/loadable.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/messages.js',
        templateFile: './utils/seeds/messages.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/actions.js',
        templateFile: './utils/seeds/actions.js.hbs',
        abortOnFail: true,
      });
      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/selectors.js',
        templateFile: './utils/seeds/selectors.js.hbs',
        abortOnFail: true,
      });
      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/reducer.js',
        templateFile: './utils/seeds/reducer.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../app/components/molecules/{{properCase name}}/saga.js',
        templateFile: './utils/seeds/saga.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/components/molecules',
    });

    return actions;
  },
};
