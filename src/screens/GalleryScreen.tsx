import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Text>Galeria Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#be497aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});