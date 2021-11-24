import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text styles={styles.itemText}> {props.text} </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    square: {
        width: 25,
        height: 25,
        backgroundColor: '#55BCF6',
        marginRight: 10,
        opacity: 0.5,
        borderRadius: 5,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 15,
        height: 15,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#55B7F6',
    },
});

export default Task;