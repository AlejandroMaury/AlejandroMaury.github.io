import { Link } from 'gatsby';
import * as React from 'react'
import css from "../styles/style.css";
import Layout from '../components/layout'


export default function about() {
  return (
    <>
      <Layout pageTitle="About">
        <p>Acá se pondra toda la descripción acerca de mi</p>

      </Layout>

      {/* <header >
        <Link className="vinculos" to="/">Home</Link>
      </header>
      <main>
        <div>
          <p>I'm a mechanical engineer, </p>
        </div>
      </main> */}
    </>
  );
}

export const Head = () => <title>About Me</title>;
