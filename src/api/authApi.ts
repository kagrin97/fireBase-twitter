import { storageService } from "../fbase";
import { updateProfile } from "firebase/auth";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";

import DocsApi from "api/docsApi";
import { FirebaseUser } from "types/user";

interface AuthType {
  userObj: FirebaseUser;
  newDisplayName: string;
  photoUrl?: string;
  photo?: string | undefined;
}

class AuthApi {
  static async changeProfile({ userObj, newDisplayName, photo }: AuthType) {
    if (userObj.displayName !== newDisplayName || userObj.photoURL !== photo) {
      if (userObj.displayName !== newDisplayName) {
        await updateProfile(userObj, { displayName: newDisplayName });
      }
      if (userObj.photoURL !== photo) {
        const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
        const response = await uploadString(fileRef, photo!, "data_url");
        photo = await getDownloadURL(response.ref);
        await updateProfile(userObj, { photoURL: photo });
      }
      DocsApi.updateDocs({ userObj, newDisplayName, photoUrl: photo });
    } else {
      throw new Error("바꾸실 사진이나 이름을 변경해주세요");
    }
  }
}

export default AuthApi;
