// api = 36b71dc6ad7682f7b5aaeba66bfd970dfd3b6a376c3c221fcc91303012c654cd
import React, {useState} from 'react'
import {
  HuddleClientProvider,
  getHuddleClient,
} from "@huddle01/huddle01-client";

import { useHuddleStore } from "@huddle01/huddle01-client/store";
import PeerVideoAudioElem from "../components/PeerVideoAudioElem";
import MeVideoElem from "../components/MeVideoElem";
import CustomButton from '../components/CustomButton';
import { useStateContext } from '../context';

const Meeting = ({roomID}) => {
  
  const huddleClient = getHuddleClient("36b71dc6ad7682f7b5aaeba66bfd970dfd3b6a376c3c221fcc91303012c654cd");
  const peersKeys = useHuddleStore((state) => Object.keys(state.peers));
  const lobbyPeers = useHuddleStore((state) => state.lobbyPeers);
  const roomState = useHuddleStore((state) => state.roomState);
  const { address} = useStateContext();
  
  // const [roomID, setRoomID] = useState('');
  // const [room, setRoom] = useState(false);
  console.log('HERE', roomID)
  console.log('HERE', address)
  
  const handleClick = async () => {
   
    
    try {
      await huddleClient.join(roomID, {
        address: address,
        wallet: "",
        ens: "axit.eth",
      });
      console.log(roomID)
      console.log("joined");
    } catch (error) {
      console.log({ error });
    }
 
    console.log('This works hehe')
    
  };
  return (
    <HuddleClientProvider value={huddleClient}>
      <div className='flex flex-col justify-center  items-center w-full h-[50vh]'>
        <div className='card flex flex-row w-full rounded-[10px] p-[7px] border-2 justify-between h-full mt-[60px] justify-center gap-2'>
          
            {<MeVideoElem />}
        
          
          {peersKeys.map((key) => (
                  <PeerVideoAudioElem key={`peerId-${key}`} peerIdAtIndex={key} />
                ))}
        </div>
      
<div className="flex flex-row h-[10px] justify-center gap-4 mt-[60px]">
      {  <CustomButton 
          btnType="button"
          title='Join Call'
          styles='bg-[#8c6dfd]'
          handleClick={handleClick}
          
        />}
        {  <CustomButton 
          btnType="button"
          title='Enable Camera'
          styles='bg-[#8c6dfd]'
          handleClick={() => (huddleClient.enableWebcam())}
          
        />}
        {  <CustomButton 
          btnType="button"
          title='Disable Camera'
          styles='bg-[#8c6dfd]'
          handleClick={() => huddleClient.disableWebcam()}
          
        />}
        {  <CustomButton 
          btnType="button"
          title='Allow User to Join'
          styles='bg-[#8c6dfd]'
          handleClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}
          
        />}
       
    </div>

    </div>


    </HuddleClientProvider>
    
  )
}

export default Meeting
