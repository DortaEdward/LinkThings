// import type { User } from "@prisma/client";
import Image from "next/image";
import Icon from "./Icon";
type Link = {
  id: string;
  name: string;
  href: string;
  icon: string;
};

type User = {
  id: string;
  name: string | null;
  image: string | null;
  // backgroundImage: string | null;
  // bio: string | null;
};

type Props = {
  links: Link[];
  user: User;
};

const Phone = ({ user, links }: Props) => {
  return (
    <div className="hidden w-1/3 rounded-lg px-4 py-10 shadow-lg lg:block">
      <div className="relative flex h-full items-center justify-center">
        <div className="h-[500px] w-[260px] rounded-3xl bg-neutral-800"></div>
        <div className="absolute flex h-[485px] w-[245px] justify-center rounded-2xl bg-neutral-100 pt-10">
          <div className="flex flex-col items-center gap-1">
            {
              <>
                <Image
                  src={user?.image as string}
                  alt={`Image of ${user?.image}`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="leading-4">
                  <p className="font-bold capitalize">{user?.name}</p>
                  <p className="text-sm italic">@{user?.name}</p>
                </div>
                <div className="my-2"></div>
                <div className="flex h-[300px] w-[220px] flex-col gap-2 px-2 shadow-lg rounded-lg">
                  {links.map((link: Link, idx: number) => {
                    return (
                      <div
                        key={`${link.name}-${idx}`}
                        className="flex w-full items-center justify-center gap-1 rounded-md py-1 shadow-md"
                      >
                        <div className="flex items-center justify-between w-full px-2">
                          <Icon name={link.icon} />
                          <p className="text-[9px] font-bold">{link.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            }
          </div>
        </div>
        <div className="absolute top-8 h-[20px] w-[100px] rounded-bl-md rounded-br-md bg-neutral-800"></div>
      </div>
    </div>
  );
};

export default Phone;
