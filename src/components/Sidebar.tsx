import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'

const Sidebar = () => {
  return (
    <div>
      <img 
        src="https://avatars.githubusercontent.com/u/50390408?s=460&u=fa3dad860e7be785755894c2c7f4cbd20ac4b1b0&v=4" 
        alt="user Avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-marker">Igor Cotrim</h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a 
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" 
        href="" 
        download="name"
      >
        <GiTie className="w-6 h-6"/>
        Download Resume
      </a>

      {/* Social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-indigo md:w-full">
        <a href="https://github.com/igor-cotrim" target="_blank">
          <AiFillGithub className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="https://www.linkedin.com/in/igorcotrim/" target="_blank">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
        </a>
      </div>
      {/* address */}
      <div className="py-4 my-5 bg-gray-200" style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Vitoria da Conquista, BA - Brasil</span>
        </div>
        <p className="my-2">igorcotrim.dev@gmail.com</p>
        <p className="my-2">+55 (77)9 9188-0997</p>
      </div>
      {/* email button */}
      <button 
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo to-gray-900 tex focus:outline-none"
        onClick={() => window.open('mailto: igorcotrim.dev@gmail.com')}
      >
        Entre em Contato
      </button>
      <button 
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-indigo to-gray-900 tex"
        onClick={() => {}}
      >
        Mudar o Tema!
      </button>
    </div>
  )

}

export default Sidebar
