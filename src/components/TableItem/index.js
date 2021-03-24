import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IconAkun, IconAkunActive, IconHome, IconHomeActive, IconPesanan, IconPesananActive } from '../../assets';
import { WARNA_NYALA, WARNA_MATI } from '../../utils/constan';


const TabItem = ({isFocused, onPress, onLongPress, label}) => {
   
    const Icon = () => {
        if(label === "Home") return isFocused ? <IconHomeActive/> : <IconHome />

        if(label === "Pesanan") return isFocused ? <IconPesananActive/> : <IconPesanan />

        if(label === "Akun") return isFocused ? <IconAkunActive/> : <IconAkun />
        return <Home />
    };

    return (
        <TouchableOpacity
          onPress={onPress}
          onLongPress={onLongPress}
          style={styles.container}>
          <Icon />
          <Text style={styles.Text(isFocused)}></Text>
        </TouchableOpacity>
    );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
      alignItems: 'center'
  },
  Text: (isFocused) =>  ({
      fontSize: 13,
      color: isFocused ? WARNA_NYALA : WARNA_MATI,
      marginTop: 8
  })
  
});
