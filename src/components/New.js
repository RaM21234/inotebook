import React from 'react';
import AddNote from './AddNote';
import takenote from "../images/takenote.PNG";
import leftview from "../images/leftview.jfif";
import savednote from "../images/savednote.jfif";
import savednoteleft from "../images/savednoteleft.jpg";
import {
 Link
} from "react-router-dom";


const New = () => {
  return (
    <div>
      <div class="container text-center ">
        <div class="row my-5">
          <div class="col my-5 pt-5">


            <h1>Add Notes anytime and share them with your Colleagues</h1>
            <p>Be professional and start taking Notes! All notes are saved in our Cloud databases and you can access them anywhere at anytime ; just create an account and explore it yourself!</p>
          </div>

          <div class="col ">
            <div style={{
              width: '790px',
              height: '500px',
              backgroundImage: `url(${takenote})`,

            }}>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-start">
        <div class="row">
          <div class="col border border-dark">
            <AddNote />
          </div>

          <div class="col mx-5">
            <div style={{
              width: '499px',
              height: '550px',
              backgroundImage: `url(${leftview})`,

            }}>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center ">
        <div class="row my-5">


          <div class="col  ">
            <div style={{
              width: '420px',
              height: '400px',
              backgroundImage: `url(${savednote})`,

            }}>
            </div>
          </div>
          <div class="col my-5 pt-5">
            <h1>Access Notes by just a click! </h1>
            <div class="d-grid gap-2 col-6 mx-auto">
            <Link to="/task" class="btn btn-primary my-4" role="button">Saved Notes</Link>
              
              
            </div>
          </div>
          <div class="col my-5 pt-5">
            <div style={{
              width: '420px',
              height: '400px',
              backgroundImage: `url(${savednoteleft})`,

            }}>
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default New
//file for adding new note 