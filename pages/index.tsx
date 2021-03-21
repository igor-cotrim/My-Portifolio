// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import {services} from '../data'
import ServiceCard from '../src/components/ServiceCard'

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Sou aluno do bacharelado em Sistemas de Informação 🎓 pelo Instituto Federal da Bahia - IFBA 🏛.
        Sou um aluno apaixonado que está sempre disposto a aprender e trabalhar com tecnologias e domínios 💡.
        Adoro explorar novas tecnologias e tirar proveito delas para resolver problemas da vida real ✨.
        Atualmente estou trabalhando em Desenvolvimento Web 🕸️ e sempre querendo melhorar!
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-400" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-3 text-xl font-bold tracking-wide">O que eu ofereço:</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(service => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1">
              <ServiceCard service={service}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (context:GetServerSidePropsContext) => {
//   //calculation
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
  
//   return {
//     props:{
//       services: data.services,
//     },
//   }
// }

// export const getStaticProps = async (context:GetStaticPropsContext) => {
//   //calculation
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
  
//   return {
//     props:{
//       services: data.services,
//     },
//   }
// }
