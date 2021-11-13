import React from "react";
import intents from "../../Assets/foerest-bg.jpg";
import stoyo from "../../Assets/StoYoCode.jpg";
import piggybank from "../../Assets/piggybank.jpg";
export default function Projects() {
    return (
        <section>
            <h1 className="col-4">My Projects</h1>
                <div className="center col-12">
                    <div className="stoyocode col-10"> 
                    <a href="https://stoyocode.herokuapp.com/">
                        <img alt="StoYo logo" src={ stoyo } width="300" height="300">StoYoCode Group Project</img>
                    </a>
                    </div>
                    <div className="intents col-10"> 
                    <a href="https://oconnor-chris.github.io/InTentsCamping/">
                        <img alt="Logo of woods" src={ intents } width="300" height="300">Intents Camping Group Project</img>
                    </a>
                    </div>
                    <div className="weather-app col-10"> 
                    <a href="https://budget-smart-app.herokuapp.com/">
                        <img alt="A piggy bank" src={ piggybank } width="150" height="70">Budget Tracker</img>
                    </a>
                    </div>
                </div>
        </section>
    )
}
