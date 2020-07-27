import sg from '../assets/img/sg.png';
import irin from '../assets/img/irin.png';
import wd from '../assets/img/wd.png';
import yr from '../assets/img/yr.png';
import joy from '../assets/img/joy.png';

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const hotClasses = [
  {
    class_num: 1,
    class_name: 'class_1',
    teacher_name: '강슬기',
    class_price: 66000,
    class_image: sg,
  },
  {
    class_num: 2,
    class_name: 'class_2',
    teacher_name: '아이린',
    class_price: 50000,
    class_image: irin,
  },
  {
    class_num: 3,
    class_name: 'class_3',
    teacher_name: '조이',
    class_price: 36000,
    class_image: joy,
  },
  {
    class_num: 4,
    class_name: 'class_4',
    teacher_name: '웬디',
    class_price: 40000,
    class_image: wd,
  },
  {
    class_num: 5,
    class_name: 'class_5',
    teacher_name: '예리',
    class_price: 15000,
    class_image: yr,
  },
];

export const getClasses = async () => {
  sleep(300);
  return hotClasses;
};
