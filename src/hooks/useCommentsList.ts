import React, { useState } from "react";
import { dbService, storageService } from "../fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

import { Comments } from "types/user";

function useCommentsList(nweetObj: Comments) {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState<string>(nweetObj.text);
  const NweetTextRef = doc(dbService, "nweets", `${nweetObj.id}`);
  const attachmentRef = ref(storageService, nweetObj.attachmentUrl);

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제 하시겠습니까?");
    if (ok) {
      try {
        await deleteDoc(NweetTextRef);
        await deleteObject(attachmentRef);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateDoc(NweetTextRef, {
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  return {
    editing,
    newNweet,
    onDeleteClick,
    toggleEditing,
    onSubmit,
    onChange,
  };
}

export default useCommentsList;
