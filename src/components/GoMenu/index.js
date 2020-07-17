import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const GoMenu = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapperTop}>
        <View style={styles.wrapperFeature}>
          <View style={styles.iconFeature}>
            <Image source={require('../../assets/icon/go-ride.png')} />
          </View>
          <Text style={styles.textFeature}>GO-RIDE</Text>
        </View>
        <View style={styles.wrapperFeature}>
          <View style={styles.iconFeature}>
            <Image source={require('../../assets/icon/go-car.png')} />
          </View>
          <Text style={styles.textFeature}>GO-CAR</Text>
        </View>
        <View style={styles.wrapperFeature}>
          <View style={styles.iconFeature}>
            <Image source={require('../../assets/icon/go-bluebird.png')} />
          </View>
          <Text style={styles.textFeature}>GO-BLUEBIRD</Text>
        </View>
        <View style={styles.wrapperFeature}>
          <View style={styles.iconFeature}>
            <Image source={require('../../assets/icon/go-send.png')} />
          </View>
          <Text style={styles.textFeature}>GO-SEND</Text>
        </View>
      </View>
      <View style={styles.iconWrapperBottom}>
        <View style={styles.wrapperFeature}>
          <View style={styles.iconFeature}>
            <Image source={require('../../assets/icon/go-deals.png')} />
          </View>
          <Text style={styles.textFeature}>GO-DEALS</Text>
        </View>
        <View style={styles.wrapperFeature}>
          <View style={styles.iconFeature}>
            <Image source={require('../../assets/icon/go-pulsa.png')} />
          </View>
          <Text style={styles.textFeature}>GO-PULSA</Text>
        </View>
        <View style={styles.wrapperFeature}>
          <View style={styles.iconFeature}>
            <Image source={require('../../assets/icon/go-food.png')} />
          </View>
          <Text style={styles.textFeature}>GO-FOOD</Text>
        </View>
        <View style={styles.wrapperFeature}>
          <View style={styles.iconFeature}>
            <Image source={require('../../assets/icon/go-more.png')} />
          </View>
          <Text style={styles.textFeature}>MORE</Text>
        </View>
      </View>
    </View>
  );
};

export default GoMenu;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  iconWrapperTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 18,
  },
  iconWrapperBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconFeature: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFeature: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  wrapperFeature: {
    width: '25%',
    alignItems: 'center',
  },
});
