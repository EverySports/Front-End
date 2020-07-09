import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const {width} = Dimensions.get('window');

const Class = ({name, trainer, startDate, endDate, price, imgSrc}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imgSrc} style={styles.profile} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.trainer}>{trainer}</Text>
        <View style={styles.dateGroup}>
          <Text style={styles.sdate}>{startDate} ~</Text>
          <Text style={styles.edate}>{endDate}</Text>
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2.5,
    marginRight: 10,
  },
  profile: {
    borderRadius: 4,
    width: width / 2.5,
    height: 160,
    resizeMode: 'center',
  },
  infoContainer: {
    paddingTop: 5,
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
  },
  trainer: {
    marginBottom: 5,
  },
  dateGroup: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  edate: {
    color: '#f03e3e',
  },
  price: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 5,
  },
});

export default Class;
