import Icon from "./Icon";
import { MdEditNote, MdRemoveCircle } from "react-icons/md";

const UserLink = ({ link, deleteLink }: any) => {
  return (
    <>
      <div className="flex items-center gap-2 pl-2">
        <Icon name={link.icon} />
        <div className="flex flex-col gap-2 p-2">
          <div>{link.name}</div>
          <div className="text-lg w-56 overflow-hidden md:w-full">{link.href}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2 pr-2">
        {/* <MdEditNote className="cursor-pointer" size={28} /> */}
        <MdRemoveCircle
          onClick={() => deleteLink(link.id)}
          className="cursor-pointer"
          size={24}
        />
      </div>
    </>
  );
};


export default UserLink;
