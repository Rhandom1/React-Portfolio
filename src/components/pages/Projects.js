import React from "react";

export default function Projects() {
    return (
        <section>
            <h1 class="col-4">My Projects</h1>
                <div class="center col-12">
                    <div class="stoyocode col-10"> 
                    <a href="https://stoyocode.herokuapp.com/">
                        <img alt="StoYo logo" src="../../Assets/StoYoCode.png" width="300" height="300">StoYoCode Group Project</img>
                    </a>
                    </div>
                    <div class="intents col-10"> 
                    <a href="https://oconnor-chris.github.io/InTentsCamping/">
                        <img alt="Logo of woods" src="../../Assets/forest-bg.jpg" width="300" height="300">Intents Camping Group Project</img>
                    </a>
                    </div>
                    <div class="weather-app col-10"> 
                    <a href="https://budget-smart-app.herokuapp.com/">
                        <img alt="A piggy bank" src="../../Assets/piggybank.jpg" width="150" height="70">Budget Tracker</img>
                    </a>
                    </div>
                </div>
        </section>
    )
}
