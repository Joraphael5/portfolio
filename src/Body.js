import React from "react";
import img0 from "./images/joseph.JPG";
import facebook from "./images/facebook.png";
import insta from "./images/insta.png";
import twitter from "./images/twitter.png";
import git from "./images/git.jpg";
import line from "./images/Vector 8.png";

const Body = () => {
  return (
    <div>
      <nav className="navbar px-5 navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <div className="port2">
              <img className="port1" src={img0} alt="" height={60} />
              &nbsp;&nbsp;&nbsp;
              <a>
                <p className="port3"> JOSEPH AWACHIE</p>
              </a>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href=""
              >
                Home
              </a>
              <a className="nav-link text-dark" href="">
                About
              </a>
              <a className="nav-link text-dark" href="">
                Projects
              </a>
              <a className="nav-link text-dark" href="">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* BODY 1 */}

      <div className="port4">
        <div className="port5 ">
          <h1>
            HEY, I'M JOSEPH RAPHAEL
            <br /> AWACHIE
          </h1>
          <p>
            A Frontend focused Web Developer building the Frontend of <br />
            Websites and Web Applications that leads to the success of the
            overall product
          </p>
          <button className=" btn1 btn btn-large text-dark btn-danger">
            PROJECTS
          </button>
        </div>
      </div>

      {/* BODY 2 */}

      <div className="port6">
        <a>
          <h1 className="port7">ABOUT ME</h1>
        </a>
        <p className="pt-2 port8">
          Here you will find more information about me, what I do, and my
          <br /> current skills mostly in terms of programming and technology
        </p>
      </div>

      {/* BODY 3 */}

      <div className="port9">
        <div className="port11">
          <a>
            <p className="port10"> Get to know me!</p>
          </a>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites
            <br /> and Web Applications that leads to the success of the overall
            <br /> product. Check out some of my work in the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            <br /> over the years in Web Development so it can help other people
            of
            <br /> the Dev Community. Feel free to Connect or Follow me on my
            <br /> <span>Social Medias</span> where I post useful content
            related to Web
            <br /> Development and Programming
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            <br /> grow. If you have a good opportunity that matches my skills
            and
            <br /> experience then don't hesitate to contact me.
          </p>
          <button className="btn1 btn btn-large text-dark btn-danger">
            PROJECTS
          </button>
        </div>
        <div className="port25">
          <a>
            <p className="port10 pt-5">My Skills</p>
          </a>
          <button className="btn2 btn bg-secondary">HTML</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn2 btn bg-secondary">CSS</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn2 btn bg-secondary">BOOTSTRAP</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn2 btn bg-secondary">JavaScript</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn2 btn bg-secondary">React</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          <button className="btn3 btn bg-secondary">GIT</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn3 btn bg-secondary">Github</button>
        </div>
      </div>

      <div className="port6">
        <a>
          <h1 className="port7">PROJECTS</h1>
        </a>
        <p>
          Here you will find some of the personal and clients projects that I
          <br /> created with each project containing its own case study
        </p>

        <h1 className="port12 pt-5">LOADING....!!</h1>
      </div>

      <div className="port14">
        <a>
          <h1 className="port7">CONTACT</h1>
        </a>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          <br /> back to you as soon as possible
        </p>

        <div className="port13">
          <form className="port17 p-2 " action="">
            <h6 className="pt-3 text-secondary">Name</h6>
            <input className="port15" type="text" placeholder="Name" name="" />
            <br />
            <br />

            <h6 className="pt-3 text-secondary"> Email Address</h6>
            <input
              className="port15"
              type="text"
              placeholder="Email Address"
              name=""
            />
            <br />
            <br />

            <h6 className="pt-3 text-secondary"> Message </h6>
            <input
              className="port16"
              type="text"
              placeholder="Enter your message"
              name=""
            />
            <br />
            <br />

            <button className="btn4 btn btn-lg bg-danger" type="button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <footer className="port18">
        <div className="port21">
          <div>
            <p className="port19 text-white p-4">SOCIAL</p>

            <div className="ps-3">
              <img src={facebook} alt="" height={15} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={insta} alt="" height={15} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={twitter} alt="" height={15} />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src={git} alt="" height={20} />
            </div>
          </div>

          <div>
            <p className="port19 text-white p-3 pt-5">JOSEPH AWACHIE</p>
            <p className="port20 text-white p-3">
              A Frontend focused Web Developer building the Frontend of
              <br /> Websites and Web Applications that leads to the success of
              the overall product
            </p>
          </div>
        </div>

        <div>
          <img className="port22" src={line} alt="" height={1} width={"100%"} />
        </div>

        <div>
          <p className="port23 text-white">
            {" "}
            Copyrights 2022. Made by{" "}
            <span className="port24">Joseph Awachie</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Body;
