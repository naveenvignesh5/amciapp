import React from 'react';
import {Appbar as RNPaperAppBar} from 'react-native-paper';

export function AppBar({title, subtitle}) {
  return (
    <RNPaperAppBar.Header>
      <RNPaperAppBar.Content title={title} subtitle={subtitle} />
    </RNPaperAppBar.Header>
  );
}
