import type { NextPage } from 'next'
import {useRouter} from "next/router";
import ChatRoom from "../components/ChatRoom";

const Room: NextPage = () => {

const router = useRouter();

const {roomName } = router.query;
    return (
        <div>
            <h1>{roomName}</h1>
            <ChatRoom roomName={roomName}/>
        </div>
    )
}

export default Room
