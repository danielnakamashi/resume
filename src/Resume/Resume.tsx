import React from "react";
import "./Resume.scss";

const Resume: React.FC = () => {
  return (
    <>
      <div className="resume sheet">
        <header>
          <h1>
            Daniel
            <br />
            Nakamashi
          </h1>
          <h2>Senior front-end engineer</h2>
        </header>
        <main>
          <section>
            <article>
              <h3>Profile</h3>
              <p>
                With strong experience in web technologies, I've started my
                career as a fullstack developer and in recent years, I've worked
                mainly with front-end.
              </p>
              <p>
                In the last 16 years I've followed all the evolution of web
                development and learned the technologies related to it like
                JavaScript, React, Redux, Typescript, Node.js, TDD, CI/CD, some
                bundler libraries, Rest and GraphQL API, etc.
              </p>
            </article>
          </section>
          <section>
            <h3>Employment History</h3>
            <article>
              <span className="place">Germany</span>
              <h4>Senior Frontend Engineer, Auto1 Group</h4>
              <p className="date">Oct 2019 - Present</p>
              <div>
                <p>
                  Multi-step form using React, Apollo, CSS Modules, React Hooks
                  Form.
                </p>
                <p>
                  Admin and main website using React, Redux/Effector,
                  Flow/Typescript, REST API, and Emotion together with a
                  micro-frontend architecture.
                </p>
                <p>
                  The most challenging part of this job is understanding all the
                  business rules involved in it. Another challenge is to
                  communicate with other frontend engineers, which are in other
                  teams but share the same codebase, to adopt good solutions for
                  all since each one has slightly different necessities and
                  problems to solve.
                </p>
              </div>
            </article>
            <article className="no-border">
              <span className="place">Brazil</span>
              <h4>Senior Software Engineer, Agile Content, S.A.</h4>
              <p className="date">Jul 2013 – Sep 2019</p>
              <div>
                <p>
                  Project using Node.js for data migration from an external
                  platform to our infrastructure. I've built the project as a
                  monorepo infrastructure with lerna.js and TypeScript using TDD
                  approach.
                </p>
                <p>
                  I've built the structure of an SSR React application, before
                  Next.js and other frameworks existed, and worked at the
                  front-end building components and orchestrating to make all
                  the technologies work together.
                </p>
              </div>
            </article>
          </section>
        </main>
        <aside>
          <h3>Info</h3>
          <ul>
            <li>
              <h4>Address</h4>
              <p>Berlin, Germany</p>
            </li>
            <li>
              <h4>Phone</h4>
              <p>+49 151 29495531</p>
            </li>
            <li>
              <h4>E-mail</h4>
              <p>dnakamashi@gmail.com</p>
            </li>
          </ul>
          <h3>Skills</h3>
          <ul className="progress-list">
            <li>
              <h4>JavaScript</h4>
              <progress value="10" max="10">
                10
              </progress>
            </li>
            <li>
              <h4>React</h4>
              <progress value="10" max="10">
                10
              </progress>
            </li>
            <li>
              <h4>Typescript</h4>
              <progress value="9" max="10">
                9
              </progress>
            </li>
            <li>
              <h4>Redux</h4>
              <progress value="9" max="10">
                9
              </progress>
            </li>
            <li>
              <h4>GraphQL</h4>
              <progress value="8" max="10">
                8
              </progress>
            </li>
            <li>
              <h4>TDD</h4>
              <progress value="9" max="10">
                9
              </progress>
            </li>
          </ul>
        </aside>
      </div>
      <div className="resume resume-headerless sheet">
        <main>
          <section>
            <article>
              <div>
                <p>
                  Technologies used: React, Webpack, Hot Module Replacement,
                  Styled Components, Material UI, Apollo, GraphQL, Code
                  Splitting, and Babel.
                </p>
                <p>
                  I've also made an ticket seller iOS application in Swift which
                  gave me some experience with mobile development.
                </p>
                <p>
                  I've done some applications for Windows 8 and Xbox One in
                  JavaScript.
                </p>
              </div>
            </article>
            <article>
              <span className="place">Brazil</span>
              <h4>Fullstack Developer, Wunderman</h4>
              <p className="date">Sep 2010 – Jul 2013</p>
              <div>
                <p>
                  I've built several websites of famous brands like Microsoft,
                  Nestlé, TAM and others, from the HTML to the Database. The
                  stack usually was composed by HTML, JavaScript, CSS, jQuery,
                  ASP.NET/PHP and SQLServer/MySQL.
                </p>
              </div>
            </article>
            <article>
              <span className="place">Brazil</span>
              <h4>Fullstack Developer, E-midia</h4>
              <p className="date">Oct 2007 – Sep 2010</p>
              <div>
                <p>
                  I've worked on high-traffic websites building new features and
                  maintaining the existing ones. The back-end was composed of
                  PHP and MySQL.
                </p>
              </div>
            </article>
          </section>
          <section>
            <h3>Education</h3>
            <article>
              <h4>FATEC, Associate</h4>
              <p>Aug 2004 – Jun 2008</p>
            </article>
          </section>
        </main>
        <aside>
          <h3>Languages</h3>
          <ul className="progress-list">
            <li>
              <h4>Portuguese</h4>
              <progress value="10" max="10">
                10
              </progress>
            </li>
            <li>
              <h4>English</h4>
              <progress value="8" max="10">
                8
              </progress>
            </li>
            <li>
              <h4>Spanish</h4>
              <progress value="4" max="10">
                4
              </progress>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Resume;
