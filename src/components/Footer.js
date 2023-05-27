import React from 'react';
import {
    Link
} from "react-router-dom";

function Footer() {
    return (
        <>

            <footer class="bg-dark text-center text-white ">

                <div class="container p-4">

                    <section class="mb-4">

                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-facebook-f"></i
                        ></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-twitter"></i
                        ></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-google"></i
                        ></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-instagram"></i
                        ></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-linkedin-in"></i
                        ></a>


                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-github"></i
                        ></a>
                    </section>

                    

                   

                    <section class="">

                        <div class="row">

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                

                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <Link to="/" class="text-white">Home</Link>
                                    </li>
                                 
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                               

                                <ul class="list-unstyled mb-0">
                                    <li>
                                    <Link to="/new" class="text-white">New Note</Link>
                                    </li>
                              
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            

                                <ul class="list-unstyled mb-0">
                                    <li>
                                    <Link to="/task" class="text-white">Saved Notes</Link>
                                    </li>
                                 
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                

                                <ul class="list-unstyled mb-0">
                                    <li>
                                    <Link to="/about" class="text-white">About Us</Link>
                                    </li>
                                   
                                </ul>
                            </div>

                        </div>

                    </section>

                </div>

                <div class="text-center p-3" >
                    © 2020 Copyright:
                    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>


        </>

    );
}

export default Footer;


