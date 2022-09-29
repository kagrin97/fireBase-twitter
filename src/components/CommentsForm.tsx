import useCommentsForm from "hooks/useCommentsForm";

export default function CommentsForm({ userObj }: { userObj: any }) {
  const {
    nweet,
    attachment,
    fileInput,
    onSubmitComment,
    onChangeText,
    onPhotoChange,
    onClearAttachment,
  } = useCommentsForm(userObj);

  return (
    <form
      onSubmit={onSubmitComment}
      className={`flex flex-col mt-4 mx-auto text-center`}
    >
      <div>
        <input
          value={nweet}
          onChange={onChangeText}
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
          onChange={onPhotoChange}
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
