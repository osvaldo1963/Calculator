import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberBtn from './components/Number'
import ResultSection from './components/Result'

const numbers = [
  [0, "AC", "=", "-"],
  [1, 2, 3, "+"], 
  [4, 5, 6, "X"], 
  [7, 8, 9, "/"],
  
  
].reverse()
export default function App() {
  const [result, setResult] = useState(0)
  const [first, setFirst]   = useState(0)
  const [second, setSecond] = useState(0)
  const [operation, setOperation] = useState('')

  const onPress = (value) => {
    if(typeof value === "number") {

      setResult(current => parseInt(current+""+value))
      if(operation === ''){
        setFirst(result)
        return
      }
      setSecond(result)
    } else if(typeof value === "string") {
      if(value === "AC") {
         setResult(0) 
         setFirst(0)
         setSecond(0)
         setOperation('') 
         return
      }
      if(value === "=") {
        console.log(first.toString()+operation+second.toString())
        setResult(eval(first.toString()+operation+second.toString()))

        setResult(0) 
         setFirst(0)
         setSecond(0)
         setOperation('') 
        return 
      }
      setOperation(value)
      setResult(0)
    } 

  }
  return (
    <View style={styles.container}>
      <ResultSection result={result} />
      <View style={styles.calculatorLayout}>
        <View style={styles.numbers}>
        {
          numbers.map((column) => (
            <NumberBtn key={column} data={column} btnClick={onPress}/>
          ))
        }
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
