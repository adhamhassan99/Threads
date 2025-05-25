import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'

type Props = {}

export default function TabsLayout(props: Props) {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarShowLabel: false }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Feather name='home' size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name='Search' options={{
                title: 'Search',
                tabBarIcon: ({ color, size }) => (
                    <Feather name="search" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name='Favorite' options={{
                title: 'Favorite',
                tabBarIcon: ({ color, size }) => (
                    <Feather name="heart" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name='Profile' options={{
                title: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <Feather name="user" size={size} color={color} />
                ),
            }} />
        </Tabs>
    )
}

