import React from 'react';
import Moment from 'moment';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const ClassInfo_Review = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>후기</Text>
      <View style={styles.contentsContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {info.map((review) => (
            <View key={review.user_ID} style={styles.reviewContainer}>
              <Text style={styles.reviewTitle}>{review.review_Title}</Text>

              <Text style={styles.reviewContent}>{review.review_Content}</Text>

              <Text style={styles.reviewCreatedAt}>
                {Moment(review.review_CreatAt).format('Y년 M월 D일 작성')}
              </Text>
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
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5,
    width: width / 1.75,
    height: 150,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    borderColor: '#38d9a9',
    justifyContent: 'space-between',
  },
  reviewTitle: {
    fontSize: 18,
    color: '#343a40',
  },
  reviewContent: {
    fontSize: 16,
    color: '#343a40',
  },
  reviewCreatedAt: {
    fontSize: 14,
    color: '#343a40',
  },
});

export default ClassInfo_Review;
