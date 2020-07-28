import React from 'react';
import Moment from 'moment';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const {width} = Dimensions.get('window');
//
//  {review.review_Title}
//  {review.review_Content}
//
//

const ClassInfo_Review = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>후기</Text>
      <View style={styles.contentsContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {info.map((review) => (
            <View key={review.user_ID} style={styles.reviewContainer}>
              <View style={styles.titleContainer}>
                <Entypo style={styles.icon} name="pencil" />
                <View style={styles.titleTextContainer}>
                  <Text style={styles.reviewTitle}>{review.review_Title}</Text>
                </View>
              </View>
              <View style={styles.reviewContentContainer}>
                <Text style={styles.reviewContent}>
                  {review.review_Content}
                </Text>
              </View>
              <View style={styles.reviewCreatedInfoContainer}>
                <Text style={styles.reviewInfo}>{review.user_Name[0]}OO님</Text>
                <Text style={styles.reviewInfo}>
                  {Moment(review.review_CreatAt).format('Y년 M월 D일')}
                </Text>
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
    borderBottomWidth: 1,
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
    width: width / 1.75,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 15,
    paddingBottom: 5,
    borderRadius: 4,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#adb5bd',
  },

  icon: {
    fontSize: 20,
  },
  titleTextContainer: {
    width: width / 1.75,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateX: -20}],
  },
  reviewTitle: {
    color: '#343a40',
  },
  reviewContentContainer: {
    padding: 5,
  },
  reviewContent: {
    color: '#343a40',
    fontWeight: '500',
  },
  reviewCreatedInfoContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: width / 1.75,
  },
  reviewInfo: {
    color: '#868e96',
  },
});

export default ClassInfo_Review;
