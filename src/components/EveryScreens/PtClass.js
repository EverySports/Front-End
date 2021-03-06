import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Monent from 'moment';
const {width} = Dimensions.get('window');

const PtClass = ({info}) => {
  const {
    class_name,
    teacher_name,
    class_num,
    class_price,
    class_image,
    class_opendate,
  } = info;
  const [month, day] = [
    Monent(class_opendate).format('M'),
    Monent(class_opendate).format('D'),
  ];
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={class_image} style={styles.imgProfile} />
      <View style={styles.infoContainer}>
        <Text style={styles.txtClassname}>{class_name}</Text>
        <Text style={styles.txtTeacher}>{teacher_name} 트레이너</Text>
        {class_num && (
          <View style={styles.priceGroup}>
            <View style={styles.iconHot}>
              <Text style={styles.txtHot}>HOT</Text>
            </View>
            <Text style={styles.txtSumnum}>누적 수강생 : {class_num}</Text>
          </View>
        )}
        {class_opendate && (
          <View style={styles.dateGroup}>
            <View style={styles.newIcon}>
              <Text style={styles.newText}>NEW</Text>
            </View>
            <Text style={styles.sdate}>
              {month}월 {day}일 개설
            </Text>
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.price}>{class_price}</Text>
          <Text style={styles.point}>P</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2.5,
    marginRight: 10,
  },
  imgProfile: {
    borderRadius: 4,
    width: width / 2.5,
    height: 160,
  },
  infoContainer: {
    paddingTop: 5,
    paddingLeft: 5,
  },
  txtClassname: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
    color: '#343a40',
  },
  txtTeacher: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#343a40',
  },
  dateGroup: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  txtSumnum: {
    ...Platform.select({
      android: {
        fontSize: 12,
        fontWeight: 'bold',
      },
      default: {
        color: '#343a40',
        fontWeight: '600',
      },
    }),
  },
  price: {
    fontSize: 22,
    fontWeight: '500',
    color: '#343a40',
  },
  point: {
    color: '#343a40',
    fontSize: 22,
    fontWeight: '600',
  },

  priceGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconHot: {
    backgroundColor: '#ff6b6b',
    borderRadius: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    marginRight: 5,
  },
  txtHot: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },

  newIcon: {
    backgroundColor: '#38d9a9',
    borderRadius: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    marginRight: 5,
  },
  newText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default PtClass;
