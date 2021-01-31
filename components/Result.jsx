import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultSection(props) {
    return (
        <View style={styles.Resultsection}>
            <Text style={styles.result}>{props.result}</Text>
        </View>
    )
} 
const styles = StyleSheet.create({
    Resultsection: {
        height: '25%', 
       justifyContent: 'flex-end'
    },
    result: {
        fontWeight: 'bold', 
        textAlign:'right', 
        fontSize: 57,
        padding: 20,
        color: 'white'
    },
})