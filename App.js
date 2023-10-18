import { useEffect, useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

function App() {
  const [count, setCount] = useState(0);
  const [dispText, setDispText] = useState('');

  useEffect(() => {
    // Whatever code we want to execute, just because...
    setDispText('Effect - The count is ' + count);
  }, [count]);
  // dependancy array - expected to contain a list of variables that the
  // useEffect is suppose to "listen out for" in order to know that it 
  // needs to execute

  return(
    <View style={styles.container}>
      <Text style={styles.textDisp}>
        COUNTER + USEEFFECT
      </Text>
      <View style={styles.buttons}>
            <Button 
                title="Increment"
                onPress={() => setCount(count + 1)}
            />
      </View>
      <View style={styles.buttons}>
            <Button 
                title="Decrement"
                onPress={() => setCount(count - 1)}
            />
      </View>
      <Text style={styles.textDisp}>Count: {count}</Text>
      <Text style={styles.textDisp}>{dispText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttons: {
    margin: 5,
    padding: 5,
  },
  textDisp: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default App;