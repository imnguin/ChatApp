import { Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { screens } from "../views";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
                {
                    screens.map((screen, index) => {
                        return <Stack.Screen key={index} name={screen.name} component={screen.component} />
                    })
                }
                <Stack.Screen name={'Main'} component={BottomTabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;
