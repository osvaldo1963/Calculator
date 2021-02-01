import React  from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function OperationBtn(props) {
    return (
        <View style={styles.operationsColumn}>
            {
              props.data.map((column) => (
                <TouchableHighlight key={column} style={styles.operationsItem}>
                  <Text style={styles.operationText}>{column}</Text>
                </TouchableHighlight>
              ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
  operationsColumn: {
    justifyContent: 'space-between',
    alignContent: 'stretch',
    marginBottom: 90
  }, 
  operationsItem: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 70, 
    marginTop: 6
  },
  operationText: {
    fontSize: 27,
    fontWeight: 'bold'
  } 
})