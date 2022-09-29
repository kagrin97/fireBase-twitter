import AppRouter from "components/Router";
import useCheckUser from "hooks/useCheckUser";

function App() {
  const { init } = useCheckUser();

  return (
    <body
      className={`bg-neutral-100 mt-24 mx-auto flex flex-col justify-center items-center`}
    >
      {init ? <AppRouter /> : "Loading..."}
    </body>
  );
}

export default App;
