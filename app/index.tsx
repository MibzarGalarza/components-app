import { View, Text } from 'react-native'
import React from 'react'
import { Href, Link } from 'expo-router'
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import ThemedView from '@/presentation/shared/ThemedView'
import MenuItem from '@/presentation/menu/MenuItem'

const ComponentsApp = () => {
    return (
        <ThemedView margin>
            {
                animationMenuRoutes.map((route, index) => (
                    <Link href={route.name.split('/')[0] as Href}>
                        <MenuItem
                            title={route.title}
                            icon={route.icon}
                            name={route.name}
                            key={route.title}
                            isFirst={index === 0 ? true : false}
                            isLast={index === animationMenuRoutes.length - 1}
                        />
                    </Link>
                ))
            }
            <View className='my-5' />
            {
                uiMenuRoutes.map((route, index) => (
                    <Link href={route.name.split('/')[0] as Href}>
                        <MenuItem
                            title={route.title}
                            icon={route.icon}
                            name={route.name}
                            key={route.title}
                            isFirst={index === 0 ? true : false}
                            isLast={index === uiMenuRoutes.length - 1}
                        />
                    </Link>
                ))
            }
            <View className='my-5' />
            {
                menuRoutes.map((route, index) => (
                    <Link href={route.name.split('/')[0] as Href}>
                        <MenuItem
                            title={route.title}
                            icon={route.icon}
                            name={route.name}
                            key={route.title}
                            isFirst={index === 0 ? true : false}
                            isLast={index === menuRoutes.length - 1}
                        />
                    </Link>
                ))
            }
        </ThemedView>
    )
}

export default ComponentsApp