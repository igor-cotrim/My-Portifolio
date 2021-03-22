import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import {BsCircleFill} from 'react-icons/bs'

import {IService, ISkill} from './type'

export const services:IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
       'Posso construir um SPA bonito e escalável usando <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
 },
 {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
       'handle database, server, api using <b>Express </b> & other popular frameworks',
 },
 {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
       'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
 },
 {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about:
       'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
 },
 {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
       'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
 },
 {
    Icon: RiComputerLine,
    title: 'Whatever',
    about:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
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
   {
      Icon: BsCircleFill,
      name: 'Git',
      level: '80%',
   },
   {
      Icon: BsCircleFill,
      name: 'mySQL/MariaDB',
      level: '50%',
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
      name: 'OBS',
      level: '80%',
   },
]