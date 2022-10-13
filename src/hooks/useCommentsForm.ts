import React, { useState, useRef } from "react";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../fbase";
import { addDoc, collection } from "firebase/firestore";

import { FirebaseUser } from "types/user";

function useCommentsForm(userObj: FirebaseUser | null) {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState<string>("");
  const fileInput = useRef<HTMLInputElement>(null);

  const onSubmitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const fileRef = ref(storageService, `${userObj!.uid}/${uuidv4()}`);
      const response = await uploadString(fileRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref);
    }
    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj!.uid,
        nickname: userObj!.displayName,
        attachmentUrl,
        photoUrl: userObj!.photoURL,
      });
      console.info("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setNweet("");
    setAttachment("");
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files!;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent: any) => {
      const result = finishedEvent.currentTarget.result;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => {
    setAttachment("");
    fileInput.current!.value = "";
  };

  return {
    nweet,
    attachment,
    onSubmitComment,
    fileInput,
    onChangeText,
    onPhotoChange,
    onClearAttachment,
  };
}

export default useCommentsForm;
