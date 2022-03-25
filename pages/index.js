import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from './Sidebar'
import Hero1 from './hero1'
import Hero2 from './hero2'
import Hero3 from './hero3'
import Hero4 from './hero4'
import Hero5 from './hero5'
import Contact from './contact'
import Footer from './footer'
export default function Home() {
 

  return (
    <div>
      <Head>
        <title>Lucas Gonzalez de Queiroz</title>
        <meta name="Meu site pessoal" content="Desenvolvimento Full Stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      
      <Sidebar>
        <section className='Inicio'><Hero1/></section>
        <section style={{background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,244,246,1) 100%)'}} className='Sobre'><Hero2/></section>
        <section className='Habilidades'><Hero3/></section>
        <section style={{background: 'white'}} className='Education'><Hero4/></section>
        <section className='Projetos'><Hero5/></section>
        <section className='Contato'><Contact/></section>
        <footer><Footer/></footer>
      </Sidebar>
      
     </main> 
    </div>
  )
}
