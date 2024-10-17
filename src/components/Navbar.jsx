import logo from "../assets/kevinRushLogo.png"
// import {FaLinkedin} from "react-icons/fa";
import {FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-6">
    
    {/* <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div> */}

    <div className="mx-2 w-20 h-20 flex items-center justify-center bg-neutral-800 text-white text-3xl rounded-full">
        JD
    </div>

    <div className="m-8 flex items-center justify-center gap-4 text-3xl">
    <a href="https://www.linkedin.com/in/jai-damani-1458aa226/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
    </a>
    <a href="https://github.com/JaiDamani" target="_blank" rel="noopener noreferrer">
        <FaGithub />
    </a>
    <a href="mailto:damani.jai73@gmail.com">
        <FaEnvelope />
      </a>
    </div>

  </nav>
  )
}

export default Navbar