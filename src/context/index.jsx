import React, {useContext, createContext, useState} from 'react';
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react';
import {ethers} from 'ethers';


const StateContext = createContext();

export const StateContextProvider = ({children}) => {
  const {contract} = useContract('0x3b762261dC3512b5f823cC234036779257E125E1');
  const {mutateAsync: createPost} = useContractWrite(contract, 'createPost')
  const [roomID, setRoomID] = useState('');
  // console.log(roomID)
  const address = useAddress();
  const connect = useMetamask();


  const publishPost = async (form) => {

    try {
      const data = await createPost([
      address, //owner
      form.description 
    ])
      console.log('contract called success', data)
    } catch (error) {
      console.log(error)
    }
    
  }

  const getPost = async () => {

    try {
      const post = await contract.call('getPost')
      
    console.log(post)
    return post;
    } catch (error) {
      console.log(error)
    }
    

  }
  const getUserPosts = async () => {
    const allPosts = await getPost();
    const UserPosts = allPosts.filter((post) => post.owner === address);
    return UserPosts;
  }
  return(
    <StateContext.Provider
      value = {{
        address,
        contract,
        createPost: publishPost,
        connect,
        getPost,
        getUserPosts,
        setRoomID,
        roomID
      }}
      >
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);


