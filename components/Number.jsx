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
        flexBasis: 80, 
        height: 80, 
        backgroundColor:'gray', 
        alignItems:'center',
        justifyContent: 'center', 
        borderRadius: 45, 
        margin: 6
    },
    rowText: {
        fontSize: 27, 
        fontWeight: 'bold', 
        color: 'white'
    },
})