import React from "react";

export default function Projects() {
    return (
        <section>
            <h1 className="col-4">My Projects</h1>
                <div className="center col-12">
                    <div className="stoyocode col-10"> 
                    <a href="https://stoyocode.herokuapp.com/">
                        <img alt="StoYo logo" src="../../../../public/Assets/StoYoCode.png" width="300" height="300"/>
                        StoYoCode Project
                    </a>
                    </div>
                    <div className="intents col-10"> 
                    <a href="https://oconnor-chris.github.io/InTentsCamping/">
                        <img alt="Logo of woods" src="../../../../public/Assets/forest.jpg" width="300" height="300"/>
                        InTents Capming Project
                    </a>
                    </div>
                    <div className="weather-app col-10"> 
                    <a href="https://budget-smart-app.herokuapp.com/">
                        <img alt="A piggy bank" src="../../../../public/Assets/piggybank.jpg" width="150" height="70"/>
                        Budget Smart App
                    </a>
                    </div>
                </div>
        </section>
    )
}
