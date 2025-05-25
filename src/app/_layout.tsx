import '../../global.css'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { ThemeProvider, DarkTheme } from '@react-navigation/native'


const theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'white',
        card: '#101010'
    },
}
const RootLayout = () => {
    return (
        <ThemeProvider value={theme} >
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name='(tabs)' />
            </Stack>
        </ThemeProvider>

    )
}

export default RootLayout
