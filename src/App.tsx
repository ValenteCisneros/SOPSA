import { FiUser } from "react-icons/fi";
import Form from "./components/Form"
import { useUIStore } from "./store";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  const { bgColor, setBgColor, setButtonColor } = useUIStore();

  const handleThemeChange = (bg: string, button: string) => {
    setBgColor(bg);
    setButtonColor(button);
  };

  return (
    <div className= {`min-h-screen flex flex-col items-center ${bgColor} transition-colors duration-500`}>
      <img src="logo.png" alt="Logo SSTEC" className="h-20 m-10" />
      <div className="flex gap-3 justify-center my-1">
        <button className="p-2 rounded-2xl bg-[#56B3E4] text-white cursor-pointer flex flex-col items-center gap-1 transition-all duration-300 transform hover:scale-105 hover:bg-[#4c9cc7]" onClick={() => handleThemeChange("bg-[#8dd3f7]", "bg-[#56B3E4]")}>
          <FiUser className="text-5xl" />
          <span className="text-xl">Estudiante</span>
        </button>
        <button className="p-2 rounded-2xl bg-[#951EAD] text-white cursor-pointer flex flex-col items-center gap-1 transition-all duration-300 transform hover:scale-105 hover:bg-[#7b178a]" onClick={() => handleThemeChange("bg-[#BB58CF]", "bg-[#951EAD]")}>
          <FiUser className="text-5xl" />
          <span className="text-xl">Servicio Social</span>
        </button>
        <button className="p-2 rounded-2xl bg-[#00AD8C] text-white cursor-pointer flex flex-col items-center gap-1 transition-all duration-300 transform hover:scale-105 hover:bg-[#00896f]" onClick={() => handleThemeChange("bg-[#3BD3B6]", "bg-[#00AD8C]")}>
          <FiUser className="text-5xl" />
          <span className="text-xl">OSF</span>
        </button>
      </div>
      <Form></Form>
      <ToastContainer/>
    </div>
  )
}

export default App
