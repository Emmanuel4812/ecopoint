import { useForm } from 'react-hook-form';
import axios from 'axios';
import router, {useRouter} from 'next/router';
import NavbarInner from '../components/NavbarInner';
import Footer from './Footer';
//import Header from '../components/Header';



export default function Contacto() {
  const {register, handleSubmit, errors, reset} = useForm();
  
  async function onSubmitForm(values){
    let config = {
      method: 'post',
      url:`${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers:{
        'Content-Type':'application/json',
      },
      data:values,
    }

    try {
      const response = await axios(config);
      console.log(response);
      if(response.status === 200){
        reset()
        router.push("/");
      }
    } catch (error) {
      console.log(error)
    }

    
  }

  

  return (
      <div>
            <NavbarInner/>
          
            <div className="b py-16 bg-greenEco px-4 sm:px-6 h-screen w-screen flex justify-center items-center pt-32">
            
            <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 shadow ">
                <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="grid grid-cols-1 gap-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">
                        Full name
                    </label>
                    <input
                    type="text"
                    name="name"
                    ref={register({
                        required:{
                        value: true,
                        message: 'You must enter your name'
                        },
                    })}              
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2
                    ${errors.name ? 'ring-2 ring-red-500' :null}`}
                    placeholder="Full name"
                    />
                    <span className='text-red-400 text-sm py-2'>
                    {errors?.name?.message}
                    </span>
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">
                    Email
                    </label>
                    <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    ref={register({
                        required:{
                        value: true,
                        message: 'You must enter your email address'
                        },
                        minLength:{
                        value: 8,
                        message: 'This is not long enough to be an email'
                        },
                        maxLength:{
                        value: 120,
                        message: 'This is too long'
                        },
                        pattern:{
                        value:"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
                        message:"This needs to be a valid email address"
                        }
                    })}
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2
                    ${errors.email ? 'ring-2 ring-red-500' :null}`}
                    />
                    <span className='text-red-400 text-sm py-2'>
                    {errors?.email?.message}
                    </span>           
                </div>
                <div>
                    <label htmlFor="phone" className="sr-only">
                    Phone
                    </label>
                    <input
                    type="text"
                    name="phone"
                    ref={register}
                    className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
                    placeholder="Phone"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">
                    Message
                    </label>
                    <textarea
                    name="message"
                    rows="4"
                    ref={register({
                        required: {
                        value: true,
                        message:"You need to enter your message"
                        },
                        maxLength:{
                        value: 1000,
                        message:"Your message can??t be more than 1000 characters",
                        },
                        minLength: {
                        value: 50,
                        message: "Your message must be longer than this!"
                        }
                    })}
                    className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2
                    ${errors.message ? 'ring-2 ring-red-500' :null}`}
                    
                    placeholder="Message"></textarea>
                    <span className='text-red-400 text-sm py-2'>
                    {errors?.message?.message}
                    </span>
                </div>
                <div>
                    <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-greenEco hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
            <Footer/>
      </div>
    
  );
}
