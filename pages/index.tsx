import type { NextPage } from 'next'
import React, {useState} from "react";
import Link from "next/link";

const Home: NextPage = () => {

  const [chatroomName, setChatroomName] = useState<string>('');
  const [hasName, setHasName] = useState<boolean>(false);

  function checkForName() {
    if (chatroomName.trim().length > 0) {
        setHasName(true)
    }
  }

  if(hasName) {
      return (<div>
          <Link href={'/' + chatroomName}>Enter</Link>
      </div>);
  }

   return (
       <div>
           <label>Enter name of chatroom</label>
           <br/>
           <input type="text" value={chatroomName} onChange={(e) => {setChatroomName(e.target.value)}} required />
           <br/>
           <input type="button" value="Submit" onClick={() => checkForName()}/>
       </div>
  );
}

export default Home;