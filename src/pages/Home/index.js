import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import { ImageHeader, Logo } from '../../assets'
import { Buttonicon, Saldo } from '../../components'


const Home = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={ImageHeader} style={styles.header}>
                <Image source={Logo} style={styles.logo} />
                <View style={styles.h1}>
                    <Text style={styles.h2}>
                        Selamat Datang,
                </Text>
                    <Text style={styles.username}
                    >Pelanggan Terhormat</Text>
                </View>
            </ImageBackground>
            <Saldo />
            <View style={styles.layanan}>
                <Text style={styles.label1}>
                    Layanan Kami
                </Text>
                <View style={styles.iconlayanan}>
                    <Buttonicon title="Kiloan" type ="layanan"/>
                    <Buttonicon title="Satuan" type ="layanan"/>
                    <Buttonicon title="VIP" type ="layanan"/>
                    <Buttonicon title="Karpet" type ="layanan"/>
                    <Buttonicon title="Setrika" type ="layanan"/>
                    <Buttonicon title="Ekspress" type ="layanan"/>
                </View>
            </View>
        </View>

    );
};

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.3,
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    logo: {
        width: windowWidth * 0.25,
        height: windowHeight * 0.06,
    },
    h1: {
        marginTop: windowHeight * 0.03
    },
    h2: {
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Regular'

    },
    username: {
        fontSize: 22,
        fontFamily: 'TitilliumWeb-Bold'

    },

    layanan: {
        paddingHorizontal: 30,
        paddingTop: 15,
    },
    label1: {
        fontSize: 18,
        fontFamily: 'TitilliumWeb-Regular',
    },
    iconlayanan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap',

    }

})
