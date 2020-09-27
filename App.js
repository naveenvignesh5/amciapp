import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

import {Home} from './src/screens';

function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

export default App;
