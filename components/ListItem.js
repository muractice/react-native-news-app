import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        height: 100,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'row',
    },
    leftContainer: {
        backgroundColor: 'red',
        width: 100,
    },
    rightContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
    },
    subText: {
        fontSize: 12,
        color: 'gray',
    },
})

const ListItem = ({ imageUri, title, auther, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View style={styles.leftContainer}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: imageUri }}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>
                    {title}
                </Text>
                <Text style={styles.subText}>{auther}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem
