import useAuthForm from "hooks/useAuthForm";

export default function AuthForm() {
  const {
    email,
    password,
    error,
    onChangeForm,
    onSubmitAuth,
    onAccount,
    onLogIn,
  } = useAuthForm();
  return (
    <>
      <form onSubmit={onSubmitAuth} className={`flex flex-col mt-28`}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChangeForm}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChangeForm}
          className={`my-4`}
        />
        <div className={`flex justify-between`}>
          <input
            type="submit"
            className={`bg-green-400 hover:bg-green-700 text-white font-bold py-1 w-28 rounded-full mb-4`}
            value="계정 생성"
            onClick={onAccount}
          />
          or
          <input
            type="submit"
            className={`bg-green-400 hover:bg-green-700 text-white font-bold py-1 w-28 rounded-full mb-4`}
            value="로그인"
            onClick={onLogIn}
          />
        </div>
        {error && (
          <div className={`bg-red-300 px-4 py-4 rounded-md text-red-900`}>
            {error}
          </div>
        )}
      </form>
    </>
  );
}
