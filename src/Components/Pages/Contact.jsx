import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <h1 className='mb-4 pt-3 text-center text-6xl sm:text-8xl text-white font-semibold'>
        Contact Me
        </h1>
      
      <form 
      className=' grid w-[280px]  sm:w-[550px] ml-4 sm:ml-32 pb-5 '
      onSubmit="">
        
          <label htmlFor="name"
          className='text-white text-lg'
          >
             Name : 
             </label>
          <input 
          type="text"
            name='name'
            id='name'
            placeholder='Joe Smith '
            className='mt-2 mb-6 py-1 px-2 rounded-md  '
          // onChange={}
          />
        

        <label htmlFor="email"
        className='text-white text-lg'> 
          Email : 
          </label>
        <input type="email"
          name="email"
          id="email"
          placeholder='example@email.com'
          className='mt-2 mb-6 py-1 px-2 rounded-md'
        // onChange={}
        />
        <label htmlFor="msg"
        className='text-white text-lg'> 
          Message :
          </label>
        <input type="text"
          name="msg"
          id="msg"
          placeholder='Type your message here.'
          className='mt-2 mb-6 pt-1 pb-32 px-2 rounded-md'
        // onChange={}
        />
        
        <div>
          <button 
          className='text-white border-white border-2 rounded-lg py-2 px-3 hover:bg-white hover:text-black'

          type='submit'
          //  value={}
          >
            Submit
          </button>
        </div>

      </form>

    </div>
  )
}

export default Contact
