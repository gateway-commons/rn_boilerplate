import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable, useColorScheme } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/home.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Link href="/(chats)/main" asChild>
        <Pressable>
          {({ pressed }) => (
            <FontAwesome
              name="info-circle"
              size={25}
              color={Colors[colorScheme ?? "light"].text}
              style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            />
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});