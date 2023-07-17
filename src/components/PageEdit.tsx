import { IconsImages } from "./Icons";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState } from "react";
import { useSession } from "next-auth/react";

import Image from "next/image";
import Icon from "./Icon";
import UserLink from "./UserLinks";
type Link = {
  title: string;
  link: string;
  icon: string;
};

const PageEdit = () => {
  const [iconListToggle, setIconListToggle] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string>();
  const [links, setLinks] = useState<Link[]>([
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
      icon: "instagram",
    },
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
      icon: "google",
    },
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
      icon: "twitter",
    },
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
      icon: "facebook",
    },
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
      icon: "instagram",
    },
  ]);

  const [linkInput, setLinkInput] = useState<Link>({
    title: "",
    link: "",
    icon: "",
  });

  const { data: session } = useSession();

  function removeLink(idx: number) {
    const newLinks = links.filter((_, i) => i !== idx);
    setLinks(newLinks);
  }

  const handleSubmit = () => {
    if (
      linkInput?.link.length <= 0 ||
      linkInput.title.length <= 0 ||
      selectedIcon === undefined
    )
      return;
    setLinkInput((prev) => ({
      ...prev,
      icon: selectedIcon,
    }));
    setLinks((prev) => [...prev, linkInput]);
    handleClear();
  };

  function handleClear() {
    setLinkInput({ title: "", link: "", icon: "" });
    setSelectedIcon("");
  }

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setLinkInput((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };
  }

  return (
    <div className="flex gap-2">
      <div className="w-full rounded-lg px-4 pt-6 shadow-lg lg:w-2/3">
        <div>
          <div className="flex w-full flex-col items-end justify-between rounded-md px-4 py-3 shadow-lg">
            <div className="flex w-full flex-col gap-1">
              <input
                type="text"
                placeholder="Title of link"
                onChange={updateForm("title")}
                value={linkInput.title}
                className="flex-1 rounded bg-neutral-100 px-4 py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Add a link"
                value={linkInput.link}
                onChange={updateForm("link")}
                className="flex-1 rounded bg-neutral-100 px-4 py-2 outline-none"
              />
            </div>
            <div className="my-2"></div>
            <div className="flex w-full flex-wrap justify-between gap-3 text-gray-100">
              <div className="relative flex items-center">
                <div
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-neutral-950 shadow-lg hover:bg-gray-100"
                  onClick={() => setIconListToggle((prev) => !prev)}
                >
                  <p>Select a icon</p>
                  {iconListToggle ? (
                    <MdExpandLess size={24} />
                  ) : (
                    <MdExpandMore size={24} />
                  )}
                </div>
                {selectedIcon ? (
                  <div className="ml-4">
                    <Icon name={selectedIcon} />
                  </div>
                ) : (
                  <></>
                )}

                {iconListToggle ? (
                  <div className="absolute -bottom-32 grid h-[120px] w-full grid-cols-3 gap-3 overflow-auto bg-gray-50 px-1 py-4 text-neutral-950 shadow-lg">
                    {IconsImages.map((icon) => {
                      return (
                        <icon.icon
                          className="cursor-pointer rounded p-1 shadow-lg"
                          size={34}
                          key={icon.name}
                          onClick={() => {
                            setSelectedIcon(icon.name);
                            setIconListToggle(false);
                          }}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  className="w-[102px] rounded bg-green-600 py-2"
                  onClick={handleSubmit}
                >
                  Add
                </button>
                <button
                  onClick={handleClear}
                  className="w-[102px] rounded bg-red-600 py-2"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex h-[424px] flex-col gap-4 overflow-auto py-4 shadow-lg">
          {links.map((link: Link, idx: number) => {
            return (
              <div
                key={idx}
                className="flex items-center justify-between rounded-md p-2 shadow-lg"
              >
                <UserLink link={link} idx={idx} removeLink={removeLink} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden w-1/3 rounded-lg px-4 py-10 shadow-lg lg:block">
        <div className="relative flex h-full items-center justify-center">
          <div className="h-[500px] w-[260px] rounded-3xl bg-neutral-800"></div>
          <div className="absolute flex h-[485px] w-[245px] justify-center rounded-2xl bg-neutral-100 pt-10">
            <div className="flex flex-col items-center gap-1">
              {session?.user ? (
                <>
                  <Image
                    src={session?.user?.image as string}
                    alt={`Image of ${session?.user?.image}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="leading-4">
                    <p className="font-bold capitalize">
                      {session?.user?.name}
                    </p>
                    <p className="text-sm italic">@{session?.user?.name}</p>
                  </div>
                  <div className="my-2"></div>
                  <div className="flex h-[300px] w-[200px] flex-col gap-2 outline">
                    {links.map((link, idx) => {
                      return (
                        <a href={link.link} key={`${link.title}-${idx}`}>
                          {link.title}
                        </a>
                      );
                    })}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="absolute top-5 h-[20px] w-[100px] rounded-bl-md rounded-br-md bg-neutral-800"></div>
        </div>
      </div>
    </div>
  );
};


export default PageEdit;