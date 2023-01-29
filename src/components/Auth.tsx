import { useProcessAuth } from "../hooks/useProcessAuth";

export const Auth: React.FC = () => {
  const {
    pw,
    setPw,
    email,
    setEmail,
    isLogin,
    setIsLogin,
    registerMutation,
    loginMutation,
    processAuth,
  } = useProcessAuth()

  if (registerMutation.isLoading || loginMutation.isLoading) {
    return (
      <div className='flex justify-center items-center flex-col min-h-screen'>
        <h1 className='text-xl text-gray-600 font-mono'>Loading ...</h1>
      </div>
    )
  }

  return (
    <div className='mx-auto max-w-5xl'>
      <span>{isLogin ? 'Login' : 'Register'}</span>
      <form onSubmit={processAuth}>
        <input
          name="email"
          type="email"
          autoFocus
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          name="password"
          type="password"
          autoFocus
          placeholder="password"
          onChange={(e) => setPw(e.target.value)}
          value={pw}
        />
        <button
          disabled={!email || !pw}
          type="submit"
        >
          {isLogin ? 'Login' : 'Register' }
        </button>
      </form>
      <div
        onClick={() => setIsLogin(!isLogin)}
      >
        TOGGLE
      </div>
    </div>
  );
}
