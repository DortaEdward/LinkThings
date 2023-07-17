import Icon from "./Icon";
import { MdEditNote, MdRemoveCircle } from "react-icons/md";

const UserLink = ({ link, removeLink, idx }: any) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Icon name={link.icon} />
        <div className="flex flex-col gap-2 p-2">
          <div>{link.title}</div>
          <div className="text-lg">{link.link}</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <MdEditNote className="cursor-pointer" size={28} />
        <MdRemoveCircle
          onClick={() => removeLink(idx)}
          className="cursor-pointer"
          size={24}
        />
      </div>
    </>
  );
};

export default UserLink