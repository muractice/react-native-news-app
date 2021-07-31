import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Touchable,
} from 'react-native'
import { WebView } from 'react-native-webview'
import { useDispatch, useSelector } from 'react-redux'
import { addClip, deleteClip } from '../store/actions/user'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default ArticleScreen = ({ route }) => {
    const { article } = route.params
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const { clips } = state.user

    const isClipped = () => {
        return clips.some((clip) => clip.url === article.url)
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    dispatch(addClip({ clip: article }))
                }}
            >
                <Text style={{ margin: 10, fontSize: 30 }}>ADD_CLIP</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    dispatch(deleteClip({ clip: article }))
                }}
            >
                <Text style={{ margin: 10, fontSize: 20 }}>DELETE_CLIP</Text>
            </TouchableOpacity>
            <WebView source={{ uri: article.url }} />
        </SafeAreaView>
    )
}
