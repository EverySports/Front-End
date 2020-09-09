import {GoogleSignin} from '@react-native-community/google-signin';

export function init() {
  GoogleSignin.configure({
    //비밀이지렁
  });
}

export async function signOut() {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
}
