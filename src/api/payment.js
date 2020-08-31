// GET /payment
// Params :
//           {
//           	"class_ID": number
//           	"teacher_ID": number
//           	"user_ID": number
//           }

//response

// FETCH /payment/detail

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const user_InitialState =
  '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';

const teacher_Schedule =
  '000011000000111000011000000111000011000000111000011000000111000011000000111000011000000111000011000000111000011000000111';
const getUserSchedule = () => {
  return user_InitialState;
};

const getTeacherSchedule = () => {
  return teacher_Schedule;
};

export const getSchedule = () => {
  sleep(300);
  const response = {
    teacher_Schedule: getTeacherSchedule(),
    user_Schedule: getUserSchedule(),
  };
  return response;
};
