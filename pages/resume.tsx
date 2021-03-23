import {motion} from 'framer-motion'

import { languages, tools } from "../data"
import Bar from "../components/Bar"
import {fadeInUp, routeAnimation} from "../animations"

const resume = () => {
  return (
    <motion.div 
      className="p-6 py-2"
      variants={routeAnimation} 
      initial="initial" 
      animate="animate"
      exit="exit"
    >
      {/* education e exp  */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Formação</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Bacharelado em Sistemas de Informação</h5>
            <p className="font-semibold">Instituto Federal de Educação, Ciência e Tecnologia da Bahia - IFBA (2018-2022)</p>
            <p className="my-3">
              Na faculdade aprendo a logica de programação, fundamentos da linguagem Java fazendo aplicações funcinais.
              Aprendo tambem sobre empreendedorismo e gestão para ter uma mentalidade empreendedora.
              Sou Diretor de Projetos Fundador da BTech (empresa junior do curso de Sistemas de Informação).
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experiências</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Estágio em Desenvolvimento ReactNative/React</h5>
            <p className="font-semibold">Prefeitura de Vitoria da Conquista (mar. de 2021 - o momento)</p>
            <p className="my-3">
              Desenvolvimento de aplicativo de educação para auxilar alunos com o ensino remoto da rede municipal da cidade de Vitoria da Conquista.
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">Freelancer</h5>
            <p className="font-semibold">Evolker Tecnologia (jan. de 2021 - fev. de 2021)</p>
            <p className="my-3">
              Desenvolvi sites responsivos com HTML, CSS e Javascript e
              desenvolvi sites em wordpress, fazendo o layout, dando manutenção
            </p>
          </div>
        </motion.div>
      </div>

      {/* languaages e tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Linguagens & Frameworks</h5>
          <div className="my-2">
            {languages.map(language => (
              <Bar data={language} key={language.name}/>
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Ferramentas & Softwares</h5>
          <div className="my-2">
            {tools.map(tool => (
              <Bar data={tool} key={tool.name}/>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default resume
