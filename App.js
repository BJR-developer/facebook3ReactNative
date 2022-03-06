import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Topbar from './components/home/topbar/index'
import { styles } from './styles';
export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Topbar/>
    </View>
  );
}