import React, { useState, useRef } from "react";
import { updateProfile } from "firebase/auth";
import { dbService, storageService } from "../fbase";
import { collection, getDocs, query, updateDoc, doc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";

import useCheckUser from "hooks/useCheckUser";

const ProFile = () => {
  const { userObj, refreshUser } = useCheckUser();

  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [photo, setPhoto] = useState<any>("");
  const fileInput: any = useRef();
  let NweetTextRef: any;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const changeNickName = async (photoUrl: any) => {
    const q = query(collection(dbService, "nweets"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      if (document.data().creatorId === userObj.uid) {
        NweetTextRef = doc(dbService, "nweets", `${document.id}`);
        await updateDoc(NweetTextRef, {
          nickname: newDisplayName,
          photoUrl,
        });
      }
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = window.confirm("프로필을 변경하시겠습니까?");
    if (ok) {
      if (userObj.displayName !== newDisplayName || photo !== "") {
        if (userObj.displayName !== newDisplayName) {
          await updateProfile(userObj, { displayName: newDisplayName });
        }
        let photoUrl = "";
        if (photo !== "") {
          const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
          const response = await uploadString(fileRef, photo, "data_url");
          photoUrl = await getDownloadURL(response.ref);
          await updateProfile(userObj, { photoURL: photoUrl });
        }
        changeNickName(photoUrl);
        refreshUser();
      }
    }
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: any = event.target.files;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent: any) => {
      const result = finishedEvent.currentTarget.result;
      setPhoto(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearPhoto = () => {
    setPhoto("");
    fileInput.current.value = "";
  };
  return (
    <article className={`relative`}>
      <form onSubmit={onSubmit} className={`flex flex-col mt-4 mx-auto`}>
        <div className={`flex`}>
          <div className={`mr-4`}>현재 이름 : </div>
          <input
            onChange={onChange}
            type="text"
            placeholder="Display name"
            value={newDisplayName}
            maxLength={15}
          />
        </div>
        <div className={`mr-4`}>프로필 사진</div>
        <div className={`relative`}>
          <img
            src={!photo ? userObj.photoURL : photo}
            alt="사진"
            className={`rounded-full w-16 h-16`}
          />
          <label
            className={`
            w-6 h-6
            rounded-full 
            text-sm font-semibold
            bg-green-400 text-white
            hover:bg-green-700 absolute top-0 left-0 text-center`}
          >
            <span>+</span>
            <input
              type="file"
              onChange={onFileChange}
              ref={fileInput}
              accept="image/*"
              className={`hidden`}
            />
          </label>
        </div>
        <div className={`text-center`}>
          <input
            type="submit"
            value="변경사항 저장"
            className={`bg-green-400 hover:bg-green-700 text-white font-bold py-1 px-4 w-32 rounded-full`}
          />
        </div>
      </form>
      <div
        onClick={onClearPhoto}
        className={`w-6 h-6 bg-green-400 hover:bg-green-700 text-center rounded-full text-white absolute bottom-8 left-0`}
      >
        x
      </div>
    </article>
  );
};

export default ProFile;
