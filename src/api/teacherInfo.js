//
//                                          GET /trinerinfo/:teacher_ID ,
//                                          params : teacher_ID: number,
//
import sg from '../assets/img/sg.png';
import irin from '../assets/img/irin.png';
import wd from '../assets/img/wd.png';
import yr from '../assets/img/yr.png';
import joy from '../assets/img/joy.png';
import classImg from '../assets/img/classProfile.png';

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const response = {
  teacher_Name: '강슬기',
  teacher_Email: 'wony@gmail.com',
  teacher_Gender: '여',
  teacher_Content:
    "All this other shit I'm talkin' 'bout they think they know it I've been praying for somebody to save me, no one's heroic And my life don't even matter, I know it, I know it I know I'm hurting deep down but can't show it I never had a place to call my own I never had a home, ain't nobody callin' my phon  Where you been? Where you at? What's on your mind?",
  class_SumNum: 12345,
  teacher_Image: sg,
  class_list: [
    {
      class_ID: 1,
      class_Name: 'class 1',
      class_Num: 100,
      class_Price: 10000,
      class_Image: classImg,
    },
    {
      class_ID: 2,
      class_Name: 'class 2',
      class_Num: 200,
      class_Price: 20000,
      class_Image: classImg,
    },
    {
      class_ID: 3,
      class_Name: 'class 3',
      class_Num: 300,
      class_Price: 30000,
      class_Image: classImg,
    },
  ],
  review_list: [
    {
      user_ID: 1,
      review_Title: 'reviewTitle 1',
      review_Content: 'review_Content 1',
      review_CreatAt: new Date('2020/06/31'),
    },
    {
      user_ID: 2,
      review_Title: 'reviewTitle 2',
      review_Content: 'review_Content 2',
      review_CreatAt: new Date('2020/06/31'),
    },
    {
      user_ID: 3,
      review_Title: 'reviewTitle 3',
      review_Content: 'review_Content 3',
      review_CreatAt: new Date('2020/06/31'),
    },
    {
      user_ID: 4,
      review_Title: 'reviewTitle 4',
      review_Content: 'review_Content 4',
      review_CreatAt: new Date('2020/06/31'),
    },
    {
      user_ID: 5,
      review_Title: 'reviewTitle 5',
      review_Content: 'review_Content 5',
      review_CreatAt: new Date('2020/06/31'),
    },
  ],
};

export const getTeacherInfo = async (teacherID) => {
  sleep(300);
  // console.log('\tTeacher ID : ', teacherID);

  return response;
};
