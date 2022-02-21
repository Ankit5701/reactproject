import React from 'react';
import {  MDBCard, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
         <MDBFooter color="cyan lighten-2" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="footerhead"><strong>Ankit Patle</strong></h5>
            <p className='footerhead'>
              <strong>Online CV | Portfolio</strong>
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="footerhead1"><strong>&emsp;&ensp;Links</strong></h5>
            <ul>
              <li className="list-unstyled">
              <h6 className="footerhead1"> <Link to="/about"><strong>My Profile</strong></Link></h6>
              </li>
              <li className="list-unstyled">
              <h6 className="footerhead1">  <Link to="/mailer"><strong>Connect With Me</strong></Link></h6>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.ankitpatle.ml"> ankitpatle.ml </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  )
}
