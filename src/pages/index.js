import css from "../styles/style.css";
import * as classes from "./index.module.css"
import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image";
/* iconos */
import { FaEnvelopeSquare } from '@react-icons/all-files/fa/FaEnvelopeSquare';
import { FaIdCard } from '@react-icons/all-files/fa/FaIdCard';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiNodeDotJs } from '@react-icons/all-files/si/SiNodeDotJs';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';
import { SiPython } from '@react-icons/all-files/si/SiPython';
import { GrMysql } from '@react-icons/all-files/gr/GrMysql';
import { FaGit } from '@react-icons/all-files/fa/FaGit';






const IndexPage = () => {
  return (
    <>

      <Layout pageTitle="Alejandro Arango" >
        <div>

          <title className="heading">


          </title>
        </div>
        <p className="description">Loving the programing world, and Mechanical Engineer in my alter life </p>
        <div >
          <ul className="socialMedias">
            <li className="socialMediaLink">
              <Link to="https://github.com/AlejandroMaury" target="blank"><FaGithubSquare /></Link>
            </li>
            <li className="socialMediaLink">
              <Link to="https://www.linkedin.com/in/ingalejandroarangomaury/" target="blank"><FaLinkedin /></Link>
            </li>
            <li className="socialMediaLink">
              <Link to="https://github.com/AlejandroMaury"><FaEnvelopeSquare /></Link>
            </li>
            <li className="socialMediaLink"></li>
          </ul>
        </div>


        <div className="apps">
          <h3>some technologies  </h3>
          <ul className="technologies">
            <li className="technologie"><SiHtml5 /></li>
            <li className="technologie"><SiCss3 /></li>
            <li className="technologie"><FaGit /></li>
            <li className="technologie"><SiJavascript /></li>
            <li className="technologie"><SiReact /></li>
            <li className="technologie"><SiTypescript /></li>
            <li className="technologie"><SiNodeDotJs /></li>
            <li className="technologie"><SiPython /></li>
            <li className="technologie"><GrMysql /></li>
          </ul>
        </div>





      </Layout>


    </>
  );
}

export const Head = () => <title>Alejandro Arango</title>

export default IndexPage
