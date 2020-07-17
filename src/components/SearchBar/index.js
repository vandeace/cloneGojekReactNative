import React from 'react';
import {StyleSheet, View, Image, TextInput} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.inputText}
          placeholder="What do you want to eat?"
        />
        <Image
          source={require('../../assets/icon/search.png')}
          style={styles.imageSearch}
        />
      </View>
      <View style={styles.imagePromo}>
        <Image source={require('../../assets/icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 15,
    marginHorizontal: 17,
  },
  searchWrapper: {
    position: 'relative',
    flex: 1,
  },
  imageSearch: {
    position: 'absolute',
    top: 8,
    left: 13,
  },
  imagePromo: {
    width: 35,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center',
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
