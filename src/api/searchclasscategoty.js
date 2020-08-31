import sg from '../assets/img/sg.png';
import irin from '../assets/img/irin.png';
import wd from '../assets/img/wd.png';
import yr from '../assets/img/yr.png';
import joy from '../assets/img/joy.png';

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const classList = {
  yoga: [
    {
      class_ID: 1,
      class_Num: 1,
      class_Name: '요가 클래스1',
      class_Price: 111111,
      teacher_Gender: '여',
      class_Image: sg,
    },
    {
      class_ID: 2,
      class_Num: 2,
      class_Name: '요가 클래스2',
      class_Price: 222222,
      teacher_Gender: '여',
      class_Image: irin,
    },
    {
      class_ID: 3,
      class_Num: 3,
      class_Name: '요가 클래스3',
      class_Price: 333333,
      teacher_Gender: '여',
      class_Image: joy,
    },
    {
      class_ID: 4,
      class_Num: 4,
      class_Name: '요가 클래스4',
      class_Price: 444444,
      teacher_Gender: '여',
      class_Image: yr,
    },
    {
      class_ID: 5,
      class_Num: 5,
      class_Name: '요가 클래스5',
      class_Price: 555555,
      teacher_Gender: '여',
      class_Image: wd,
    },
    {
      class_ID: 6,
      class_Num: 6,
      class_Name: '요가 클래스6',
      class_Price: 6666666,
      teacher_Gender: '여',
      class_Image: sg,
    },
  ],
  pilates: [
    {
      class_ID: 1,
      class_Num: 1,
      class_Name: '필라테스 클래스1',
      class_Price: 111111,
      teacher_Gender: '여',
      class_Image: irin,
    },
    {
      class_ID: 2,
      class_Num: 2,
      class_Name: '필라테스 클래스2',
      class_Price: 222222,
      teacher_Gender: '여',
      class_Image: irin,
    },
    {
      class_ID: 3,
      class_Num: 3,
      class_Name: '필라테스 클래스3',
      class_Price: 333333,
      teacher_Gender: '여',
      class_Image: irin,
    },
    {
      class_ID: 4,
      class_Num: 4,
      class_Name: '필라테스 클래스4',
      class_Price: 444444,
      teacher_Gender: '여',
      class_Image: irin,
    },
    {
      class_ID: 5,
      class_Num: 5,
      class_Name: '필라테스 클래스5',
      class_Price: 555555,
      teacher_Gender: '여',
      class_Image: irin,
    },
    {
      class_ID: 6,
      class_Num: 6,
      class_Name: '필라테스 클래스6',
      class_Price: 6666666,
      teacher_Gender: '여',
      class_Image: irin,
    },
  ],
  health: [
    {
      class_ID: 1,
      class_Num: 1,
      class_Name: '헬스 클래스1',
      class_Price: 111111,
      teacher_Gender: '여',
      class_Image: wd,
    },
    {
      class_ID: 2,
      class_Num: 2,
      class_Name: '헬스 클래스2',
      class_Price: 222222,
      teacher_Gender: '여',
      class_Image: wd,
    },
    {
      class_ID: 3,
      class_Num: 3,
      class_Name: '헬스 클래스3',
      class_Price: 333333,
      teacher_Gender: '여',
      class_Image: wd,
    },
    {
      class_ID: 4,
      class_Num: 4,
      class_Name: '헬스 클래스4',
      class_Price: 444444,
      teacher_Gender: '여',
      class_Image: wd,
    },
    {
      class_ID: 5,
      class_Num: 5,
      class_Name: '헬스 클래스5',
      class_Price: 555555,
      teacher_Gender: '여',
      class_Image: wd,
    },
    {
      class_ID: 6,
      class_Num: 6,
      class_Name: '헬스 클래스6',
      class_Price: 6666666,
      teacher_Gender: '여',
      class_Image: wd,
    },
  ],
  diet: [
    {
      class_ID: 1,
      class_Num: 1,
      class_Name: '다이어트 클래스1',
      class_Price: 111111,
      teacher_Gender: '여',
      class_Image: joy,
    },
    {
      class_ID: 2,
      class_Num: 2,
      class_Name: '다이어트 클래스2',
      class_Price: 222222,
      teacher_Gender: '여',
      class_Image: joy,
    },
    {
      class_ID: 3,
      class_Num: 3,
      class_Name: '다이어트 클래스3',
      class_Price: 333333,
      teacher_Gender: '여',
      class_Image: joy,
    },
    {
      class_ID: 4,
      class_Num: 4,
      class_Name: '다이어트 클래스4',
      class_Price: 444444,
      teacher_Gender: '여',
      class_Image: joy,
    },
    {
      class_ID: 5,
      class_Num: 5,
      class_Name: '다이어트 클래스5',
      class_Price: 555555,
      teacher_Gender: '여',
      class_Image: joy,
    },
    {
      class_ID: 6,
      class_Num: 6,
      class_Name: '다이어트 클래스6',
      class_Price: 6666666,
      teacher_Gender: '여',
      class_Image: joy,
    },
  ],
};

export const getCategoryClassList = async (category) => {
  await sleep(300);
  const engCategoryKey = ['yoga', 'pilates', 'health', 'diet'];
  const korCategoryKey = ['요가', '필라테스', '헬스', '다이어트'];

  return classList[engCategoryKey[korCategoryKey.indexOf(category)]];
};
