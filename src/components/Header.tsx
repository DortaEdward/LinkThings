import { useSession, signIn, signOut } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  return (
    <header className="flex w-full items-center justify-between bg-neutral-800 px-20 py-6 text-teal-500">
      <div>
        <p>Link Things</p>
      </div>
      <div>
        {session ? (
          <div className="flex items-center px-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 text-2xl font-bold">
                <p>{session.user?.name ? session.user.name[0] : ""}</p>
              </div>
              <button onClick={() => signOut()}>Sign Out</button>
            </div>
          </div>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </header>
  );
};

export default Header;
