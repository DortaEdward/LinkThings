import { useState } from "react";
import { getSession } from "next-auth/react";
import AuthorizedLayout from "../../Layout/Authorized";
const Dashboard = () => {
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState<string>();

  const handleSubmit = () => {
    if (!linkInput) return;
    setLinks((prev) => [...prev, linkInput]);
    setLinkInput("");
  };

  return (
    <AuthorizedLayout>
      <div className="my-4"></div>
      <div className="flex gap-4">
        <div className="w-full rounded-lg px-4 pt-6 shadow-lg md:w-2/3">
          <h1>Links</h1>
          <div>
            <div className="flex w-full items-center justify-between rounded-md py-2 pl-2 shadow-lg">
              <input
                type="text"
                placeholder="Add a link"
                value={linkInput}
                onChange={(e: any) => setLinkInput(e.target.value)}
                className="flex-1 rounded bg-neutral-100 px-4 py-2 outline-none"
              />
              <div className="mx-5 flex gap-3 text-gray-100">
                <button
                  className="rounded bg-green-600 px-8 py-2"
                  onClick={handleSubmit}
                >
                  Add
                </button>
                <button className="rounded bg-red-600 px-8 py-2">Clear</button>
              </div>
            </div>
          </div>
          <div>
            {links.map((link: any, idx: number) => {
              return (
                <div key={idx}>
                  <p>{link}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden w-1/3 rounded-lg px-4 py-10 shadow-lg lg:block">
          <div className="relative flex h-full items-center justify-center">
            <div className="h-[500px] w-[260px] rounded-3xl bg-neutral-800"></div>
            <div className="absolute h-[485px] w-[245px] rounded-2xl bg-neutral-100"></div>
            <div className="absolute top-0 h-[20px] w-[100px] rounded-bl-md rounded-br-md bg-neutral-800"></div>
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
