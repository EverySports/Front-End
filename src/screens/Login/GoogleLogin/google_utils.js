import {GoogleSignin} from '@react-native-community/google-signin';

export function init() {
  GoogleSignin.configure({
    webClientId:
      '393763741776-oltarqhe70aodifimjplr27ebgg4o6a2.apps.googleusercontent.com',
    offlineAccess: true,
    hostedDomain: '',
    forceConsentPrompt: true,
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
