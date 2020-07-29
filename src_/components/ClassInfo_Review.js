import React from 'react';
import Moment from 'moment';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const {width} = Dimensions.get('window');
const colors = ['#ff8787', '#f783ac', '#da77f2', '#9775fa', '#748ffc'];
const count = 0;
const ClassInfo_Review = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>후기</Text>
      <View style={styles.contentsContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {info.map((review) => (
            <View key={review.user_ID} style={styles.reviewContainer}>
              <View style={{justifyContent: 'center'}}>
                <View
                  style={{
                    borderRadius: 1,
                    width: 10,
                    height: 80,
                    backgroundColor: colors[review.user_ID - 1],
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                  }}></View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#dee2e6',
    borderBottomWidth: 2,
  },
  title: {
    color: '#20c997',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '800',
    marginBottom: 15,
  },
  contentsContainer: {
    marginLeft: 20,
  },
  reviewContainer: {
    backgroundColor: 'white',
    borderRadius: 6,
    width: width / 1.8,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    flexDirection: 'row',
  },
});

export default ClassInfo_Review;
