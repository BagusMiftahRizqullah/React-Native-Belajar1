import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { 
    IconSaldo, 
    IconPoint, 
    IconEkspress, 
    IconKarpet, 
    IconKiloan, 
    IconSatuan, 
    IconSetrika, 
    IconVIP,
 } from '../../assets';
import { BG_ICON } from '../../utils/constan';

const Buttonicon = ({ title, type }) => {

    const Icon = () => {
        if (title === "Add Saldo") return <IconSaldo />

        if (title === "Get Point") return <IconPoint />

        if (title === "Ekspress") return <IconEkspress />

        if (title === "Karpet") return <IconKarpet />

        if (title === "Kiloan") return <IconKiloan />

        if (title === "Satuan") return <IconSatuan />

        if (title === "Setrika") return <IconSetrika />

        if (title === "VIP") return <IconVIP />

        return <IconSaldo />
    }


    return (
        <TouchableOpacity>
            <View style={styles.button(type)}>
                
                <Icon />
            </View>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Buttonicon

const styles = StyleSheet.create({
    
    container: (type) => ({
        marginBottom : 12,
        marginRight: type === 'layanan' ? 30 : 0,
    }),

    button: (type) => ({
        backgroundColor: BG_ICON,
        padding: type === "layanan" ? 12 : 7,
        borderRadius: 10,
    }),

    text: (type) => ({
        fontSize: type === "layanan" ? 14 : 10,
        fontFamily: 'lillimWeb-Regular',
        textAlign: 'center'

    }),
});
