import React, { useEffect } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SplashBG, Logo } from '../../assets'

const Splash = ({ navigation }) => {
        useEffect(() => {
            setTimeout( () => {
            navigation.replace('Mainapp');
        }, 3000)
    }, [navigation]);

    return (
       <ImageBackground source={SplashBG} style={styles.background}>
           <Image source={Logo} style={styles.logo} />
       </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 222,
        height: 105
    }

})
