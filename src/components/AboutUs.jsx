import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import Volunteer from "./volunteer";
import Reply from "./reply"
import Projects from "./projects"
function AboutUs() {
    return(
        <div>
            <Nav />
            <Volunteer />
            <Projects/>
            <Reply />
            <Footer />
        </div>
    )
}
export default AboutUs;