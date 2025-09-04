import React from 'react'
import { toast } from 'react-toastify';

function ContactUs() {
    const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);
  formData.append("access_key", "e6d6b948-4cea-4d59-808d-3d7e4389bde4");
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error("Something went wrong");
  } finally {
    setResult("");
  }
};

  return (
    <div id='ContactUs' className='h-screen w-full  flex flex-col justify-around items-center'>
      <div>
        <h1 className='text-4xl font-bold text-center'>Contact <span className='font-light underline'>With Us</span></h1>
        <h1 className='text-center capitalize font-light text-sm'>Ready to make a move? Let's build your <br /> future together</h1>
      </div>
      <form onSubmit={onSubmit} className=' w-[75%] md:w-[50%] flex flex-col gap-5 md:gap-7' action="#" >
        <div className='flex flex-col md:flex-row w-full'>
            <div className='text-left w-full md:w-1/2'>
                <label className='text-zinc-700 text-sm md:text-base' name='Name' htmlFor='Name'>Your Name</label>
                <input className='w-full border border-gray-300 rounded py-1 px-2 md:mt-2 text-sm md:text-base active:outline outline-blue-400' id='Name' type="text" placeholder='Enter your name'name='Name' required/>  
            </div>
            <div className='text-left w-full md:w-1/2 md:pl-5 mt-5 md:mt-0'>
                <label className='text-zinc-700 text-sm md:text-base' name='Email' htmlFor='Email'>Your Email</label>
                <input className='w-full border border-gray-300 rounded py-1 px-2 md:mt-2 text-sm md:text-base active:outline outline-blue-400' id='Email' name='Email' type="email" placeholder='Enter your email' required/>  
            </div>
        </div>
        <div className='w-full'>
            <label  htmlFor='text' name='Message' className='text-zinc-700 block text-sm md:text-base'>Message</label>
            <textarea id="text" name='Message' placeholder='Enter Your Message' className='w-full border text-zinc-700 border-gray-300 md:mt-3 rounded px-2 py-1 text-sm md:text-base active:outline outline-blue-400' rows="10"></textarea>
        </div>
        <div>
            <button className='px-6 py-1 bg-blue-500 hover:bg-blue-600 text-white font-medium  rounded text-base cursor-pointer'>
                {
                    result ? result : "Submit"
                }
            </button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
