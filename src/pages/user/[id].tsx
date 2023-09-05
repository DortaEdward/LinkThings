import { useRouter } from "next/router";
import AuthorizedLayout from "../../Layout/Authorized";
import { trpc } from "../../utils/trpc";
const UserPage = () => {
    const { query } = useRouter();
    const {data, isLoading} = trpc.link.getUserLinks.useQuery({id:query.id})
    if(isLoading)return <div>Loading</div>   
    return(
            <div>
                {JSON.stringify(data)}
            </div>
    )
    }

export default UserPage;
