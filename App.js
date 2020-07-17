import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              style={styles.inputText}
              placeholder="What do you want to eat?"
            />
            <Image
              source={require('./src/assets/icon/search.png')}
              style={{position: 'absolute', top: 8, left: 13}}
            />
          </View>
          <View
            style={{
              width: 35,
              height: 41,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={require('./src/assets/icon/promo.png')} />
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <View style={styles.navItem}>
          <View>
            <Image
              style={styles.iconImage}
              source={require('./src/assets/icon/home.png')}
            />
          </View>
          <Text style={styles.fontText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.icon}>
            <Image
              style={styles.iconImage}
              source={require('./src/assets/icon/order.png')}
            />
          </View>
          <Text style={styles.fontText}>Order</Text>
        </View>
        <View style={styles.navItem}>
          <View>
            <Image
              style={styles.iconImage}
              source={require('./src/assets/icon/help.png')}
            />
          </View>
          <Text style={styles.fontText}>Help</Text>
        </View>
        <View style={styles.navItem}>
          <View>
            <Image
              style={styles.iconImage}
              source={require('./src/assets/icon/inbox.png')}
            />
          </View>
          <Text style={styles.fontText}>Inbox</Text>
        </View>
        <View style={styles.navItem}>
          <View>
            <Image
              style={styles.iconImage}
              source={require('./src/assets/icon/account.png')}
            />
          </View>
          <Text style={styles.fontText}>Account</Text>
        </View>
      </View>
    </View>
  );
};
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
  inputText: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor: 'white',
    marginRight: 18,
  },
});

export default App;
