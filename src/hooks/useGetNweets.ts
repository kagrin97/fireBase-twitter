import { useEffect, useState } from "react";

import { dbService } from "../fbase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

import { Comments } from "types/user";

function useGetNweets() {
  const [nweets, setNweets] = useState<Comments[]>([]);
  useEffect(() => {
    const q = query(
      collection(dbService, "nweets"),
      orderBy("createdAt", "desc")
    );
    onSnapshot(q, (snapshot) => {
      const nweetArr: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNweets(nweetArr);
    });
  }, []);

  return { nweets };
}

export default useGetNweets;
