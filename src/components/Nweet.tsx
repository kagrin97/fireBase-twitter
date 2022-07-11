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
    <div className={``}>
      {editing ? (
        <article
          className={`bg-green-700 text-white font-bold py-2 px-4 rounded-md my-4 mx-auto`}
        >
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="새로운 텍스트를 입력하세요."
              value={newNweet}
              required
              onChange={onChange}
              className={`text-black rounded-md px-1`}
            />
            <input type="submit" value="업데이트" className={`ml-2 mb-1`} />
          </form>
          <button onClick={toggleEditing}>취소</button>
        </article>
      ) : (
        <article
          className={`bg-green-400 text-white font-bold py-2 px-4 rounded-md my-4 mx-auto relative`}
        >
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (
            <img
              src={nweetObj.attachmentUrl}
              width="80px"
              height="80px"
              alt="사진"
              className={`absolute bottom-0 right-0 `}
            />
          )}
          {isOwner && (
            <>
              <button className={`mr-4`} onClick={onDeleteClick}>
                삭제
              </button>
              <button onClick={toggleEditing}>수정</button>
            </>
          )}
        </article>
      )}
    </div>
  );
};

export default Nweet;
