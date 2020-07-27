import sg from '../assets/img/sg.png';
import irin from '../assets/img/irin.png';
import wd from '../assets/img/wd.png';
import yr from '../assets/img/yr.png';
import joy from '../assets/img/joy.png';

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const newClasses = [
  {
    class_name: 'Newclass_1',
    teacher_name: '강슬기',
    class_price: 111111,
    class_image: sg,
    class_opendate: new Date('2020/07/01'),
  },
  {
    class_name: 'Newclass_2',
    teacher_name: '아이린',
    class_price: 222222,
    class_image: irin,
    class_opendate: new Date('2020/07/02'),
  },
  {
    class_name: 'Newclass_3',
    teacher_name: '조이',
    class_price: 333333,
    class_image: joy,
    class_opendate: new Date('2020/07/03'),
  },
  {
    class_name: 'Newclass_4',
    teacher_name: '웬디',
    class_price: 444444,
    class_image: wd,
    class_opendate: new Date('2020/12/04'),
  },
  {
    class_name: 'Newclass_5',
    teacher_name: '예리',
    class_price: 555555,
    class_image: yr,
    class_opendate: new Date('2020/07/05'),
  },
];

export const getNewClasses = async () => {
  sleep(300);
  return newClasses;
};
