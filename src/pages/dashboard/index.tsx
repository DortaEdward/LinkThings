import { getSession } from "next-auth/react";
import AuthorizedLayout from "../../Layout/Authorized";
import type { GetServerSidePropsContext } from "next";
import LinkEdit from "../../components/LinkEdit";
import { trpc } from "../../utils/trpc";

const Dashboard = () => {
  const { data, isLoading } = trpc.link.getUserLinks.useQuery();
  return (
    <AuthorizedLayout>
      <div className="my-4"></div>
      { isLoading
        ? <>Retrieving links</>
        : <LinkEdit links={data ? data : []} />
      }
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
    props: {session},
  };
}


/*
if there are no links it returns undefinded/null
*/