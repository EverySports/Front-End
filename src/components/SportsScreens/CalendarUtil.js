import Moment from 'moment';

const day_KR = ['월', '화', '수', '목', '금', '토', '일'];
const day_EN = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const today = new Date();

// -2  -1  0  1  2
function getDay(val) {
  return Moment(new Date()).add(val, 'days').format('ddd');
}
function getMMDD(val) {
  return Moment(new Date()).add(val, 'days').format('M월 D일');
}

export const week = [
  {
    day: day_KR[day_EN.indexOf(getDay(-2))],
    mmdd: getMMDD(-2),
  },
  {
    day: day_KR[day_EN.indexOf(getDay(-1))],
    mmdd: getMMDD(-1),
  },
  {
    day: day_KR[day_EN.indexOf(getDay(0))],
    mmdd: getMMDD(0),
  },
  {
    day: day_KR[day_EN.indexOf(getDay(1))],
    mmdd: getMMDD(1),
  },
  {
    day: day_KR[day_EN.indexOf(getDay(2))],
    mmdd: getMMDD(3),
  },
  {
    day: day_KR[day_EN.indexOf(getDay(3))],
    mmdd: getMMDD(3),
  },
];
