import * as React from "react"
import "./index.scss";
import PageHeader from "../components/PageHeader/PageHeader";
import PageBody from "../components/PageBody/PageBody";
import PageFooter from "../components/PageFooter/PageFooter";

// markup
const IndexPage = () => {
  return (
    <div className="page-index">
  <PageHeader/>
  <PageBody/>
  <PageFooter/>
  </div>
          
  )
}

export default IndexPage
