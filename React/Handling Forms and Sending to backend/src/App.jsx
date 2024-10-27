import { useForm} from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors,isSubmitting},
  }=useForm();
  // const delay=(d)=>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve()
  //     },d*1000)
  //   })
  // }

  const onSubmit= async (data)=>{
    let res=await fetch("http://localhost:3000/",{method:"POST", body:JSON.stringify(data),headers: { "Content-Type": "application/json" }})
    let result=await res.text()
    console.log(data,result);
  }
  return (
    <>
    {isSubmitting&&<div>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)} className='form-container'>
        <input type="text" {...register("Username",{required:{value:true, message:"Username is required"},minLength:{value:3,message:"The min length of characters is 3"},maxLength:{value:8,message:"The max length of characters is 8"}})} placeholder='Username' />
        {errors.Username && <span className='red'>{errors.Username.message}</span>}
        <input type="password" {...register("Password")} placeholder='Password' />
        <input disabled={isSubmitting} type="submit" />
      </form>
    </>
  )
}

export default App
