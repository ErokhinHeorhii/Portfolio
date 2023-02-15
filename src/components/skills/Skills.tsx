import React from 'react';
import s from "./Skills.module.css"
import ItemSkills from "./ItemSkills";
import "../../App.css"
import {Title} from "../../common/components/title/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGit, faReact} from '@fortawesome/free-brands-svg-icons'
import  {Zoom} from "react-awesome-reveal";


function Skills() {
    return (
        <div className={`${s.wrapperSkills} + wrapper`} id="mySkills">
            <div className={`${s.skills} + container`}>
                <Title title={"My Skills"}/>
                <div className={s.description}>
                    <Zoom delay={200}  triggerOnce={true}>
                    <ItemSkills title={"React"} description={'Library for SPA'}>
                        <FontAwesomeIcon icon={faReact} className={s.icon}/>
                    </ItemSkills>
                    <ItemSkills title={"Redax"} description={'Redux store management'}
                                img={require("../../assets/svg/Redux.png")}/>
                    <ItemSkills title={"JavaScript"} description={'Native programming language'}
                                img={require("../../assets/svg/Js.png")}/>
                        <ItemSkills title={"TypeScript"} description={'Strongly typed programming language'}
                                    img={require("../../assets/svg/typescript.png")}/>
                    <ItemSkills title={"Html/Css"} description={'Hypertext Markup Language'}
                                img={require("../../assets/svg/Html.png")}/>
                    <ItemSkills title={"Scss"} description={'Preprocessor for CSS'}
                                img={require("../../assets/svg/scss-svgrepo-com.png")}/>
                    <ItemSkills title={"Git"} description={'Version control system'}>
                        <FontAwesomeIcon icon={faGit} className={s.icon}/>
                    </ItemSkills>
                        </Zoom>
                </div>
            </div>
        </div>

    );
}

export default Skills;