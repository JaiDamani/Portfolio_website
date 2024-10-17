// import {FaLinkedin} from "react-icons/fa";
import {FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-6">

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
      <a href="https://drive.google.com/file/d/1LiQxgVmz4kmNlEC8yFbZApmVRaUXrBJF/view?usp=sharing" className="mx-2 w-40 h-10 flex items-center justify-center bg-neutral-800 text-white text-xl rounded-full">
        My Resume
    </a>
    </div>
    

  </nav>
  )
}

export default Navbar