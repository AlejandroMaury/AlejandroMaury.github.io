import { Link } from 'gatsby';
import * as React from 'react'
import css from "../styles/style.css";
import Layout from '../components/layout'


export default function resume() {
    return (
        <>
            <Layout pageTitle="Resume">
                <p>Acá deberá ir la educación y experiencias laborales
                </p>

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

export const Head = () => <title>Resume</title>;
