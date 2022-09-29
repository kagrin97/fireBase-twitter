import AppRouter from "components/Router";
import useCheckUser from "hooks/useCheckUser";

function App() {
  const { init, isLoggedIn, userObj, refreshUser } = useCheckUser();

  return (
    <body
      className={`bg-neutral-100 mt-24 mx-auto flex flex-col justify-center items-center`}
    >
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        "Initializing..."
      )}
    </body>
  );
}

export default App;
