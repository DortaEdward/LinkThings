import { getSession, useSession } from "next-auth/react";
import AuthorizedLayout from "../../Layout/Authorized";
import type { GetServerSidePropsContext } from "next";
import PageEdit from "../../components/PageEdit";
import { trpc } from "../../utils/trpc";

const Dashboard = () => {
  const { data: session } = useSession();
  const { data, isLoading } = trpc.page.findPage.useQuery();

  if (isLoading) return <>Loading..</>;

  return (
    <AuthorizedLayout>
      <div className="my-4"></div>
      {data ? session?.user ? <PageEdit /> : <></> : <>Create Page</>}
    </AuthorizedLayout>
  );
};
export default Dashboard;

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
