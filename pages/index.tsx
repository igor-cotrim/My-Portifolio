// import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import { motion } from "framer-motion";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const index = ({ endpoint }) => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Desenvolvedor Web | portfolio</title>
      </Head>
      <h5 className="my-3 font-medium">
        Olá, meu nome é Igor 😀 e atualmente estou cursando Sistemas de
        Informação no IFBA de Vitória da Conquista - Bahia. 📖 Entusiasta de
        tecnologia e a procura de novos desafios, busco conectar pessoas,
        problemas e conseguir soluções, em constante aprendizado para criar
        inovações que ajudem a sociedade como um todo. Meus maiores objetivos
        são alcançar um bom desenvolvimento pessoal e profissional como
        Desenvolvedor Web 💻, por acreditar que os dois caminham juntos, além de
        sempre querer que meu trabalho seja o veículo para melhorar a vida de
        outras pessoas de alguma forma, por isso mantenho o foco no negócio e
        não apenas em gerar código. Para alcançar meus objetivos é preciso
        esforço e dedicação, com isso em mente, busco me esforçar todos os dias
        porque sei que melhorando 1% ao dia, todos os dias, a longo prazo é a
        garantia do meu sucesso. O aprendizado é contínuo! 🚀
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-300"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-4 text-xl font-bold tracking-wide">
          O que eu posso fazer:
        </h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="bg-gray-100 rounded-lg dark:bg-dark-100 lg:col-span-1"
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};

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
