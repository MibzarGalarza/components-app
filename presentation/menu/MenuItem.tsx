import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Href, router } from 'expo-router';
import ThemedText from '../shared/ThemedText';
import { Ionicons } from "@expo/vector-icons"
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;

    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({ title, icon, name, isFirst = false, isLast = false }: Props) => {

    const [routeName] = name.split('/');
    const primaryColor = useThemeColor({}, "primary")

    return (
        <Pressable
            className='bg-white dark:bg-black/15 px-5'
            style={{
                ...(isFirst && {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingTop: 10
                }),
                ...(isLast && {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingBotto: 10
                }),
            }}
            onPress={() => router.push(routeName as Href)}
        >
            <View className='flex-row items-center'>
                <Ionicons name={icon} size={30} color={primaryColor} className='mr-5' />
                <ThemedText type='h2'>{title}</ThemedText>
            </View>
        </Pressable>
    )
}

export default MenuItem