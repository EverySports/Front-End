//
//                                          GET /classinfo/:class_ID
//                                          params : class_ID: number

//

import sg from '../assets/img/sg.png';
import irin from '../assets/img/irin.png';
import wd from '../assets/img/wd.png';
import yr from '../assets/img/yr.png';
import joy from '../assets/img/joy.png';
import classImg from '../assets/img/classProfile.png';

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const response = {
  teacher_Info: {
    teacher_ID: 1,
    teacher_Image: sg,
    teacher_Name: '강슬기',
    teacher_Gender: '여',
    teacher_Content:
      "Hey, I was doing just fine before I met you I drink too much and that's an issue but I'm okay Hey, you tell your friends it was nice to meet them But I hope I never see them again",
  },
  class_Info: {
    class_ID: 1,
    class_Name: '2주 완성 필라테스 기초',
    class_SumNum: '1000',
    class_Image: classImg,
    class_Policy: '가격정책 Text',
    class_Curriculum: '커리큘럼임다',
  },
  review_List: [
    {
      user_ID: 1,
      review_Title: '타이틀 1',
      review_Content: '리뷰 컨텐츠 1',
      review_CreatAt: new Date('2020/07/21'),
    },
    {
      user_ID: 2,
      review_Title: '타이틀 2',
      review_Content: '리뷰 컨텐츠 2',
      review_CreatAt: new Date('2020/07/25'),
    },
    {
      user_ID: 3,
      review_Title: '타이틀 3',
      review_Content: '리뷰 컨텐츠 3',
      review_CreatAt: new Date('2020/07/30'),
    },
  ],
};

export const getClassInfo = async (classId) => {
  sleep(500);
  return response;
};
