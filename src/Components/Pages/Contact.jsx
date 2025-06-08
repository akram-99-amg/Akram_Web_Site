import { useState } from 'react'
import emailjs from "emailjs-com"
import { BackgroundLines } from "../Background/Background";


const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const [sent, setSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    const templateParams = {
      from_name: name,
      from_email: email,
      from_msg: msg.replace(/\n/g, "<br />"),
      date: new Date().toLocaleString(),
    };
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

    ).then(() => {
      setSent(true)
      setName("")
      setEmail("")
      setMsg("")
    }).catch((err) => {
      console.log(err);
      alert("Something went wrong. Please try again later.");
    })

  }

  return (
    <BackgroundLines className="relative  overflow-hidden flex items-center justify-center flex-col text-white py-16 sm:py-[70px] sm:px-[150px] px-8">
    <div id='contact' className='z-10 animate-slideFadeUp'>
      <h1 className='mb-6 pt-3 text-center text-6xl sm:text-8xl text-white font-semibold'>
        Contact Me
      </h1>

      <form
        className=' grid w-[280px]  sm:w-[550px] ml-4 sm:ml-32 pb-5 '
        onSubmit={sendEmail}>

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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="msg"
          className='text-white text-lg'>
          Message :
        </label>
        <textarea 
          name="msg"
          id="msg"
          placeholder='Type your message here.'
          className='mt-2 mb-6 pt-1 pb-32 px-2 rounded-md'
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <div>
          <button
            className='text-white border-white border-2 rounded-lg py-2 px-3 hover:bg-white hover:text-black'

            type='submit'
          
          >
            Submit
          </button>

          {sent && (
            <p className='text-green-400 mt-4'>Message sent successfully</p>
          )}

        </div>

      </form>

    </div>
    </BackgroundLines>
  )
}

export default Contact
