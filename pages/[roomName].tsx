import {useRouter} from "next/router";


const Room = () => {
const router = useRouter()
const {roomName} = router.query
    return(
        <div>
            {roomName}
        </div>
        )
}

export default Room
