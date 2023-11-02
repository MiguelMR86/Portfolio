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
                            <BiLogoHtml5 size={40} className="w-1/2 text-[#f16529]"/>
                            <DiCss3 size={40} className="w-1/2 text-[#2465f1]"/>
                            <TbBrandJavascript size={40}  className="w-1/2 text-[#f7e025]"/>
                            <BiLogoTypescript size={40} className="w-1/2 text-[#377cc8]"/>
                            <BiLogoReact size={40} className="w-1/2 text-[#0c9fcb]"/>
                            <FaVuejs size={40} className="w-1/2 text-[#47ba87]"/>
                            <BiLogoTailwindCss size={40} className="w-1/2 text-[#38bdf8]"/>
                            <FaBootstrap size={35} className="w-1/2 text-[#7952b3]"/>
                        </div>
                    </div>
                    <div className="bg-[--third] w-[300px] h-[400px] rounded-md">
                        <h1 className="text-2xl h-1/6 grid place-items-center">Back-end</h1>
                        <div className="w-full h-5/6 p-4 flex flex-wrap justify-center">
                            <FaNodeJs size={40} className="w-1/2 text-[#93c745]"/>
                            <BiLogoFirebase size={40} className="w-1/2 text-[#ffcd33]"/>
                            <SiExpress size={40} className="w-1/2"/>
                            <GrDocker size={40} className="w-1/2 text-[#0db7ed]"/>
                            <LiaPhp size={40} className="w-1/2 text-[#7b7fb5]"/>
                            <GrMysql size={40} className="w-1/2 text-[#08668e]"/>
                            <BiLogoPython size={40} className="w-1/2 text-[#3776ab]"/>
                            <FaLaravel size={40} className="w-1/2 text-[#ff2d20]"/>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default skills;
