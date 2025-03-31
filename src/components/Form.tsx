import { useForm } from 'react-hook-form'
import {toast, Slide} from 'react-toastify'
import Error from './Error'
import { useUIStore } from "../store";



export default function Form() {
    const { register, handleSubmit, formState:{errors} } = useForm()
    const { buttonColor } = useUIStore();

    const showNoti = () =>{
        toast.success('Inicio de Sesión con éxito', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        });
    }
    return (
        <div className="w-full max-w-md mx-auto">

          <form 
                className="bg-white shadow-lg rounded-lg px-10 pt-5 pb-5 my-5"
                noValidate
                onSubmit={handleSubmit(showNoti)}
          >  
                <h2 className="font-semibold text-3xl text-center m-4">Inicio de Sesión</h2>
                <div className="my-5">
                    <label htmlFor="email" className="text-lg font-light mb-2 block">
                        Email 
                    </label>
                    <input  
                        id="email"
                        className="w-full p-3 bg-gray-300 rounded-xl"  
                        type="email" 
                        placeholder="Email de Registro" 
                        {
                            ...register('email', {
                                required: 'El email es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Email no válido'
                                }
                            })
                        }
                    />
                    {
                        errors.email && <Error>{errors.email.message?.toString()}</Error>
                    }
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="text-lg font-light mb-2 block">
                        Contraseña
                    </label>
                    <input  
                        id="password"
                        className="w-full p-3 bg-gray-300 rounded-xl"  
                        type="password" 
                        placeholder="Tu Contraseña" 
                        {
                            ...register('password', {
                                required: 'La contraseña es obligatoria',
                                minLength: {
                                    value: 6,
                                    message: 'La contraseña debe tener al menos 8 caracteres'
                                }
                            })
                        }
                    />
                    {
                        errors.password && <Error>{errors.password.message?.toString()}</Error>
                    }
                </div>
  
                <input
                        type="submit"
                        className={`${buttonColor} w-full p-3 rounded-xl text-white uppercase font-bold hover:opacity-80 cursor-pointer transition-all duration-300 transform hover:scale-105`}
                        value='Ingresar'
                />

          </form> 

          <input
                        type="submit"
                        className={`${buttonColor} w-full p-3 rounded-xl text-white uppercase font-bold hover:opacity-80 cursor-pointer transition-all duration-300 transform hover:scale-105`}
                        value='Registarme'
            />
        </div>

    )
}
