const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const scheduleList = [
  {
    teacher_Name: '이태민',
    class_Name: '너 복싱 할줄 아냐?',
    class_Schedule:
      '100000000000000100000000000000100000000000000100000000000000100000000000000100000000000000100000000000000',
  },
  {
    teacher_Name: '정원영',
    class_Name: '메이플 2재획 가냐?',
    class_Schedule:
      '000001111100000000001111100000000001111100000000001111100000000001111100000000001111100000000001111100000',
  },
];

export const getScheduleList = (userID) => {
  sleep(100);

  return scheduleList;
};
