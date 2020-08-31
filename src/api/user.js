export const globalUser = {
  user_ID: 1,
  user_Email: 'wony@gmail.com',
  user_Name: '정원영',
  user_Gender: 'M',
  user_Birtday: new Date('1995/07/18'),
  user_Phone: '01027772415',
  user_Point: 1000000,
  // numberOfClass: 0,
  // numberOfClass: 1,
};

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

export const getGlobalUserInfo = () => {
  return globalUser;
};

export const getUserInfo = () => {
  sleep(100);
  return globalUser;
};
