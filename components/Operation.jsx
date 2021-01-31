import React  from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

export default function OperationBtn(props) {
    return (
        <View style={styles.operationsColumn}>
            {
              props.data.map((column) => (
                <TouchableHighlight key={column} style={styles.operationsItem}>
                  <Text>{column}</Text>
                </TouchableHighlight>
              ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    operationsItem: {
        height: '17%',
        width: '80%',
        backgroundColor: 'yellow', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: '50%', 
        margin: 5, 
        color: 'black'
    }, 
    operationsColumn: {
        flex: 1, 
        flexDirection: 'column', 
        alignContent: 'stretch', 
        alignItems: 'center', 
        justifyContent: 'center',
    }, 
})