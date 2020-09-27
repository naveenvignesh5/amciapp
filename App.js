import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';

// store
import {store} from './src/redux';

// screens
import {Home} from './src/screens';

function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Home />
      </PaperProvider>
    </StoreProvider>
  );
}

export default App;
