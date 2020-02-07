import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import appState from '../reducers';

const configureStore = () => {
  const store = createStore(
    appState,
    {},
    composeWithDevTools(),
  );

  store.subscribe(() => {});

  return store;
};

export default configureStore();
