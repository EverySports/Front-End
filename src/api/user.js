export const globalUser = {
  user_ID: '105263121447091810539',
  user_Name: 'kid koala',
  user_Email: 'koalakid154@gmail.com',
  user_Gender: 'M',
  user_BirthDay: '1987-12-31T15:00:00.000Z',
  user_Phone: '01041106893',
  user_Point: 0,
};

// export const globalUser = null;

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

export const getGlobalUserInfo = () => {
  return globalUser;
};

export const getUserInfo = () => {
  sleep(0);
  return globalUser;
};
