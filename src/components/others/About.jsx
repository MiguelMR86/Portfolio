import React from 'react'
import Logo from './Logo'
import TalentusLogo from "./TalentusLogo";

function About() {
  const skills = "{ aptitudes++; skills++; }";

  return (
    <div id="about" className="w-full min-h-screen">
      <div className="flex flex-col gap-y-4 p-4 text-center">
        <h2 className="font-bold text-3xl py-4 text-[--second]">Sobre Mí</h2>
        <div className="md:flex md:justify-evenly md:items-center w-full">
          <article className="md:w-1/2 max-w-[500px] mx-auto xl:max-w-[600px]  h-full flex flex-col gap-y-8 text-left md:leading-[1.7]">
            <p>
              Soy un desarrollador Junior con ganas de incrementar mis actitudes
              y aptitudes. <br />
              {skills}
            </p>

            <p>
              Realicé mis prácticas en Polonia, con en el proyecto Erasmus, de
              mi centro educativo, el cual tuvo un entorno ideal para aprender
              sobre trabajo en equipo y la organización del trabajo. Además,
              tuve la oportunidad de trabajar en proyectos en despliegue y de
              participar como asistente de SEO.
            </p>

            <p>
              En la FP Superior de Desarrollo de Aplicaciones Web, me
              familiaricé con lenguajes, como pueden ser Javascript o PHP, así
              como frameworks y librerías como React o Laravel, entre otras.
              También amplié mis conocimientos en gestores de bases de datos
              como MySQL, SQLite y MariaDB.
            </p>

            <p>
              Por otro lado amplié mis conocimientos con Express, el cual fue de
              gran utilidad para asentar mis conocimientos en REST API. Además
              de frameworks como TypeScript, el cual ha sido de gran importancia
              para entender mejor la estructura de código y para la mejora en
              las técnicas de programación.{" "}
            </p>
          </article>
          <Logo />
        </div>
      </div>

      <div className="min-h-screen md:flex md:justify-evenly md:flex-row-reverse items-center w-full m-auto">
        <article className="md:w-1/2 max-w-[500px] mx-auto xl:max-w-[600px]  h-full flex flex-col gap-y-8 text-left md:leading-[1.7]">
          <p>
            Actualmente, he comenzado una nueva etapa como Desarrollador
            Fullstack en Talentus. ¿Que es Talentus? Un portal de formación
            online, que oferta cursos con certificación.
          </p>
          <p>
            ¿Cuáles son mis responsabilidades en la plataforma?, principalmente
            es el desarrollo de nuevas funcionalidades, así como realizar
            mantenimiento, dando soporte a los usuarios. Por otro lado, las
            tecnologías con las que trabajo; para el front-end TypeScript, React
            y TailwindCSS y para el back-end Python y Django. Además, también
            cuanto con un equipo de trabajo muy competente, con el que aprendo y
            me desarrollo cada día.
          </p>

          <p>
            Estoy muy contento empezar esta nueva etapa y formar parte de este
            proyecto, ya que se me ha dado la oportunidad de trabajar en un
            entorno muy profesional y saludable, en el que puedo desarrollarme
            de forma laboral y personal.
          </p>
        </article>
        <TalentusLogo />
      </div>
    </div>
  );
}

export default About