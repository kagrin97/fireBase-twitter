import React, { useState, useRef } from "react";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "../fbase";
import { addDoc, collection } from "firebase/firestore";

export default function NweetFactory({ userObj }: { userObj: any }) {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState<any>("");
  const fileInput: any = useRef();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      const response = await uploadString(fileRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref);
    }
    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        nickname: userObj.displayName,
        attachmentUrl,
        photoUrl: userObj.photoURL,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setNweet("");
    setAttachment("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: any = event.target.files;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent: any) => {
      const result = finishedEvent.currentTarget.result;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => {
    setAttachment(null);
    fileInput.current.value = "";
  };
  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col mt-4 mx-auto text-center`}
    >
      <div>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="채팅을 남겨보세요!"
          maxLength={90}
          className={`px-4 py-1 rounded-md`}
        />
        <input
          type="submit"
          value="채팅 전송!"
          className={`bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-2 w-24 rounded-full my-4 ml-4`}
        />
      </div>
      <div className={`flex`}>
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          ref={fileInput}
          className={`file:mr-4 file:mt-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-green-400 file:text-white
        hover:file:bg-green-700 `}
        />
        <div className={`flex`}>
          {attachment && (
            <div className={`relative`}>
              <img src={attachment} width="80px" height="80px" alt="이미지" />
              <button
                className={`bg-green-400 hover:bg-green-700 text-white font-bold w-6 h-6 rounded-full absolute top-0 right-0`}
                onClick={onClearAttachment}
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
