import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

interface BatTextInputProps {
  pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput
      style={styles.inputer}
      placeholder='pass'
      value={props.pass}
    />
  );
}