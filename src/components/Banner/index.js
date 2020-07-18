import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Banner = () => {
  return (
    <View style={{padding: 16}}>
      <View
        style={{
          position: 'relative',
        }}>
        <Image
          style={styles.imageNews}
          source={require('../../assets/image/food-banner.jpg')}
        />
        <View style={styles.imageDark} />
        <View style={styles.wrapperLogo}>
          <Image
            source={require('../../assets/logo/white.png')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 10,
              }}>
              Free GO-FOOD Voucher
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
              Quick, before they run out!
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 12}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#61a756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'stretch',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          marginBottom: 20,
          marginTop: 16,
        }}></View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  imageNews: {
    height: 170,
    width: '100%',
    borderRadius: 7,
  },
  imageDark: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.15,
    borderRadius: 6,
  },
  wrapperLogo: {
    height: 15,
    width: 55,
    position: 'absolute',
    left: 16,
    top: 16,
  },
});
