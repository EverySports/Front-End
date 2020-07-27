import sg from '../assets/img/sg.png';
import irin from '../assets/img/irin.png';
import wd from '../assets/img/wd.png';
import yr from '../assets/img/yr.png';
import joy from '../assets/img/joy.png';

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// {
// 	"teacher_list": [
// 		{
// 			teacher_ID: number,
// 			teacher_Name: String,
// 			class_SumNum: number,
// 			class_Price: number,
// 			teacher_Image: Image,
// 		}
// 	]
// }

const teacherList = {
  yoga: [
    {
      teacher_ID: 1,
      teacher_Name: '요가 트레이너1',
      class_SumNum: 11,
      class_Price: 111111,
      teacher_Image: sg,
    },
    {
      teacher_ID: 2,
      teacher_Name: '요가 트레이너2',
      class_SumNum: 2,
      class_Price: 222222,
      teacher_Image: sg,
    },
    {
      teacher_ID: 3,
      teacher_Name: '요가 트레이너3',
      class_SumNum: 3,
      class_Price: 333333,
      teacher_Image: sg,
    },
    {
      teacher_ID: 4,
      teacher_Name: '요가 트레이너4',
      class_SumNum: 44,
      class_Price: 444444,
      teacher_Image: sg,
    },
    {
      teacher_ID: 5,
      teacher_Name: '요가 트레이너5',
      class_SumNum: 55,
      class_Price: 555555,
      teacher_Image: sg,
    },
    {
      teacher_ID: 6,
      teacher_Name: '요가 트레이너6',
      class_SumNum: 66,
      class_Price: 666666,
      teacher_Image: sg,
    },
  ],
  pilates: [
    {
      teacher_ID: 1,
      teacher_Name: '필라테스 트레이너1',
      class_SumNum: 11,
      class_Price: 111111,
      teacher_Image: irin,
    },
    {
      teacher_ID: 2,
      teacher_Name: '필라테스 트레이너2',
      class_SumNum: 2,
      class_Price: 222222,
      teacher_Image: irin,
    },
    {
      teacher_ID: 3,
      teacher_Name: '필라테스 트레이너3',
      class_SumNum: 3,
      class_Price: 333333,
      teacher_Image: irin,
    },
    {
      teacher_ID: 4,
      teacher_Name: '필라테스 트레이너4',
      class_SumNum: 44,
      class_Price: 444444,
      teacher_Image: irin,
    },
    {
      teacher_ID: 5,
      teacher_Name: '필라테스 트레이너5',
      class_SumNum: 55,
      class_Price: 555555,
      teacher_Image: irin,
    },
    {
      teacher_ID: 6,
      teacher_Name: '필라테스 트레이너6',
      class_SumNum: 66,
      class_Price: 666666,
      teacher_Image: irin,
    },
  ],
  health: [
    {
      teacher_ID: 1,
      teacher_Name: '헬스 트레이너1',
      class_SumNum: 11,
      class_Price: 111111,
      teacher_Image: yr,
    },
    {
      teacher_ID: 2,
      teacher_Name: '헬스 트레이너2',
      class_SumNum: 2,
      class_Price: 222222,
      teacher_Image: yr,
    },
    {
      teacher_ID: 3,
      teacher_Name: '헬스 트레이너3',
      class_SumNum: 3,
      class_Price: 333333,
      teacher_Image: yr,
    },
    {
      teacher_ID: 4,
      teacher_Name: '헬스 트레이너4',
      class_SumNum: 44,
      class_Price: 444444,
      teacher_Image: yr,
    },
    {
      teacher_ID: 5,
      teacher_Name: '헬스 트레이너5',
      class_SumNum: 55,
      class_Price: 555555,
      teacher_Image: yr,
    },
    {
      teacher_ID: 6,
      teacher_Name: '헬스 트레이너6',
      class_SumNum: 66,
      class_Price: 666666,
      teacher_Image: yr,
    },
  ],
  diet: [
    {
      teacher_ID: 1,
      teacher_Name: '다이어트 트레이너1',
      class_SumNum: 11,
      class_Price: 111111,
      teacher_Image: joy,
    },
    {
      teacher_ID: 2,
      teacher_Name: '다이어트 트레이너2',
      class_SumNum: 2,
      class_Price: 222222,
      teacher_Image: joy,
    },
    {
      teacher_ID: 3,
      teacher_Name: '다이어트 트레이너3',
      class_SumNum: 3,
      class_Price: 333333,
      teacher_Image: joy,
    },
    {
      teacher_ID: 4,
      teacher_Name: '다이어트 트레이너4',
      class_SumNum: 44,
      class_Price: 444444,
      teacher_Image: joy,
    },
    {
      teacher_ID: 5,
      teacher_Name: '다이어트 트레이너5',
      class_SumNum: 55,
      class_Price: 555555,
      teacher_Image: joy,
    },
    {
      teacher_ID: 6,
      teacher_Name: '다이어트 트레이너6',
      class_SumNum: 66,
      class_Price: 666666,
      teacher_Image: joy,
    },
  ],
};

export const getCategoryTeacherList = async (category) => {
  await sleep(300);
  const engCategoryKey = ['yoga', 'pilates', 'health', 'diet'];
  const korCategoryKey = ['요가', '필라테스', '헬스', '다이어트'];

  return teacherList[engCategoryKey[korCategoryKey.indexOf(category)]];
};
