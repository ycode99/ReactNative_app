import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dumytext}>Wellcome To Native App</Text>
      <Text style={styles.dumytext}>Yashwant Apply styles</Text>
      <Button title="Click Here !!!!!"/>
      
      <StatusBar style="auto" />
    </View>
  );
}

//StyleSheet object
const styles = StyleSheet.create({
  container: {
    padding: 50,
  }
});



 