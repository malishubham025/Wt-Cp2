import React from "react";
import Nav from './nav';
import Footer from './footer';
import Main from './main';
import Projects from './projects';
import Volunteer from './volunteer';
import Donate from './donate';
import Reply from './reply';
import Form from './form';
import Technical from './technical';
function App(){
    return(
        <div>
                
   <Nav/>
   <Main/>
   <Form />
	 <Technical />
   <Projects/>
   <Donate />
   <Volunteer />
   <Reply />
   <Footer />
   
  </div>
    );
}
export default App;