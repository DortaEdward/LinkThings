import { useRouter } from "next/router";
import {
  MdOutlinePhonelink,
  MdBackupTable,
  MdQueryStats,
  MdSettings,
  MdIosShare,
} from "react-icons/md";
const AuthNav = () => {
  const router = useRouter();
  const path = router.asPath;
  return (
    <div className="flex items-center justify-between rounded-lg shadow-lg px-6 py-4">
      <div className="">
        <p className="hidden sm:block">Logo</p>
      </div>
      <div className="flex gap-9 sm:gap-3">
        <div className="flex flex-col items-center scale-95 hover:scale-100 translation ease-in-out duration-300 cursor-pointer">
          <MdOutlinePhonelink size={32} />
          <p className={`${path === "/dashboard" ? "font-bold" : ""} text-lg hidden sm:block`}>
            Links
          </p>
        </div>
        <div className="flex flex-col items-center scale-95 hover:scale-100 translation ease-in-out duration-300 cursor-pointer">
          <MdBackupTable size={32} />
          <p
            className={`${
              path === "/dashboard/appearence" ? "font-bold" : ""
            } text-lg hidden sm:block`}
          >
            Appearence
          </p>
        </div>
        <div className="flex flex-col items-center scale-95 hover:scale-100 translation ease-in-out duration-300 cursor-pointer">
          <MdQueryStats size={32} />
          <p
            className={`${
              path === "/dashboard/analytics" ? "font-bold" : ""
            } text-lg hidden sm:block`}
          >
            Analytics
          </p>
        </div>
        <div className="flex flex-col items-center scale-95 hover:scale-100 translation ease-in-out duration-300 cursor-pointer">
          <MdSettings size={32} />
          <p
            className={`${
              path === "/dashboard/settings" ? "font-bold" : ""
            } text-lg hidden sm:block`}
          >
            Settings
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center scale-95 hover:scale-100 translation ease-in-out duration-300 cursor-pointer">
        <MdIosShare size={32} />
        <p className="hidden sm:block">Share</p>
      </div>
    </div>
  );
};

export default AuthNav;
