import React from 'react';
import Moment from 'moment';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const colors = ['#ff8787', '#f783ac', '#da77f2', '#9775fa', '#748ffc'];

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
                  style={styles.leftColorTap(colors[(review.user_ID - 1) % 5])}
                />
              </View>
              <View style={styles.reviewContents}>
                <View
                  style={styles.titleContainer(
                    colors[(review.user_ID - 1) % 5],
                  )}>
                  <Text style={styles.txtTilte}>{review.review_Title}</Text>
                </View>
                <View
                  style={{
                    paddingTop: 5,
                    height: 90,
                  }}>
                  <Text style={styles.txtreviewContent}>
                    {review.review_Content}
                  </Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 4,
                    flexDirection: 'row',
                    width: width / 1.8 - 10,
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.txtreviewInfo}>
                    {review.user_Name[0]}OO님
                  </Text>
                  <Text style={styles.txtreviewInfo}>
                    {Moment(review.review_CreatedAt).format('Y년M월D일')}
                  </Text>
                </View>
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
    marginBottom: 5,
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
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 7,
    flexDirection: 'row',
  },
  leftColorTap: (color) => ({
    borderRadius: 1,
    width: 10,
    height: 80,
    backgroundColor: color,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  }),
  reviewContents: {
    width: width / 1.8 - 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleContainer: (color) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: color,
    paddingBottom: 5,
  }),
  txtTilte: {
    fontSize: 16,
    color: '#212529',
  },
  txtreviewContent: {
    fontSize: 16,
    color: '#212529',
  },
  txtreviewInfo: {
    fontSize: 13,
    color: '#343a40',
  },
});

export default ClassInfo_Review;
