import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import SocicalButton from '../../components/SocicalButton'

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image
          source={images.logo}
          resizeMode='contain'
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>
          hello there! Continue with and listen the stories from around the world
        </Text>
        <View style={{ marginVertical: 32 }}>
          <SocicalButton
            title="Continue with Apple"
            icon={icons.appleLogo}
            onPress={() => navigation.navigate('Main')}
          />
          <SocicalButton
            title="Continue with Goole"
            icon={icons.google}
            onPress={() => navigation.navigate('Main')}
          />
          <SocicalButton
            title="Continue with Email"
            icon={icons.email}
            onPress={() => navigation.navigate('Main')}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.loginTitle}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.loginSubtitle}>{" "}Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomTitle}>By continuing, you aggree to the terms of you and</Text>
          <TouchableOpacity>
            <Text style={styles.bottomSubTitle}>Privacy Policy.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
    padding: 16
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 22,
    marginTop: -22
  },
  title: {
    fontSize: 28,
    fontFamily: "bold",
    color: COLORS.black,
    marginVertical: 12,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.black,
    textAlign: "center",
    paddingHorizontal: 16,
  },
  loginTitle: {
    fontSize: 14,
    fontFamily: "semiBold",
    color: COLORS.black
  },
  loginSubtitle: {
    fontSize: 14,
    fontFamily: "semiBold",
    color: COLORS.primary,
    textDecorationLine: "underline"
  },
  bottomContainer: {
    position: "absolute",
    bottom: 32,
    right: 0,
    left: 0,
    width: SIZES.width - 32,
    alignItems: "center"
  },
  bottomTitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black,
  },
  bottomSubTitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black,
    textDecorationLine: 'underline',
    marginTop: 2
  }
});

export default Welcome