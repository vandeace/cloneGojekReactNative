import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const BottomNavigation = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.navItem}>
        <View>
          <Image
            style={styles.iconImage}
            source={require('../../assets/icon/home.png')}
          />
        </View>
        <Text style={styles.fontText}>Home</Text>
      </View>
      <View style={styles.navItem}>
        <View style={styles.icon}>
          <Image
            style={styles.iconImage}
            source={require('../../assets/icon/order.png')}
          />
        </View>
        <Text style={styles.fontText}>Order</Text>
      </View>
      <View style={styles.navItem}>
        <View>
          <Image
            style={styles.iconImage}
            source={require('../../assets/icon/help.png')}
          />
        </View>
        <Text style={styles.fontText}>Help</Text>
      </View>
      <View style={styles.navItem}>
        <View>
          <Image
            style={styles.iconImage}
            source={require('../../assets/icon/inbox.png')}
          />
        </View>
        <Text style={styles.fontText}>Inbox</Text>
      </View>
      <View style={styles.navItem}>
        <View>
          <Image
            style={styles.iconImage}
            source={require('../../assets/icon/account.png')}
          />
        </View>
        <Text style={styles.fontText}>Account</Text>
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  wrapper: {height: 54, backgroundColor: 'white', flexDirection: 'row'},
  fontText: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 26,
    height: 26,
  },
});
