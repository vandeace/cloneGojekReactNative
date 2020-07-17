import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ScrollNews = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{position: 'relative'}}>
        <Image
          style={styles.imageNews}
          source={require('../../assets/image/sepak-bola.jpg')}
        />
        <View style={styles.imageDark}></View>
        <View
          style={{
            height: 15,
            width: 55,
            position: 'absolute',
            left: 16,
            top: 16,
          }}>
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
      </View>
      <View
        style={{
          paddingBottom: 20,
          paddingTop: 16,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
          GO-NEWS
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            color: '#7a7a7a',
            marginBottom: 11,
          }}>
          Dimas Drajat selamatkan penalti, Timnas U-23 kalahkan Brunei
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#61a756',
            paddingHorizontal: 12,
            paddingVertical: 11,
            alignSelf: 'flex-end',
            borderRadius: 4,
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScrollNews;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
    paddingHorizontal: 17,
  },
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
    opacity: 0.2,
    borderRadius: 6,
  },
});
