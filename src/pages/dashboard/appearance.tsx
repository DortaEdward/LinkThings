
import Phone from "../../components/Phone";
import AuthorizedLayout from "../../Layout/Authorized";
import { trpc } from "../../utils/trpc";
const Appearance = () => {
    return(
        <AuthorizedLayout>
            <div>
                Background, card color, font
                <Phone links={[]} />
            </div>
        </AuthorizedLayout>
    )
}

export default Appearance
