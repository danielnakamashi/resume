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
                Very strong experience in web technologies, I started my career
                as a fullstack developer and in recent year worked mainly with
                front-end.
              </p>
              <p>
                In the last 10 years I followed all the evolution of web
                development and learned the technologies related to it like
                JavaScript, React, Redux, Typescript, Node.js, TDD, CI/CD, some
                bundler libraries, Rest and GraphQL API, etc.
              </p>
            </article>
          </section>
          <section>
            <h3>Employment History</h3>
            <article>
              <span className="place">Berlin</span>
              <h4>Senior Frontend Engineer, Auto1 Group</h4>
              <p className="date">Oct 2019 - Present</p>
              <div>
                <p>
                  Responsible mainly for a feature that allows users to evaluate
                  their cars through a multi-step form. The stack is composed of
                  React, Apollo, CSS Modules, React Hooks Form.
                </p>
                <p>
                  Also responsible for some components in admin and main website
                  related to auctions. The stack is composed of React, Effector
                  (state manager), Flow/Typescript, REST API, and Emotion. We
                  also use a micro-frontend approach.
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
                  In the last project I worked there I used Node.js to do the
                  migration of data from an external platform to our
                  infrastructure. I build the project as a monorepo
                  infrastructure with lerna.js and TypeScript using TDD
                  approach.
                </p>
                <p>
                  In a previous project, I build the structure of an SSR React
                  application and worked at the front-end building components
                  and orchestrating to make all the technologies work in harmony
                  together.
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
                  I also made an iOS application in Swift for a ticket seller
                  company which gave me some experience with mobile development.
                </p>
                <p>
                  And I did some applications for Windows 8 and Xbox One in
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
                  Build several websites of famous brands like Microsoft,
                  Nestlé, TAM and others, since the HTML to the Database. The
                  stack usually was composed by HTML, JavaScript, CSS, jQuery,
                  ASP.NET MVC, PHP, MySQL and SQLServer.
                </p>
              </div>
            </article>
            <article>
              <span className="place">Brazil</span>
              <h4>Fullstack Developer, E-midia</h4>
              <p className="date">Oct 2007 – Sep 2010</p>
              <div>
                <p>
                  I worked on high-traffic websites like CyberCook and
                  VilaMulher building new features and maintaining the existing
                  ones. The back-end was composed of PHP and MySQL.
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
