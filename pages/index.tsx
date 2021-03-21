import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import {services} from '../data'

const index = (props) => {
  console.log(services)

  return (
    <div>
      <h1>Hello world</h1>
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
