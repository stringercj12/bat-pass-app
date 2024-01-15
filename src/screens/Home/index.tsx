import { Text, View } from "react-native";
import styles from "./Styles";
import { StatusBar } from "expo-status-bar";
import { BatLogo } from "../../components/BatLogo";
import { BatTextInput } from "../../components/BatTextInput";
import { BatButton } from "../../components/BatButton";

export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.inputContainer}>
        <BatButton />
      </View>

      <StatusBar style="light" />
    </View>
  );
}