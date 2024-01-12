import { Text, View } from "react-native";
import styles from "./Styles";
import { StatusBar } from "expo-status-bar";
import { BatLogo } from "../../components/BatLogo";

export function Home(){
  return (
    <View style={styles.container}>
      <BatLogo />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}