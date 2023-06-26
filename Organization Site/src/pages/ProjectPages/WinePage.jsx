import React from 'react';
import './ProjectPages.css';
import NavBar from "../../partials/Nav Bar/NavBar";
import Footer from "../../partials/Footer Section/Footer";
import {Link} from "react-router-dom";

const WinePage = () => {
    return (
            <section className="WinePage flex flex-col min-h-screen overflow-hidden">
                <NavBar/>
                {/*  Page content */}
                <main className="grow">

                    <section className="Details-panel-section" id="Details">
                        <div className="grow main-container">
                            <h1 className="WineArt-title">Wine Art</h1>
                            <div className="WineArt-type">WEB APPLICATION</div>
                            <div className="left-title-details"><h1>Details</h1></div>

                            <div className="tab-panel">
                                    <input type="radio" name="slider" id="overview" defaultChecked/>
                                    <input type="radio" name="slider" id="tech" />
                                    <input type="radio" name="slider" id="deployment"/>
                                    <input type="radio" name="slider" id="security"/>
                                    <input type="radio" name="slider" id="legal"/>

                                <nav>
                                    <label htmlFor="overview" className="overview">Overview</label>
                                    <label htmlFor="tech" className="tech">Tech Stack</label>
                                    <label htmlFor="deployment" className="deployment">Deployment</label>
                                    <label htmlFor="security" className="security">Security</label>
                                    <label htmlFor="legal" className="legal">Legal Compliance</label>
                                    <div className="slider"></div>
                                </nav>
                                <section className="tab-content">
                                    <div className="content content-1">
                                        <div className="tab-title">Overview</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis delectus dolorem esse excepturi id ipsam maxime minima modi natus quae quisquam quo recusandae, sed sequi temporibus tenetur, totam voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias cumque deserunt distinctio doloremque dolorum minus necessitatibus numquam obcaecati placeat!</p>
                                    </div>

                                    <div className="content content-2">
                                        <div className="tab-title">Tech Stack</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias cumque deserunt distinctio doloremque dolorum minus necessitatibus numquam obcaecati placeat!</p>
                                    </div>

                                    <div className="content content-3">
                                        <div className="tab-title">Deployment</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias cumque deserunt distinctio doloremque dolorum minus necessitatibus numquam obcaecati placeat!</p>
                                    </div>

                                    <div className="content content-4">
                                        <div className="tab-title">Security</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur autem consequuntur culpa cupiditate deleniti dicta explicabo fuga hic id in, laboriosam natus, neque pariatur quisquam tempore veritatis vero? Aliquam dignissimos dolores eos est laudantium modi perferendis praesentium tempora totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias cumque deserunt distinctio doloremque dolorum minus necessitatibus numquam obcaecati placeat!</p>
                                    </div>

                                    <div className="content content-5">
                                        <div className="tab-title">Legal Compliance</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, deserunt distinctio fugiat fugit harum illum ipsam numquam quia veritatis voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias cumque deserunt distinctio doloremque dolorum minus necessitatibus numquam obcaecati placeat!</p>
                                    </div>
                                </section>
                            </div>

                        </div>


                    </section>

                    <section className="Client-feedback-section" id="Client-feedback">

                        <div className="project-section-text">
                            <div className="project-section-title">Client <span className="grey"> Feedback </span></div>
                        </div>
                    </section>


                </main>

                {/*  Site footer */}
                <Footer />
            </section>

    );
};

export default WinePage;
