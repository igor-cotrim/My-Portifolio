import { RiComputerLine ,RiSmartphoneLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'

import {IProject, IService, ISkill} from './types'

export const services:IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Desenvolvimento front-end',
    about:
       'Posso construir um SPA bonito e escalável usando <b> HTML</b>, <b>CSS</b>, <b>React</b> e <b>Nextjs</b>',
 },
 {
    Icon: RiSmartphoneLine,
    title: 'Desenvolvimento Mobile',
    about:
       'Posso construir Aplicativos bonitos e funcionais com <b>React Native</b> e <b>Expo</b',
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
    title: 'Designer de UI',
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
      id: 1,
      name: "Netflix Clone",
      description: "Clone da pagina inicial da Netflix feita com React. Usando a API externa da Themoviedb.org para obeter as informações dos filmes/series.",
      image_path: "/images/clone-netflix.jpg",
      deployed_url: "https://compassionate-gates-d0fd73.netlify.app",
      github_url: "https://github.com/igor-cotrim/CloneNetflix",
      category: ["react"],
      key_techs: ["React", "Javascript", "Material UI"]
   }, 
   {
      id: 2,
      name: "Twitter Clone",
      description: "Clone da home do Twitter feita com React. Fiz esse clone para testar meus conhecimentos com React e começar a utilizar Typescript nas minhas aplicações. Alem de usar o CSS-in-JS com o styled-components.",
      image_path: "/images/clone-twitter.jpg",
      deployed_url: "https://eager-williams-888ae7.netlify.app",
      github_url: "https://github.com/igor-cotrim/Clone-Twitter",
      category: ["react"],
      key_techs: ["React", "Typescript", "Styled-components", "Styled-icons"]
   }, 
   {
      id: 3,
      name: "Layout Pizza",
      description: "Esse layout fiz para treinar meus conhecimentos sobre HTML, CSS e Javascript. 😉😎",
      image_path: "/images/projeto-pizza.jpg",
      deployed_url: "https://sad-yalow-404851.netlify.app",
      github_url: "https://github.com/igor-cotrim/ProjetoPizza",
      category: ["HTML/CSS/JS"],
      key_techs: ["CSS", "HTML", "Javascript"]
   }, 
   {
      id: 4,
      name: "Move-it",
      description: "Um pomodoro feito com nextjs. Fiz essa aplicação durante a Next Level Week e foi aqui que aprendi o poder que o nextjs tem!",
      image_path: "/images/move-it.jpg",
      deployed_url: "https://moveit-umber-eta.vercel.app",
      github_url: "https://github.com/igor-cotrim/move-it",
      category: ["nextjs"],
      key_techs: ["React", "Nextjs", "Typescript"]
   }, 
   {
      id: 5,
      name: "Github Clone",
      description: "Clone da home do Github feita com React. Fiz essa aplicação para treinar meus conhecimentos com React e Typescript. Usando a API do Github para puxar alguns dados como, followers, following, repositories, empresa, cidade, contato e foto. Um darkMode (clique no icone do Github e veja a magica acontecer!) e se pode pesquisar por usuário ou repositórios.",
      image_path: "/images/clone-github.jpg",
      deployed_url: "https://flamboyant-raman-0e5b0f.netlify.app",
      github_url: "https://github.com/igor-cotrim/Clone-Github",
      category: ["react"],
      key_techs: ["React", "Typescript", "Styled-components", "React-icons", "Date-fns", "History" ]
   }, 
   {
      id: 6,
      name: "Github Whatsapp",
      description: "Clone do chat do Whatsapp feita com React. Fiz essa aplicação para treinar meus conhecimentos com React e Javascript. O maior desafio nessa aplicação foi integrar com o firebase, uma ferramenta que nunca tinha mexido. Lendo documentações e dando muito google consegui! Ps: Não consegui fazer o deploy por causa do firebase, mas logo logo estará ai. 😄",
      image_path: "/images/clone-whatsapp.jpg",
      github_url: "https://github.com/igor-cotrim/Whatsapp-Clone",
      category: ["react"],
      key_techs: ["React", "Javascript", "Material-icons", "Firebase"]
   }, 
   {
      id: 7,
      name: "Spotify Clone",
      description: "Clone da home do Spotify feita com React. Fiz essa aplicação para treinar meus conhecimentos com React e Javascript. Essa aplicação foi um grande desafio para mim porque além de usar o firebase (que não sabia muito bem usar) e ainda consumir a API do Spotify. Ficou uma aplicação estática podendo implementar muitas funcionalidades futuramente, deixando mais linda e com funcionalidades. Ps: Não consegui fazer o deploy por causa do firebase, mas logo logo estará ai. 😄",
      image_path: "/images/clone-spotify.jpg",
      github_url: "https://github.com/igor-cotrim/Clone-Spotify",
      category: ["react"],
      key_techs: ["React", "Javascript", "Material-ui", "API Spotify"]
   }, 
   {
      id: 8,
      name: "Layout Awax",
      description: "Esse layout fiz para treinar meus conhecimentos sobre HTML, CSS e Javascript. 😉😎",
      image_path: "/images/awax.jpg",
      deployed_url: "https://quirky-easley-7097c8.netlify.app",
      github_url: "https://github.com/igor-cotrim/Awax",
      category: ["HTML/CSS/JS"],
      key_techs: ["CSS", "HTML", "Javascript"]
   }, 
   {
      id: 9,
      name: "Javascript Training",
      description: "Um repositório com varias aplicações usando JavaScript Vanilla HTML e CSS so para treinar meus conhecimentos 😉",
      image_path: "/images/javascript-training.png",
      github_url: "https://github.com/igor-cotrim/Javascript-Training",
      category: ["HTML/CSS/JS"],
      key_techs: ["CSS", "HTML", "Javascript"]
   }, 
   {
      id: 10,
      name: "Ecoleta",
      description: "Ecoleta - é uma forma de conectar empresas e entidades que fazem a coleta de resíduos orgânicos e inorgânicos a pessoas que precisam destinar seus resíduos de forma ecológica. Foi feito durante a NLW (Next Level Week) uma semana de muitos conhecimentos e mão na massa! Nessa semana tive contato com muitas tecnologias e foi de grande valia para minha carreia. Obrigado Rocketseat!",
      image_path: "/images/ecoleta.jpg",
      github_url: "https://github.com/igor-cotrim/Ecoleta",
      category: ["react", "node", "mobile"],
      key_techs: ["React", "Express", "Typescript", "Axios", "Expo", "SQlite"]
   }, 
   {
      id: 11,
      name: "Proffy",
      description: "Proffy - é uma forma de conectar alunos e professores em uma plataforma de estudos online. Foi feito durante a NLW (Next Level Week) uma semana de muitos conhecimentos e mão na massa! Nessa semana tive contato com muitas tecnologias e foi de grande valia para minha carreia. Obrigado Rocketseat!",
      image_path: "/images/proffy.jpg",
      github_url: "https://github.com/igor-cotrim/Proffy",
      category: ["react", "node", "mobile"],
      key_techs: ["React", "Express", "Typescript", "Axios", "Expo", "SQlite"]
   }, 
]