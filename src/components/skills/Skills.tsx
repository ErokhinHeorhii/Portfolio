import React from 'react';
import s from "./Skills.module.css"
import ItemSkills from "./ItemSkills";
import   "../../App.css"
import {Title} from "../../common/components/title/Title";

function Skills() {
    return (
        <div className={`${s.wrapperSkills} + wrapper`} id="mySkills">
            <div className ={`${s.skills} + container`} >
                <Title title={"My Skills"}/>
                <div className={s.description}>
                    <ItemSkills title={"React"} description={"Made API with React"}
                                img={require("../../assets/svg/React.png")}/>
                    <ItemSkills title={"Js"} description={"Made API with React"}
                                img={require("../../assets/svg/Js.png")}/>
                    <ItemSkills title={"Html/Css"} description={"Made API with React"}
                                img={require("../../assets/svg/Html.png")}/>
                </div>
            </div>
        </div>

    );
}

export default Skills;