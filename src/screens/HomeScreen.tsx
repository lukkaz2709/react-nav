import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({navigation} : any) {

    function navToGallery  ()  {
        navigation.navigate('Gallery');
    };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
      title='Go to Gallery'
      onPress={navToGallery}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#439b48ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});