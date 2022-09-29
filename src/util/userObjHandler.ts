const DEFAULT_PHOTO_URL =
  "https://firebasestorage.googleapis.com/v0/b/react-twitter-2e61a.appspot.com/o/1.png?alt=media&token=cde89963-3c9e-4e02-9ecc-5abf07dd1491";

export const userObjHandler = {
  setDisplayName(userObj: any) {
    if (userObj.displayName === null) {
      const name = userObj.email.split("@")[0];
      userObj.displayName = name;
    }
  },

  setDefaultAvatar(userObj: any) {
    if (userObj.photoURL === null) {
      userObj.photoURL = DEFAULT_PHOTO_URL;
    }
  },
};
