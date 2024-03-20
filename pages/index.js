import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Typing from 'react-typing-animation';

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };


  useIsomorphicLayoutEffect(() => {
    // Animação para o cabeçalho
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  
    // Animação para a seção de trabalho
    stagger(
      [workRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  
    // Animação para a seção sobre
    stagger(
      [aboutRef.current],
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, []);
  
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);
  
  const roles = ['Full-Stack', 'Mobile', 'Front-end', 'Back-End'];

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 highlight"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 text-red-400"
            >
             {startAnimation && (
              
          <Typing loop speed={100}>
            <Typing.Backspace count={30} />
            <span>Desenvolvedor Full-Stack</span>
            <Typing.Delay ms={50} />
            <Typing.Backspace count={30} />
            <Typing.Delay ms={80} />
            <span>Desenvolvedor Mobile</span>
            <Typing.Delay ms={80} />
            <Typing.Backspace count={30} />
            <Typing.Delay ms={80} />
            <span>Desenvolvedor Front-End</span>
            <Typing.Delay ms={80} />
            <Typing.Backspace count={30} />
            <Typing.Delay ms={80} />
            <span>Desenvolvedor Back-End</span>
            <Typing.Delay ms={80} />
            <Typing.Backspace count={30} />
          </Typing>
        )}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold"></h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-5xl text-bold"><span className="highlight3">Habilidades e Conhecimentos</span></h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0 w-full" ref={aboutRef}>
         <h1 className="tablet:m-10 text-6xl text-bold text-center"><span className="highlight3">Sobre Mim</span></h1>
          {data.aboutpara.split('\n').map((para, index) => (
            <p key={index} className="tablet:m-10 mt-2 text-xl laptop:text-3xl">
              {para.split(' ').map((word, i) => {
                const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
                if (['Flutter', 'Node', 'Vue', 'React', 'Native', 'Java', 'Python', 'PostgreSQL', 'NestJS', 'ElementUI', 'TypeORM', 'Vue3', 'Azure', 'DevOps', 'Git', 'Scrum', 'Superset', 'Orchest', 'WordPress', 'FlaskApp', 'Machine', 'Learning', 'NoSQL'].includes(cleanWord)) {
                  return <span key={i} className="bg-yellow-500 rounded underline">{word}</span>;
                } else {
                  return word;
                }
              }).reduce((prev, curr, i) => {
                return [...prev, i > 0 && ' ', curr];
              }, [])}
            </p>
          ))}
        </div>


        <Footer />
      </div>
    </div>
  );
}
