import * as React from "react"
import "./index.scss";
import logo1 from '../images/logo1.png';
import PopUp from "../components/PopUp/PopUp";
import PageHeader from "../components/PageHeader/PageHeader";
import PageFooter from "../components/PageFooter/PageFooter";
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  return (
    <div className="page-index text-center">
  <PageHeader/>

  <div className="container-fluid bg-2 text-center">
    <h3>What Am I?</h3>
    <p>Lorem ipsum..</p>
    <a href="#" className="btn btn-default btn-lg">
    <span className="glyphicon glyphicon-search"></span> Search
  </a>
  </div>
  <PageFooter/>
  <PopUp/>
  </div>
          
  )
}

export default IndexPage
