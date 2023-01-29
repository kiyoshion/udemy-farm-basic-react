import { useProcessAuth } from "../hooks/useProcessAuth";

export const Todo: React.FC = () => {
  const { logout } =useProcessAuth()

  return (
    <div
      onClick={logout}
    >
      Logout
    </div>
  );
}
