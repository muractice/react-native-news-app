import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import axios from 'axios'

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

export default function HomeScreen({ navigation }) {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            const response = await axios.get(URL)
            setArticles(response.data.articles)
            // console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({ item }) => (
                    <ListItem
                        imageUri={item.urlToImage}
                        title={item.title}
                        auther={item.author}
                        onPress={() =>
                            navigation.navigate('Article', { article: item })
                        }
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}
