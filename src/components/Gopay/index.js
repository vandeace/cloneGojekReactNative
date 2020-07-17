import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Gopay = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topWrapper}>
        <Image source={require('../../assets/icon/gopay.png')} />
        <Text style={styles.textPrice}>Rp 50.000</Text>
      </View>
      <View style={styles.bottonWrapper}>
        <View style={styles.gopayIcon}>
          <Image source={require('../../assets/icon/pay.png')} />
          <Text style={styles.gopayText}>Pay</Text>
        </View>
        <View style={styles.gopayIcon}>
          <Image source={require('../../assets/icon/nearby.png')} />
          <Text style={styles.gopayText}>Nearby</Text>
        </View>
        <View style={styles.gopayIcon}>
          <Image source={require('../../assets/icon/topup.png')} />
          <Text style={styles.gopayText}>Top Up</Text>
        </View>
        <View style={styles.gopayIcon}>
          <Image source={require('../../assets/icon/more.png')} />
          <Text style={styles.gopayText}>More</Text>
        </View>
      </View>
    </View>
  );
};

export default Gopay;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 8,
    marginHorizontal: 17,
  },
  textPrice: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  topWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2c5fb8',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
  },
  bottonWrapper: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: '#2f65bd',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  gopayIcon: {
    flex: 1,
    alignItems: 'center',
  },
  gopayText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
});
