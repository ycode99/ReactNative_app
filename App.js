import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dumytext}>Wellcome To Native App</Text>
      <Text style={styles.dumytext}>Yashwant Apply styles</Text>
      <Button title="Click Here !"/>
      
      <StatusBar style="auto" />
    </View>
  );
}

//StyleSheet object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dumytext:{
    margin:20,
    borderWidth: 1,
    padding: 10,
    borderColor: 'blue',
    color: '#800080'
  }
});

 