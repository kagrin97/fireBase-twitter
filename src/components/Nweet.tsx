import React, { useState } from "react";
import { dbService, storageService } from "fbase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const Nweet = ({ nweetObj, isOwner }: { nweetObj: any; isOwner: boolean }) => {
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
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (
            <img
              src={nweetObj.attachmentUrl}
              width="50px"
              height="50px"
              alt="사진"
            />
          )}
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
