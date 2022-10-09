import useCommentsList from "hooks/useCommentsList";

const CommentsList = ({
  nweetObj,
  isOwner,
}: {
  nweetObj: any;
  isOwner: boolean;
}) => {
  const {
    editing,
    newNweet,
    onDeleteClick,
    toggleEditing,
    onSubmit,
    onChange,
  } = useCommentsList(nweetObj);

  return (
    <div className={`max-w-xl my-4 flex w-full`}>
      {editing ? (
        <article className={`flex w-full`}>
          <div className={`w-1/6 rounded-full`}>
            <img
              alt="프로필사진"
              src={nweetObj.photoUrl}
              className={`rounded-full w-16 h-16`}
            />
          </div>
          <div
            className={`bg-green-700 text-white font-bold py-2 px-4 rounded-md my-4 w-4/6 mt-0`}
          >
            <form onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="새로운 텍스트를 입력하세요."
                value={newNweet}
                required
                onChange={onChange}
                className={`text-black rounded-md px-1 w-full`}
              />
              <input
                type="submit"
                value="업데이트"
                className={`my-1 hover:text-yellow-200 hover:cursor-pointer`}
              />
            </form>
            <button className={`hover:text-yellow-200`} onClick={toggleEditing}>
              취소
            </button>
          </div>
          {nweetObj.attachmentUrl && (
            <div className={`w-1/6`}>
              <img
                src={nweetObj.attachmentUrl}
                width="80px"
                height="80px"
                alt="사진"
                className={`m-auto`}
              />
            </div>
          )}
        </article>
      ) : (
        <article className={`flex w-full`}>
          <div className={`w-1/6`}>
            <img
              alt="프로필사진"
              src={nweetObj.photoUrl}
              width="80px"
              height="80px"
              className={`rounded-full w-16 h-16`}
            />
          </div>
          <div
            className={`bg-green-400 ${
              !isOwner && "bg-gray-400"
            } text-white font-bold py-2 px-4 rounded-md my-4 w-4/6 mt-0`}
          >
            {nweetObj.nickname}
            <h4 className={`break-words w-full`}>{nweetObj.text}</h4>
            {isOwner && (
              <>
                <button
                  className={`mr-4 hover:text-yellow-200`}
                  onClick={onDeleteClick}
                >
                  삭제
                </button>
                <button
                  className={`hover:text-yellow-200`}
                  onClick={toggleEditing}
                >
                  수정
                </button>
              </>
            )}
          </div>
          {nweetObj.attachmentUrl && (
            <div className={`w-1/6 text-center`}>
              <img
                src={nweetObj.attachmentUrl}
                width="80px"
                height="80px"
                alt="사진"
                className={`m-auto`}
              />
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default CommentsList;
