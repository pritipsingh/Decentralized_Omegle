import React, {useState, useEffect} from 'react'
import DisplayPosts from '../components/DisplayPosts'
import { useStateContext } from '../context'


const Home = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])
const { contract, getPost, address } = useStateContext();
  const fetcPosts = async () => {
    try {
      setIsLoading(true)
      const data = await getPost()
      setPosts(data)
      setIsLoading(false);
    }catch(error){
      console.log(error)
      }
  }
  useEffect(() => { 
    if(contract) fetcPosts();
    // setIsLoading(false)
  },[address, contract])
return (
    <DisplayPosts 
      title='All Posts'
      isLoading={isLoading}
      posts={posts}
      user={false}
    />
  )
}

export default Home