import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberBtn from './components/Number'
import OperationBtn from  './components/Operation'
import ResultSection from './components/Result'
const numbers = [
  [0, "."],
  [1, 2, 3], 
  [4, 5, 6,], 
  [7, 8, 9],
  
].reverse()
const ope = [
  "%", "X", "+", "-", "C"
]
export default function App() {
  return (
    <View style={styles.container}>
      <ResultSection result="29" />
      <View style={styles.calculatorLayout}>
        <View style={styles.numbers}>
        {
          numbers.map((column) => (
            <NumberBtn key={column} data={column} />
          ))
        }
        </View>
        <View style={styles.operations}>
          <OperationBtn data={ope} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'flex-start',
  },
  calculatorLayout: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent:'center', 
    alignContent: 'stretch', 
  }, 
  numbers: {
    flex: 6,
    flexDirection: 'column', 
    alignContent: 'stretch', 
  }, 
  operations: {
    flex: 2,
    flexDirection: 'row', 
    alignContent: 'stretch', 
   
  }, 
});
