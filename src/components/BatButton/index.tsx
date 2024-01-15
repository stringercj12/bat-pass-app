import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import * as Clipboard from 'expo-clipboard'

import { styles } from "./styles";
import { BatTextInput } from "../BatTextInput";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken)
  }

  async function handleCopyButton() {
    await Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <BatTextInput pass={pass} />
      <Pressable
        onPress={handleGenerateButton}
        accessibilityLabel="click em mim"
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        accessibilityLabel="click em mim"
        style={styles.button}
      >
        <Text style={styles.text}>⚡ Copy</Text>
      </Pressable>
    </>
  )
}