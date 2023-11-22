import React, { Component } from "react";
import { BiLogoReact } from "react-icons/bi";
import { FaVuejs } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoHtml5 } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { LiaPhp } from "react-icons/lia";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPython } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";

export class skills extends Component {
    render() {
        return (
            <div
                id="skills"
                className="relative w-full min-h-screen flex flex-col gap-y-4 p-4 text-center mb-[8em]">
                <h2 className="font-bold text-3xl py-4 text-[--second]">Habilidades</h2>
                <article className="w-full h-full flex flex-col justify-center items-center gap-y-8 text-left md:flex-row md:justify-evenly md:absolute md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] ">
                    <div className="bg-[--third] w-[300px] h-[400px] rounded-md">
                        <h1 className="text-2xl h-1/6 grid place-items-center">Front-end</h1>
                        <div className="w-full h-5/6 p-4 flex flex-wrap justify-center">
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://developer.mozilla.org/es/docs/Web/HTML">
                                    <BiLogoHtml5 size={40} className=" text-[#f16529]" title="Html"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://developer.mozilla.org/es/docs/Web/CSS">
                                    <DiCss3 size={40} className=" text-[#2465f1]" title="Css"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                                    <TbBrandJavascript size={40}  className="text-[#f7e025]" title="Javascript"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://www.typescriptlang.org/">
                                    <BiLogoTypescript size={40} className="text-[#377cc8]" title="Typescript"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://es.reactjs.org/">
                                    <BiLogoReact size={40} className="text-[#0c9fcb]" title="React"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://vuejs.org/">
                                    <FaVuejs size={40} className="text-[#47ba87]" title="Vue"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://tailwindcss.com/">
                                    <BiLogoTailwindCss size={40} className="text-[#38bdf8]" title="Tailwindcss"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://getbootstrap.com/">
                                    <FaBootstrap size={35} className="text-[#7952b3]" title="Bootstrap"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[--third] w-[300px] h-[400px] rounded-md">
                        <h1 className="text-2xl h-1/6 grid place-items-center">Back-end</h1>
                        <div className="w-full h-5/6 p-4 flex flex-wrap justify-center">
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://nodejs.org/es/">
                                    <FaNodeJs size={40} className="text-[#93c745]" title="NodeJs"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://firebase.google.com/">
                                    <BiLogoFirebase size={40} className="text-[#ffcd33]" title="Firebase"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://www.php.net/">
                                    <LiaPhp size={40} className="text-[#7b7fb5]" title="Php"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://laravel.com/">
                                    <FaLaravel size={40} className="text-[#ff2d20]"  title="Laravel"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://expressjs.com/es/">
                                    <SiExpress size={40} className=""  title="Laravel"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://www.docker.com/">
                                    <GrDocker size={40} className="text-[#0db7ed]" title="Docker"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://www.mysql.com/">
                                    <GrMysql size={40} className="text-[#08668e]" title="Mysql"/>
                                </a>
                            </div>
                            <div className="w-1/2 grid place-items-center">
                                <a href="https://www.python.org/">
                                    <BiLogoPython size={40} className="text-[#3776ab]" title="Python"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default skills;
