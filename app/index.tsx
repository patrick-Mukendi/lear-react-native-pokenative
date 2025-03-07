import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Text>Edit a app/index.tsx to edit this screen.</Text>
      <Link href="/about">About</Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {backgroundColor: '#FF0000', padding: 24}
})
