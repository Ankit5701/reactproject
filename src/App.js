import './App.css';
import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './Components/About';
import ContactForm from './Components/Mailer';
import Mailer from './Components/Mailer';


function App() {
  return (
    <>
      <Router>
      <Header />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <div className='flex-parent-element'>
        <div className='flex-3'><MDBAnimation type='fadeIn' three>
          <MDBContainer>
            <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
              <MDBCardTitle><strong>Hii My Name Is Ankit</strong></MDBCardTitle>
              <MDBCardText>
                I am glad to have you here.
              </MDBCardText>
              <div className="flex-row">
                <MDBAnimation type='bounce' once> <Link to="/about">Start Exploring</Link></MDBAnimation>

              </div>
            </MDBCard>

          </MDBContainer></MDBAnimation>
        </div>
        <div className='flex-child-element' >
          <img src={process.env.PUBLIC_URL + "mypic.png"} id="pic"></img>
        </div>

      </div>
              </>
            )
          }}>
            
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/mailer">
            <Mailer />
          </Route>
        </Switch>

      

        
      


      <Footer />
      </Router>

    </>














  );
}

export default App;