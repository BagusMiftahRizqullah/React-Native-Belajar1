import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { WARNA_NYALA } from '../../utils/constan';
import Buttonicon from '../Buttonicon';
import Gap from '../Gap';

const Saldo = () => {
    return (
        <View style={styles.container} >
            <View style={styles.infosaldo}>
                <View style={styles.text}>
                    <Text style={styles.labelsaldo}>Saldo</Text>
                    <Text style={styles.isisaldo}>Rp. 200.000</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.labelpoint}>Point Anda :</Text>
                    <Text style={styles.isipoint}>200 Points</Text>
                </View>
            </View>
            <View style={styles.tommbolaksi}>
                <Buttonicon title="Add Saldo" />
                <Gap width={10} />
                <Buttonicon title="Get Point" />
            </View>
        </View>
    );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginTop: -windowHeight * 0.07,
        flexDirection: 'row'

    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infosaldo: {
        width: '60%'

    },
    labelsaldo: {
        fontSize: 20,
        fontFamily: 'lillimWeb-Regular',
    },

    isisaldo: {
        fontSize: 20,
        fontFamily: 'lillimWeb-Regular',
    },

    labelpoint: {
        fontSize: 12,
        fontFamily: 'lillimWeb-Regular',
    },

    isipoint: {
        fontSize: 12,
        fontFamily: 'lillimWeb-Regular',
        color: WARNA_NYALA
    },

    tommbolaksi: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }


})
