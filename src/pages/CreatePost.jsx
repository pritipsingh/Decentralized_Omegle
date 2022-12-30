import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {ethers} from 'ethers'
import FormField from '../components/FormField';

import { money } from '../assets';
import CustomButtom from '../components/CustomButton';
import { useStateContext } from '../context';

const CreatePost = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {createPost} = useStateContext();
  const [form, setForm] = useState({
    description: '',

  });
  const formfieldSubmit = (name,e) => {
    setForm({...form, [name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    setIsLoading(true);
    await createPost({...form})
    setIsLoading(false);
    navigate('/')

    // console.log(form)
    } catch (error) {
      console.log(error)
    }
    

  }
  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loadingg...'}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
         <h1 className='font-epilogue font-bold sm:text[25px] text-[18px] leading-[38px] text-white'>Start Posting</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
      <div className='flex flex-col flex-wrap gap-[40px]'>
        <FormField 
          labelName = 'Description'
          placeholder = 'Write a post here...'
          value = {form.description}
          inputType='text'
          isTextArea={true}
          handleChange = {(e) => {
            formfieldSubmit('description',e)
          }}
        />
        <div className='flex justify-center items-center mt-[40px]'>
          <CustomButtom 
            btnType='submit'
            title='Post Now'
            styles='bg-[#1dc071]'
          />
        </div>
      </div>
      </form>
     
    </div>
  )
}

export default CreatePost