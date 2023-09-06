import { useRouter } from "next/router";
import Image from "next/image";
import { trpc } from "../../utils/trpc";
import Icon from "../../components/Icon";
import Link from "next/link";
import type { Link as link } from "@prisma/client";
const UserPage = () => {
    const { query } = useRouter();
    const {data, isLoading} = trpc.link.getUserLinks.useQuery({id:query.id as string})
    if(isLoading)return <div>Loading</div>   
    return(
            <div className="flex flex-col justify-center items-center relative"> 
                <div className="my-6"></div>
                <div className="flex flex-col items-center justify-center gap-4" >
                    <Image src={data?.image as string} width={120} height={120} alt={`Image of ${data?.name} `} className="rounded-full" /> 
                    <div className="text-center">
                        <small className="font-bold">@{data?.name}</small>
                        <h2 className="text-2xl font-bold" >{data?.name}</h2>
                        <div>{JSON.stringify(data?.backgroundImage)}</div>
                    </div>
                </div>
                <div className="my-4"></div>
                <div className="flex flex-col items-center gap-2">
                    {data?.links.map((link: link) => {
                        return(
                            <Link href={link.href} key={link.id} className="w-80 flex gap-2 py-2 px-4 items-center rounded-md shadow-md">
                                <Icon name={link.icon as string} />    
                                <p className="font-medium">{link.name}</p>
                            </Link>
                        )
                        })}
                    <div></div>
                </div>
            </div>
    )
    }

export default UserPage;
