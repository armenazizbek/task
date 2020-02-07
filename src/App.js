import React from 'react';
import { Provider } from 'react-redux';
import MainScreen from './screens/main.screen';
import './styles/style.scss';

function App({ store }) {
  return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
  );
}

export default App;
