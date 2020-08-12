import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
//#region import Class Information Component
import ClassInfo_TrainerInfo from '../../../../../components/ClassInfo_TrainerInfo';
import ClassInfo_Curriculum from '../../../../../components/ClassInfo_Curriculum';
import ClassInfo_Review from '../../../../../components/ClassInfo_Review';
import ClassInfo_Consulting from '../../../../../components/ClassInfo_Consulting';
import ClassInfo_RefundPolicy from '../../../../../components/ClassInfo_RefundPolicy';
//#endregion

const {height, width} = Dimensions.get('window');
const TEAL = '#63e6be';

const ClassInfoPresenter = ({navigation, classInfo}) => {
  const [scrollY, setScrollY] = useState(0);
  const [componentsHeight, setComponentsHeight] = useState({
    paymentInfo: 0,
    scrollToGroup: 0,
    teacherInfo: 0,
    curriculum: 0,
    review: 0,
    consulting: 0,
    refund: 0,
  });
  const {teacher_Info, class_Info, review_List} = classInfo;

  const onPress_GoToPayment = () => {
    navigation.navigate('Payment', {
      info: classInfo,
    });
  };

  const onPress_ScrollToComponent = (idx) => (e) => {
    // height of "Top ~ Scroll To Button Group"
    const alpha =
      height / 3 +
      componentsHeight.paymentInfo +
      componentsHeight.scrollToGroup +
      4;

    const {
      teacherInfo,
      curriculum,
      review,
      consulting,
      refund,
    } = componentsHeight;

    const scrollPosition = [
      alpha,
      teacherInfo + alpha,
      teacherInfo + curriculum + alpha,
      teacherInfo + curriculum + review + alpha,
      teacherInfo + curriculum + review + consulting + alpha,
    ];

    scrollY.scrollTo({
      x: 0,
      y: scrollPosition[idx],
      animatied: true,
    });
  };

  const onLayout = (name) => (e) => {
    console.log(name);
    const {height} = e.nativeEvent.layout;
    const temp = {
      ...componentsHeight,
      [name]: height,
    };
    setComponentsHeight(temp);
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      ref={(scroller) => setScrollY(scroller)}>
      <View style={{zIndex: 1}}>
        <Image source={class_Info.class_Image} style={styles.imgProfile} />
      </View>
      <View style={styles.paymentInfo} onLayout={onLayout('paymentInfo')}>
        <View style={styles.classPrice}>
          <View style={styles.priceTextGroup}>
            <Text style={styles.txtClassPrice}>수강료 : </Text>
            <Text style={styles.txtClassPricePolicy}>
              {class_Info.class_Price}P
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btnApply}
            onPress={onPress_GoToPayment}>
            <Text style={styles.txtapply}>수강신청하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.srcollToGroup} onLayout={onLayout('scrollToGroup')}>
        <TouchableOpacity
          style={styles.srcollToButton}
          onPress={onPress_ScrollToComponent(0)}>
          <Text style={styles.txtsrcollTo}>강사소개</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.srcollToButton}
          onPress={onPress_ScrollToComponent(1)}>
          <Text style={styles.txtsrcollTo}>커리큘럼</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.srcollToButton}
          onPress={onPress_ScrollToComponent(2)}>
          <Text style={styles.txtsrcollTo}>후기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.srcollToButton}
          onPress={onPress_ScrollToComponent(3)}>
          <Text style={styles.txtsrcollTo}>문의</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.srcollToButton}
          onPress={onPress_ScrollToComponent(4)}>
          <Text style={styles.txtsrcollTo}>환불정책</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentsContioner}>
        <View onLayout={onLayout('teacherInfo')}>
          <ClassInfo_TrainerInfo navigation={navigation} info={teacher_Info} />
        </View>
        <View onLayout={onLayout('curriculum')}>
          <ClassInfo_Curriculum info={class_Info} />
        </View>
        <View onLayout={onLayout('review')}>
          <ClassInfo_Review info={review_List} />
        </View>
        <View onLayout={onLayout('consulting')}>
          <ClassInfo_Consulting info={teacher_Info} />
        </View>
        <View onLayout={onLayout('refund')}>
          <ClassInfo_RefundPolicy />
        </View>
      </View>
    </ScrollView>
  );
};
//         items        height
//------------------||-----------
//1.  profile image    height/3
//2.  paymentInfo      20 20 2

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  imgProfile: {
    width: width,
    height: height / 3,
    opacity: 0.95,
  },
  paymentInfo: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 2,
  },
  classPrice: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 20,
  },
  priceTextGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txtClassPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#343a40',
  },
  txtClassPricePolicy: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#343a40',
  },
  btnApply: {
    backgroundColor: TEAL,
    height: 40,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width / 2 - 75,
  },
  txtapply: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  srcollToGroup: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 2,
  },
  srcollToButton: {
    backgroundColor: '#38d9a9',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 4,
  },
  txtsrcollTo: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  contentsContioner: {
    backgroundColor: 'white',
  },
});
export default ClassInfoPresenter;
