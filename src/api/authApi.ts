import { dbService, storageService } from "../fbase";
import { collection, getDocs, query, updateDoc, doc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";

interface AuthType {
  userObj: any;
  newDisplayName: string;
  photoUrl?: string;
  photo?: string | undefined;
}

class AuthApi {
  static async updateDocs({ userObj, newDisplayName, photoUrl }: AuthType) {
    const q = query(collection(dbService, "nweets"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      if (document.data().creatorId === userObj.uid) {
        const NweetTextRef = doc(dbService, "nweets", `${document.id}`);
        await updateDoc(NweetTextRef, {
          nickname: newDisplayName,
          photoUrl,
        });
      }
    });
  }

  static async changeProfile({ userObj, newDisplayName, photo }: AuthType) {
    if (userObj.displayName !== newDisplayName || photo !== "") {
      if (userObj.displayName !== newDisplayName) {
        await updateProfile(userObj, { displayName: newDisplayName });
      }
      let photoUrl = "";
      if (photo !== "") {
        const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
        const response = await uploadString(fileRef, photo!, "data_url");
        photoUrl = await getDownloadURL(response.ref);
        await updateProfile(userObj, { photoURL: photoUrl });
      }
      AuthApi.updateDocs({ userObj, newDisplayName, photoUrl });
    }
  }
}

export default AuthApi;
