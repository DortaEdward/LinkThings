import { useState } from "react";
import { getSession } from "next-auth/react";
import AuthorizedLayout from "../../Layout/Authorized";
import { MdEditNote, MdRemoveCircle } from "react-icons/md";

type Link = {
  title: string;
  link: string;
};

const Dashboard = () => {
  const [links, setLinks] = useState<Link[]>([
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
    },
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
    },
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
    },
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
    },
    {
      title: "Instagram",
      link: "https://www.Instagram.com",
    },
  ]);
  const [linkInput, setLinkInput] = useState({
    title: '',
    link:'',
  });

  function removeLink(idx: number){
    const newLinks = links.filter((_,i) => i !== idx);
    setLinks(newLinks)
  }

  const handleSubmit = () => {
    if (linkInput?.link.length <= 0 || linkInput.title.length <= 0) return;
    alert('HIttin')
    setLinks((prev) => [
      ...prev,
      {
        title: linkInput.title,
        link: linkInput.link,
      },
    ]);
    setLinkInput({
      title: "",
      link: "",
    });
  };

  function handleClear(){
    setLinkInput({title:'',link:''})
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
    <AuthorizedLayout>
      <div className="my-4"></div>
      <div className="flex gap-2">
        <div className="w-full rounded-lg px-4 pt-6 shadow-lg lg:w-2/3">
          <div>
            <div className="flex w-full flex-col items-end justify-between rounded-md py-3 px-4 shadow-lg">
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
              <div className="flex flex-wrap gap-3 text-gray-100 w-full justify-end">
                <button
                  className="rounded bg-green-600 w-[102px] py-2"
                  onClick={handleSubmit}
                >
                  Add
                </button>
                <button onClick={handleClear} className="rounded bg-red-600 w-[102px] py-2">Clear</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4 h-[424px] overflow-auto shadow-lg">
            {links.map((link: Link, idx: number) => {
              return (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-md p-2 shadow-lg"
                >
                  <div className="flex flex-col gap-2 p-2">
                    <div>{link.title}</div>
                    <div className="text-lg">{link.link}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <MdEditNote className="cursor-pointer" size={28} />
                    <MdRemoveCircle onClick={() => removeLink(idx)} className="cursor-pointer" size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden w-1/3 rounded-lg px-4 py-10 shadow-lg lg:block">
          <div className="relative flex h-full items-center justify-center">
            <div className="h-[500px] w-[260px] rounded-3xl bg-neutral-800"></div>
            <div className="absolute h-[485px] w-[245px] rounded-2xl bg-neutral-100"></div>
            <div className="absolute top-5 h-[20px] w-[100px] rounded-bl-md rounded-br-md bg-neutral-800"></div>
          </div>
        </div>
      </div>
    </AuthorizedLayout>
  );
};
export default Dashboard;

import type { GetServerSidePropsContext } from "next";
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
