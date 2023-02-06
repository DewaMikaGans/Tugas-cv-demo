import Head from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>

    <title>Tugas cv</title>

      <header className="header">
        <h2 className="logo">
          <b>Mika</b>
        </h2>
        <nav className="navbar">
          <a href="#about">
            <b>About</b>
          </a>
          <a href="#project">
            <b>Project</b>
          </a>
          <a href="#skill">
            <b>Skill</b>
          </a>
          <a href="#resume">
            <b>Resume</b>
          </a>
          <a href="#contact">
            <b>Contact</b>
          </a>
        </nav>
      </header>

      <section className="banner">
        <div className="container">
          <div className="warp">
            <div className="tittle">
              <h1>Hi, I'm</h1>
              <h4>
                Dewa<span> Mika</span>
              </h4>
              <p>Newbie Front End Developer and UI/UX Designer</p>
              <a href="#about" className="btn">
                <b> More </b>
              </a>
              <a href="#about" className="btn2">
                <b> View </b>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-me">
            <img src="/about2.jpg"></img>
            <div className="about-text">
              <h2>
                <b>
                  About <span> Me</span>
                </b>
              </h2>
              <h5>
                <b>My Name is I Dewa Gede Widiatmika</b>
              </h5>
              <p>
                I'm from Indonesia and I have been study at SMK TI Global Badung<br></br>About 1 year. Besides that i'm a newbie <i>front end developer</i> and<br></br> <i>ui/ux designer</i>, i've designed several websites especially for
                mobile on figma.
              </p>
              <a href="https://instagram.com/dewaawidhi_?igshid=NDk5N2NlZjQ=" className="btn3">
                <b> Contact me </b>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="projek" id="project">
        <div className="container">
          <div className="tittle">
            <h2>
              <b>My Project</b>
            </h2>
          </div>

          <div className="card-content">
            <div className="ui-card">
              <img src="/post bold throne.jpg" />
              <div className="desc">
                <h3>Bold Throne</h3>
                <p>This website contains how to order an internet cafe room</p>
              </div>
            </div>
            <div className="ui-card">
              <img src="/post fth.jpg" />
              <div className="desc">
                <h3>Faith Industries</h3>
                <p>This website contains ways to order Faith Industries clothes</p>
              </div>
            </div>
            <div className="ui-card">
              <img src="post e kantin.jpg" />
              <div className="desc">
                <h3>Electronic kantin</h3>
                <p>This website contains ways to order food and drinks in the cafeteria digitally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skill" id="skill">
        <div className="inner">
          <div className="judul">
            <h3><b>My <span> Skills</span></b></h3>
          </div>

          <div className="container">
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/html.png" className="skill-icon"></img>
                </div>
                <h3>HTML</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus omnis? Ea, repellendus recusandae? Nihil rem esse accusamus quasi alias similique et nisi magnam cumque?</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/css.png" className="skill-icon"></img>
                </div>
                <h3>CSS</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus omnis? Ea, repellendus recusandae? Nihil rem esse accusamus quasi alias similique et nisi magnam cumque?</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/bootstrap.png" className="skill-icon"></img>
                </div>
                <h3>Bootstrap</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus omnis? Ea, repellendus recusandae? Nihil rem esse accusamus quasi alias similique et nisi magnam cumque?</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/figma.png" className="skill-icon"></img>
                </div>
                <h3>Figma</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus omnis? Ea, repellendus recusandae? Nihil rem esse accusamus quasi alias similique et nisi magnam cumque?</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/ps.png" className="skill-icon"></img>
                </div>
                <h3>Photoshop</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus omnis? Ea, repellendus recusandae? Nihil rem esse accusamus quasi alias similique et nisi magnam cumque?</p>
            </div>
            <div className="skill-box">
              <div className="skill-tittle">
                <div className="img">
                  <img src="/ils.png" className="skill-icon"></img>
                </div>
                <h3>Illustrator</h3>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, natus omnis? Ea, repellendus recusandae? Nihil rem esse accusamus quasi alias similique et nisi magnam cumque?</p>
            </div>
          </div>
        </div>
      </section>

      <a className="gotop" href="#">
        <b>Up</b>
      </a>
    </>
  );
}
