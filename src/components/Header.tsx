import { useSession, signIn, signOut } from "next-auth/react";
import Logo from "./Logo";
const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="flex w-full items-center justify-between bg-neutral-800 px-20 py-6 text-gray-100">
      <Logo />
      <div>
        {session ? (
          <div className="flex items-center px-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-2xl font-bold">
                <p className="capitalize">{session.user?.name ? session.user.name[0] : ""}</p>
              </div>
              <button className="px-2 py-1 rounded-md bg-red-500" onClick={() => signOut()}>Sign Out</button>
            </div>
          </div>
        ) : (
          <button className="px-2 py-1 rounded-md bg-green-500" onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </header>
  );
};

export default Header;
