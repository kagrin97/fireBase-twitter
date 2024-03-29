import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";

import AuthApi from "api/authApi";

function useEditProfile(userObj: any) {
  const [newDisplayName, setNewDisplayName] = useState(userObj?.displayName);
  const [photo, setPhoto] = useState<string>(userObj?.photoURL);
  const fileInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onChangeDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(() => value);
  };

  const onSubmitProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ok = window.confirm("프로필을 변경하시겠습니까?");
    if (ok) {
      AuthApi.changeProfile({ userObj, newDisplayName, photo });
      navigate("/");
    }
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files!;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent: any) => {
      const result = finishedEvent.currentTarget.result;
      setPhoto(() => result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearPhoto = () => {
    setPhoto("");
    fileInput.current!.value = "";
  };

  return {
    newDisplayName,
    photo,
    fileInput,
    onChangeDisplayName,
    onSubmitProfile,
    onFileChange,
    onClearPhoto,
  };
}

export default useEditProfile;
