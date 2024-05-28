import { View, Text, Image, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Chats from '../views/Chat/Chats';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: COLORS.white,
                    height: Platform.OS === 'ios' ? 110 : 60,
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 32,
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? icons.internet : icons.internetOutline}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Chats'
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? icons.bubbleChat : icons.bubbleChatOutline}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='AddPost'
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={
                            {
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.primary,
                                height: Platform.OS === 'ios' ? 70 : 60,
                                width: Platform.OS === 'ios' ? 70 : 60,
                                top: Platform.OS === 'ios' ? -40 : -30,
                                borderRadius: Platform.OS === 'ios' ? 35 : 30,
                                borderWidth: 3,
                                borderColor: 'transparent',

                            }
                        }>
                            <Image
                                source={icons.plus}
                                resizeMode='contain'
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: COLORS.white
                                }}
                            />
                        </View>
                    )
                }}
            />

            <Tab.Screen
                name='Call'
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? icons.phoneCall : icons.phoneCallOutline}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name='Settings'
                component={Chats}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? icons.settings : icons.settingsOutline}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                tintColor: focused ? COLORS.primary : COLORS.gray
                            }}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTabNavigation