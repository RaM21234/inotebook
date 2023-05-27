import React from 'react';
import a from "../images/a.png";
//import b from "../images/b.webp";
//import c from "../images/c.jfif";
import d from "../images/d.jfif";
import { Link } from 'react-router-dom';

const About = () => {


  return (

    <div >
     
      <div className="container text-start  my-4">
        <h1>Meet our amazing Team</h1>
      </div>
      <div className="container text-start">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
      <div class="container text-center my-2">
        <div class="row row-cols-4">
          <div class="col ">
            <div className=" my-2" style={{
              width: '190px',
              height: '290px',
              backgroundImage: `url(${a})`,

            }}></div>
            <div className="container text-start">
              <h5>Brandon Shaw </h5>
              <p >Founder & CEO</p>
            </div>
          </div>

          <div class="col">
            <div className=" my-2" style={{
              width: '190px',
              height: '290px',
              backgroundImage: `url(${d})`,

            }}></div>
            <div className="container text-start">
              <h5>Floyd Stephens </h5>
              <p >Chief Technology Officer</p>
            </div>
          </div>
          <div class="col">
            <div className=" my-2" style={{
              width: '190px',
              height: '290px',
              backgroundImage: `url(${a})`,

            }}></div>
            <div className="container text-start">
              <h5>Kate Clarke </h5>
              <p >Director of People</p>
            </div>
          </div>
          <div class="col">
            <div className=" my-2" style={{
              width: '190px',
              height: '290px',
              backgroundImage: `url(${d})`,

            }}></div>
            <div className="container text-start">
              <h5>Eunice Doyle </h5>
              <p >Software Engineer</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div className=" my-2" style={{
              width: '190px',
              height: '290px',
              backgroundImage: `url(${a})`,

            }}></div>
            <div className="container text-start">
              <h5>Virginia Anguilar </h5>
              <p >Software Engineer</p>
            </div>
          </div>

          <div class="col">
            <div className=" my-2" style={{
              width: '190px',
              height: '290px',
              backgroundImage: `url(${d})`,

            }}></div>
            <div className="container text-start">
              <h5>Roger Dawson </h5>
              <p >Software Engineer</p>
            </div>
          </div>
          <div class="col">
            <div className=" my-2" style={{
              width: '190px',
              height: '290px',
              backgroundImage: `url(${a})`,

            }}></div>
            <div className="container text-start">
              <h5>Deckerd Brown </h5>
              <p >Software Engineer</p>
            </div>
          </div>
          <div class="col">
            <div className=" my-2" style={{
              width: '190px',
              height: '290px',
              backgroundImage: `url(${d})`,

            }}></div>
            <div className="container text-start">
              <h5> Shawn Mendes </h5>
              <p >Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-start">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
      
      <div class="container text-start my-5">
        <div class="row row-cols-2">
          <div class="col ">
          <h1 className="">Join our Team</h1>
          </div>
          <div class="col ">
            <p >We believe it takes great people to make a great product. That's why we hire not only the perfect professional fits, but people who embody our company values.</p>
            <div className="container"><Link to='/' >See open positions</Link></div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default About;


//rafce snippet used
// text-start ==> right alingment
// text-end ==> left alingment