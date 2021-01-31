import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function NumberBtn(props) {
    return (
        <View style={styles.numberRow}>
            {
                props.data.map((row) => (
                    <TouchableHighlight key={row} style={styles.row}>
                        <Text style={styles.rowText}>{row}</Text>
                    </TouchableHighlight>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    numberRow: {
        flex:1,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    row: {
        flexBasis: '25%', 
        height: '60%', 
        backgroundColor:'gray', 
        alignItems:'center',
        justifyContent: 'center', 
        borderRadius: "50%", 
        margin: 10
      },
    rowText: {
        fontSize: 27, 
        fontWeight: 'bold', 
        color: 'white'
    },
})