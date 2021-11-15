import React from "react";


 function Projects() {
    return (
        <div className="container" style={{borderWidth: 3, borderColor: "red", borderStyle: "solid"}}>
            <h1 style={{ textAlign: 'center' }} className="col-4">My Projects</h1>
            <div style={{ marginTop: 30 }} className="card-deck row">
                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="./Assets/StoYoCode.png" alt="StoYoCode logo" />
                    <div className="card-body">
                        <h5 className="card-title">StoYoCode</h5>
                        <p className="card-text">StoYoCode is a developer tool for easily storing code snippets and images.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://stoyocode.herokuapp.com/">See it here</a></p>
                    </div>
                </div>

                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="./Assets/forest-bg.jpg" alt="Forest backdrop" />
                    <div className="card-body">
                        <h5 className="card-title">InTents Camping</h5>
                        <p className="card-text">InTents Camping was intended to be a phone app for hikers to locate the nearest campground.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://oconnor-chris.github.io/InTentsCamping/">See it here</a></p>
                    </div>
                </div>

                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="./Assets/piggybank.jpg" alt="A piggy bank" />
                    <div className="card-body">
                        <h5 className="card-title">Budget Smart</h5>
                        <p className="card-text">An app for tracking finances even if the user is offline.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://budget-smart-app.herokuapp.com/">See it here</a></p>
                    </div>
                </div>

                <div className="card col-sm-12 col-md-3">
                    <img className="card-img-top" src="./Assets/fitTracker.png" alt="A homepage for the app" />
                    <div className="card-body">
                        <h5 className="card-title">Fitness Tracker</h5>
                        <p className="card-text">An app for keeping track of workouts and charting progress.</p>
                    </div>
                    <div className="card-footer">
                        <p><a href="https://floating-fjord-46165.herokuapp.com/">See it here</a></p>
                    </div>
                </div>

                
                   
            </div>
        </div>
    )
}

export default Projects;
