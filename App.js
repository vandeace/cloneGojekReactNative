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
        {/* search bar */}
        <View
          style={{flexDirection: 'row', paddingTop: 15, marginHorizontal: 17}}>
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
        {/* GOPAY */}
        <View style={{marginTop: 8, marginHorizontal: 17}}>
          <View style={styles.topWrapper}>
            <Image source={require('./src/assets/icon/gopay.png')} />
            <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Rp 50.000
            </Text>
          </View>
          <View style={styles.bottonWrapper}>
            <View style={styles.gopayIcon}>
              <Image source={require('./src/assets/icon/pay.png')} />
              <Text style={styles.gopayText}>Pay</Text>
            </View>
            <View style={styles.gopayIcon}>
              <Image source={require('./src/assets/icon/nearby.png')} />
              <Text style={styles.gopayText}>Nearby</Text>
            </View>
            <View style={styles.gopayIcon}>
              <Image source={require('./src/assets/icon/topup.png')} />
              <Text style={styles.gopayText}>Top Up</Text>
            </View>
            <View style={styles.gopayIcon}>
              <Image source={require('./src/assets/icon/more.png')} />
              <Text style={styles.gopayText}>More</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 18,
            }}>
            <View style={styles.wrapperFeature}>
              <View style={styles.iconFeature}>
                <Image source={require('./src/assets/icon/go-ride.png')} />
              </View>
              <Text style={styles.textFeature}>GO-RIDE</Text>
            </View>
            <View style={styles.wrapperFeature}>
              <View style={styles.iconFeature}>
                <Image source={require('./src/assets/icon/go-car.png')} />
              </View>
              <Text style={styles.textFeature}>GO-CAR</Text>
            </View>
            <View style={styles.wrapperFeature}>
              <View style={styles.iconFeature}>
                <Image source={require('./src/assets/icon/go-bluebird.png')} />
              </View>
              <Text style={styles.textFeature}>GO-BLUEBIRD</Text>
            </View>
            <View style={styles.wrapperFeature}>
              <View style={styles.iconFeature}>
                <Image source={require('./src/assets/icon/go-send.png')} />
              </View>
              <Text style={styles.textFeature}>GO-SEND</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={styles.wrapperFeature}>
              <View style={styles.iconFeature}>
                <Image source={require('./src/assets/icon/go-deals.png')} />
              </View>
              <Text style={styles.textFeature}>GO-DEALS</Text>
            </View>
            <View style={styles.wrapperFeature}>
              <View style={styles.iconFeature}>
                <Image source={require('./src/assets/icon/go-pulsa.png')} />
              </View>
              <Text style={styles.textFeature}>GO-PULSA</Text>
            </View>
            <View style={styles.wrapperFeature}>
              <View style={styles.iconFeature}>
                <Image source={require('./src/assets/icon/go-food.png')} />
              </View>
              <Text style={styles.textFeature}>GO-FOOD</Text>
            </View>
            <View style={styles.wrapperFeature}>
              <View style={styles.iconFeature}>
                <Image source={require('./src/assets/icon/go-more.png')} />
              </View>
              <Text style={styles.textFeature}>MORE</Text>
            </View>
          </View>
        </View>
      </View>

      {/* tab navigation */}
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

export default App;
