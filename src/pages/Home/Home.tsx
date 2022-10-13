import CommentsList from "pages/Home/components/CommentsList";
import CommentsForm from "pages/Home/components/CommentsForm";

import useGetNweets from "hooks/useGetNweets";

import { FirebaseUser } from "types/user";

const Home = ({ userObj }: { userObj: FirebaseUser | null }) => {
  const { nweets } = useGetNweets();
  return (
    <div className={`w-full max-w-xl`}>
      <CommentsForm userObj={userObj} />
      {nweets.map((nweet) => (
        <CommentsList
          key={nweet.id}
          nweetObj={nweet}
          isOwner={nweet.creatorId === userObj!.uid}
        />
      ))}
    </div>
  );
};
export default Home;
