import React from "react";
import Nav from './nav';
import Footer from './footer';
import Main from './main';
import Donate from './donate';
import Form from './form';
import Technical from './technical';
function App(){
    return(
        <div>    
            <Nav/>
            <Main/>
            <Form />
            <Technical />
            <Donate />
            <Footer />
        </div>
    );
}
export default App;
