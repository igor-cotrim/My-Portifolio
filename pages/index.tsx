// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import {services} from '../data'
import ServiceCard from '../src/components/ServiceCard'

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Desenvolvedor dedicado com muita vontade de
        aprender e crescer. Tenho experiência em Javascript,
        HTML/CSS e React, programando varias aplicações
        como Clones de diversos sites famosos e aplicações
        maiores como as desenvolvidas na Next Level Week.
        Com foco em desenvolvimento Web, vi no React uma
        ótima ferramenta para fazer aplicações.
      </h5>
      <div className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-300" style={{marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
        <h6 className="my-4 text-xl font-bold tracking-wide">O que eu posso fazer:</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map(service => (
            <div className="bg-gray-100 dark:bg-dark-100 rounded-lg lg:col-span-1">
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
