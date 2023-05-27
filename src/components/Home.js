import React from 'react'
import front_page from "../images/front_page.webp"
import front from "../images/front.webp"
import paperless from "../images/paperless.png"
import integrations from "../images/integrations.png"
import Footer from './Footer'
import {
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div >


      <div class="grid text-center">
        <div class="g-col-6">

          <div className=" my-4" style={{
            width: '1000px',
            height: '500px',
            backgroundImage: `url(${front_page})`,

          }}>

          </div>
          <div class="g-col-6">
            <h1>iNotebook - Notes on Cloud</h1>
            <h4>From staying on top of your to-dos to making your schedule work for you, iNotebook helps bring order to the chaos.</h4>
            
            <Link to="/new" class="btn btn-success" role="button">Add a Note</Link>

          </div>
        </div>


      </div>
      <div class="grid text-center">

        <div class="g-col-3 g-start-2">

          <div className=" my-4" style={{
            width: '1280px',
            height: '600px',
            backgroundImage: `url(${front})`,

          }}>

          </div>
          <div class="g-col-4 g-start-6">
            <h1>Dive into your day</h1>
            <h4>Your Notes shows you the information you need, when you need it, so you can start your day with a clear view and less stress.</h4>
          </div>

        </div>

      </div>

      <div class="grid text-center">
        <div class="g-col-3 g-start-2">
          <div className=" my-4" style={{
            width: '1200px',
            height: '750px',
            backgroundImage: `url(${paperless})`,

          }}></div>
        </div>
        <div class="g-col-4 g-start-6">
          <h1>Go paperless</h1>
          <h4>From instruction manuals and warranty information to boarding passes and receipts, relax knowing they’re always handy if you need them later.</h4>
        </div>
      </div>

      <div class="grid text-center">
        <div class="g-col-3 g-start-2">
          <div className=" my-4" style={{
            width: '1280px',
            height: '1000px',
            backgroundImage: `url(${integrations})`,

          }}></div>
        </div>
        <div class="g-col-4 g-start-6">
          <h1>Designed to fit your workflow</h1>
          <h4>iNotebook provides all sort of tools so you can be more productive from brainstorm to execution.</h4>
        </div>
      </div>
      <div className="container my-6">------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
          <Footer/>
    </div>
  )
}

export default Home;


//rafce snippet used