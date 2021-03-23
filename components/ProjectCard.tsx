import { FunctionComponent, useState } from "react"
import { motion } from "framer-motion"
import Image from 'next/image'
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import {MdClose} from "react-icons/md"

import { IProject } from "../types"
import { fadeInUp, stagger } from "../animations"

const ProjectCard:FunctionComponent<{project: IProject}> = ({
  project:{
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs
  }
}) => {
  const [showDetail, setShowDetail] = useState(false)

  function openDetailsProject(){
    setShowDetail(true)
  }

  function closeDetailsProject(){
    setShowDetail(false)
  }

  return (
    <div>
      <Image 
        src={image_path} 
        alt={name} 
        className="cursor-pointer" 
        onClick={openDetailsProject} 
        layout="responsive"
        width="300" 
        height="150"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Image 
                src={image_path} 
                alt={name}  
                layout="responsive"
                width="300" 
                height="150"
              />  
            </motion.div>
            <motion.div className="flex justify-center my-4 space-x-3" variants={fadeInUp}>
              <a 
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub/> <span>Github</span>
              </a>
              <a 
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject/> <span>Projeto</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
            <motion.h3 className="mb-3 font-medium" variants={fadeInUp}>{description}</motion.h3>

            <motion.div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider" variants={fadeInUp}>
              {key_techs.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 my-1 bg-gray-200 rounded-lg dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        
          <button 
            onClick={closeDetailsProject} 
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
