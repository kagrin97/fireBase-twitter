import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

import useGetNweets from "hooks/useGetNweets";

const Home = ({ userObj }: { userObj: any }) => {
  const { nweets } = useGetNweets();
  return (
    <div className={`w-full max-w-xl`}>
      <NweetFactory userObj={userObj} />
      {nweets.map((nweet: any) => (
        <Nweet
          key={nweet.id}
          nweetObj={nweet}
          isOwner={nweet.creatorId === userObj.uid}
        />
      ))}
    </div>
  );
};
export default Home;
