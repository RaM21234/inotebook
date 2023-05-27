import React from 'react'
import Notes from './Notes'
import secure from "../images/secure.jfif";

const Tasks = () => {
  return (
    <div>

      <div class="container text-center border my-5 border-primary rounded">
        <div class="row my-5">
          <div class="col my-5 pt-5">



            <h1>We've designed our data center with security in mind</h1>
            <p>While you work, our servers automatically back up your critical data. So when accidents happen — if your computer crashes or gets stolen — you can be up and running again in seconds.Our data centers are protected with several layers of security to prevent any unauthorized access to your data.</p>
          </div>

          <div class="col ">
            <div style={{
              width: '500px',
              height: '400px',
              backgroundImage: `url(${secure})`,

            }}>
            </div>
          </div>
        </div>
      </div>

      <Notes />
    </div>
  )
}

export default Tasks

//saved notes are stored in this file 
