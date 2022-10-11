import { dbService } from "../fbase";
import { collection, getDocs, query, updateDoc, doc } from "firebase/firestore";

interface DocsApiType {
  userObj: any;
  newDisplayName: string;
  photoUrl?: string;
  photo?: string | undefined;
}

class DocsApi {
  static async updateDocs({ userObj, newDisplayName, photoUrl }: DocsApiType) {
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
}

export default DocsApi;
