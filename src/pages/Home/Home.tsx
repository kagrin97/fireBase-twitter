import CommentsList from "pages/Home/components/CommentsList";
import CommentsForm from "pages/Home/components/CommentsForm";

import useGetNweets from "hooks/useGetNweets";

const Home = ({ userObj }: { userObj: any }) => {
  const { nweets } = useGetNweets();
  return (
    <div className={`w-full max-w-xl`}>
      <CommentsForm userObj={userObj} />
      {nweets.map((nweet: any) => (
        <CommentsList
          key={nweet.id}
          nweetObj={nweet}
          isOwner={nweet.creatorId === userObj.uid}
        />
      ))}
    </div>
  );
};
export default Home;
