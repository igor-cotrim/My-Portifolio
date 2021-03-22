import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'

import {IProject, IService, ISkill} from './types'

export const services:IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Desenvolvimento front-end',
    about:
       'Posso construir um SPA bonito e escalável usando <b> HTML</b>,<b>CSS</b> e <b>React.js</b> ',
 },
 {
    Icon: FaServer,
    title: 'Desenvolvimento back-end',
    about:
       'Lidar com banco de dados, servidor, api usando <b> Express </b> e outras estruturas populares',
 },
 {
    Icon: AiOutlineApi,
    title: 'Desenvolvimento de API',
    about:
       'Posso desenvolver API REST robusta usando <b> API Node </b> e  <b> GraphQL </b>',
 },
 {
    Icon: AiOutlineAntDesign,
    title: 'Designer de UI/UX',
    about:
       'Designer de interface de usuário usando <b> Figma </b> e edição de fotos usando <b> Photoshop </b>',
 },
]

export const languages:ISkill[] = [
   {
      Icon: BsCircleFill,
      name: 'HTML/CSS',
      level: '95%',
   },
   {
      Icon: BsCircleFill,
      name: 'Javascript',
      level: '80%',
   },
   {
      Icon: BsCircleFill,
      name: 'Typescript',
      level: '50%',
   },
   {
      Icon: BsCircleFill,
      name: 'React ',
      level: '65%',
   },
   {
      Icon: BsCircleFill,
      name: 'Nextjs ',
      level: '45%',
   },
   {
      Icon: BsCircleFill,
      name: 'React Native',
      level: '60%',
   },
   {
      Icon: BsCircleFill,
      name: 'Java',
      level: '35%',
   },
]

export const tools:ISkill[] = [
   {
      Icon: BsCircleFill,
      name: 'Figma',
      level: '60%',
   },
   {
      Icon: BsCircleFill,
      name: 'Photoshop',
      level: '70%',
   },
   {
      Icon: BsCircleFill,
      name: 'OBS Studio',
      level: '80%',
   },
   {
      Icon: BsCircleFill,
      name: 'Git',
      level: '85%',
   },
]

export const projects:IProject[] = [
   {
      name: "COVID Tracker",
      description: "This app shows a statistical view about corona virus over the world",
      image_path: "/images/Netflix.png",
      deployed_url: "/",
      github_url: "/",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"]
   }, 
   {
      name: "COVID Tracker",
      description: "This app shows a statistical view about corona virus over the world",
      image_path: "/images/Netflix.png",
      deployed_url: "/",
      github_url: "/",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"]
   }, 
   {
      name: "COVID Tracker",
      description: "This app shows a statistical view about corona virus over the world",
      image_path: "/images/Netflix.png",
      deployed_url: "/",
      github_url: "/",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"]
   }, 
   {
      name: "COVID Tracker",
      description: "This app shows a statistical view about corona virus over the world",
      image_path: "/images/Netflix.png",
      deployed_url: "/",
      github_url: "/",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"]
   }, 
   {
      name: "COVID Tracker",
      description: "This app shows a statistical view about corona virus over the world",
      image_path: "/images/Netflix.png",
      deployed_url: "/",
      github_url: "/",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"]
   }, 
   {
      name: "COVID Tracker",
      description: "This app shows a statistical view about corona virus over the world",
      image_path: "/images/Netflix.png",
      deployed_url: "/",
      github_url: "/",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"]
   }, 
   {
      name: "COVID Tracker",
      description: "This app shows a statistical view about corona virus over the world",
      image_path: "/images/Netflix.png",
      deployed_url: "/",
      github_url: "/",
      category: ["react"],
      key_techs: ["React", "Chart.js", "Material UI"]
   }, 
]