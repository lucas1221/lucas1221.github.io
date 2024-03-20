import React from "react";
import Socials from "../Socials";
import Link from "next/link";
//import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contato</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              Vamos Trabalhar
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              Juntos
            </h1>
            
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Feito por{" "}
        <Link href="https://www.lucasdequeiroz.com.br">
          <a className="underline underline-offset-1">Lucas G. de Queiroz</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
