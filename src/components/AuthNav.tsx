import { useRouter } from "next/router";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  MdOutlinePhonelink,
  MdBackupTable,
  MdQueryStats,
  MdSettings,
  MdIosShare,
} from "react-icons/md";
import Logo from "./Logo";
const AuthNav = () => {
  const {data:session} = useSession();
  const router = useRouter();
  const path = router.asPath;
  return (
    <div className="flex items-center justify-between rounded-lg px-6 py-1 shadow-lg">
      <div>
        <div className="hidden sm:block">
          <Logo />
        </div>
      </div>
      <div className="flex gap-9 sm:gap-3">
        <Link
          href={"/dashboard"}
          className="translation flex scale-95 cursor-pointer flex-col items-center duration-300 ease-in-out hover:scale-100"
        >
          <MdOutlinePhonelink size={32} />
          <p
            className={`${
              path === "/dashboard" ? "font-bold" : ""
            } hidden text-lg sm:block`}
          >
            Links
          </p>
        </Link>
        <Link
          href={"/dashboard/appearance"}
          className="translation flex scale-95 cursor-pointer flex-col items-center duration-300 ease-in-out hover:scale-100"
        >
          <MdBackupTable size={32} />
          <p
            className={`${
              path === "/dashboard/appearance" ? "font-bold" : ""
            } hidden text-lg sm:block`}
          >
            Appearence
          </p>
        </Link>
        <Link
          href={"/dashboard/analytics"}
          className="translation flex scale-95 cursor-pointer flex-col items-center duration-300 ease-in-out hover:scale-100"
        >
          <MdQueryStats size={32} />
          <p
            className={`${
              path === "/dashboard/analytics" ? "font-bold" : ""
            } hidden text-lg sm:block`}
          >
            Analytics
          </p>
        </Link>
        <Link
          href={"/dashboard/settings"}
          className="translation flex scale-95 cursor-pointer flex-col items-center duration-300 ease-in-out hover:scale-100"
        >
          <MdSettings size={32} />
          <p
            className={`${
              path === "/dashboard/settings" ? "font-bold" : ""
            } hidden text-lg sm:block`}
          >
            Settings
          </p>
        </Link>
      </div>
      <div className="translation flex scale-95 cursor-pointer flex-col items-center duration-300 ease-in-out hover:scale-100">
        <Link href={`/user/${session?.user?.id}`}>
            <MdIosShare size={32} />
        </Link>
        <p className="hidden sm:block">Share</p>
      </div>
    </div>
  );
};

export default AuthNav;
