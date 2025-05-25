import { PostListItem } from 'components/PostListItem';
import { StatusBar } from 'expo-status-bar';
import { dummyPosts } from 'faker';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />

            <PostListItem
                post={dummyPosts[0]}
                onPress={() => {
                    // Handle post press (e.g., navigate to post detail)
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
