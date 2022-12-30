import React from 'react';
import s from "./Works.module.css"
import ItemWork from "./ItemWork";
import   "../../App.css"

function Works() {
    return (
        <div className={`${s.wrapperWorks} + wrapper`}>
            <div className={`${s.works} + container`}>
                <h2>My Works</h2>
                <div className={s.description}>
                    <ItemWork title={"React"} description={"Made AP wietvdfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvh React"}
                                img={require("../../assets/svg/React.png")}/>
                    <ItemWork title={"JS"} description={"Made jkuttttttttttttttukyttttttttttttttttttttj,yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyttttttttttttttttttttttttttttttttttttAP with React"}
                                img={require("../../assets/svg/Js.png")}/>
                    <ItemWork title={"JS"} description={"Made jkuttttttttttttttukyttttttttttttttttttttj,yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyttttttttttttttttttttttttttttttttttttAP with React"}
                              img={require("../../assets/svg/Js.png")}/>

                </div>
            </div>
        </div>

    );
}

export default Works;