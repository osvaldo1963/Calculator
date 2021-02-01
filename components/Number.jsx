import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function NumberBtn(props) {
    return (
        <View style={styles.numberRow}>
            {
                props.data.map((row) => (
                    <TouchableHighlight 
                        onPress={() => props.btnClick(row)} 
                        key={row} 
                        style={styles.row}>
                        <Text style={styles.rowText}>{ row}</Text>
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
        marginBottom: 40,        
    },
    row: {
        flexBasis: 70, 
        height: 70, 
        alignItems:'center',
        justifyContent: 'center', 
        borderRadius: 35, 
        margin: 6, 
        backgroundColor: 'gray'
    },
    rowText: {
        fontSize: 27, 
        fontWeight: 'bold', 
        color: 'white'
    },
})