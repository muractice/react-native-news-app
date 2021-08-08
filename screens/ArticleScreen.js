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
import ClipButton from '../components/ClipButton'
import Loading from '../components/Loading'
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
    const { clips } = user

    console.log('articlescreen start')

    const isClipped = () => {
        return clips.some((clip) => clip.url === article.url)
    }

    const toggleClip = () => {
        if (isClipped()) {
            console.log('deleteclip start')
            dispatch(deleteClip({ clip: article }))
        } else {
            console.log('addClip start')
            dispatch(addClip({ clip: article }))
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ClipButton onPress={toggleClip} enabled={isClipped()} />
            <WebView
                source={{ uri: article.url }}
                startInLoadingState={true}
                renderLoading={() => <Loading />}
            />
        </SafeAreaView>
    )
}
