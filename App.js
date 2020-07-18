import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import BottomNavigation from './src/components/BottomNavigation';
import SearchBar from './src/components/SearchBar';
import Gopay from './src/components/Gopay';
import GoMenu from './src/components/GoMenu';
import ScrollNews from './src/components/ScrollNews';
import Banner from './src/components/Banner';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
          <SearchBar />
          {/* GOPAY */}
          <Gopay />
          {/* GO MENU FEATURE */}
          <GoMenu />
          <View
            style={{height: 17, marginTop: 20, backgroundColor: '#f2f2f4'}}
          />
          {/* NEWS MENU */}
          <ScrollNews />
          <Banner />
        </View>
      </ScrollView>
      {/* tab navigation */}
      <BottomNavigation />
    </View>
  );
};
const styles = StyleSheet.create({});

export default App;
