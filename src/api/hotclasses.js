import sg from '../assets/img/sg.png';
import irin from '../assets/img/irin.png';
import wd from '../assets/img/wd.png';
import yr from '../assets/img/yr.png';
import joy from '../assets/img/joy.png';

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const hotClasses = [
  {
    class_ID: 1,
    class_num: 1,
    class_name: 'Hotclass_1',
    teacher_name: '강슬기',
    class_price: 10000,
    class_image: sg,
  },
  {
    class_ID: 2,
    class_num: 2,
    class_name: 'Hotclass_2',
    teacher_name: '아이린',
    class_price: 20000,
    class_image: irin,
  },
  {
    class_ID: 3,
    class_num: 3,
    class_name: 'Hotclass_3',
    teacher_name: '조이',
    class_price: 30000,
    class_image: joy,
  },
  {
    class_ID: 4,
    class_num: 4,
    class_name: 'Hotclass_4',
    teacher_name: '웬디',
    class_price: 40000,
    class_image: wd,
  },
  {
    class_ID: 5,
    class_num: 5,
    class_name: 'Hotclass_5',
    teacher_name: '예리',
    class_price: 50000,
    class_image: yr,
  },
];

export const getHotClasses = async () => {
  sleep(300);
  return hotClasses;
};
