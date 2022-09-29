import useEditProfile from "hooks/useEditProfile";

const ProFile = ({ userObj }: { userObj: any }) => {
  const {
    newDisplayName,
    photo,
    fileInput,
    onChangeDisplayName,
    onSubmitProfile,
    onFileChange,
    onClearPhoto,
  } = useEditProfile(userObj);
  return (
    <article className={`relative`}>
      <form onSubmit={onSubmitProfile} className={`flex flex-col mt-4 mx-auto`}>
        <div className={`flex`}>
          <div className={`mr-4`}>현재 이름 : </div>
          <input
            onChange={onChangeDisplayName}
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
