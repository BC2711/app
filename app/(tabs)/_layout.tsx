import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { IMAGES } from '../constant';

const tabIcon = ({ focused, icon, title }: { focused: boolean; icon: keyof typeof IMAGES; title: string }) => {
    if (focused) {
        return (
            <ImageBackground
                source={IMAGES.highlight}
                className="flex flex-row w-full flex-1 min-w-[112px] min-h-16  mt-4 justify-center items-center rounded-full overflow-hidden"
            >
                <Image
                    source={IMAGES[icon]}
                    tintColor="#151312"
                    className="size-5"
                />
                <Text className="text-secondary text-base font-semibold ml-1">{title}</Text>
            </ImageBackground>
        );
    } else {
        return (
            <View className="size-full justify-center items-center mt-4 rounded-full">
                <Image
                    source={IMAGES[icon]}
                    tintColor="#A8B5DB"
                    className="size-5"
                />
            </View>
        );
    }
};

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarStyle: {
                    backgroundColor: '#0f0D23',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 52,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: "#0f0d23"
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => tabIcon({ focused, icon: "home", title: "Home" }),
                }}
            />
            <Tabs.Screen
                name="Search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => tabIcon({ focused, icon: "search", title: "Search" }),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: "Saved",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => tabIcon({ focused, icon: "save", title: "Saved" }),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => tabIcon({ focused, icon: "profile", title: "Profile" }),
                }}
            />
        </Tabs>
    );
};

export default _layout;
