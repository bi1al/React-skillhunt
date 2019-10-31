import React from "react";
import Banner from "../Components/Banner";
import Candidate from "../Components/Candidate";
import Person_1 from "../images/person_1.jpg";
import Person_2 from "../images/person_2.jpg";
import Person_3 from "../images/person_3.jpg";
import Person_4 from "../images/person_4.jpg";
import Person_5 from "../images/person_5.jpg";
import Person_6 from "../images/person_6.jpg";
import Queries from "../Components/Queries";
import Newslatter from "../Components/NewsLatter";
import Footer from "../Components/Footer";

function CondidatesPage() {
  return (
    <>
      <Banner title="Hire Your Best Candidates" />

      <div className="Candidate_wrapper">
        <div className="candidates-list">
          <Candidate img={Person_1} Name="Danica Lewis" />
          <Candidate img={Person_2} Name="Danica Lewis" />
          <Candidate img={Person_3} Name="Danica Lewis" />
          <Candidate img={Person_4} Name="Danica Lewis" />
          <Candidate img={Person_5} Name="Danica Lewis" />
          <Candidate img={Person_6} Name="Danica Lewis" />
        </div>

        <div className="Query_lists">
          <Queries
            title="Browse Category"
            val_1="Website & Software"
            val_2=" Education & Training"
            val_3=" Graphics Design"
            val_4=" Accounting & Finance"
            val_5=" Restaurant & Food"
            val_6="Health & Hospital"
          />

          <Queries
            title="Select Location"
            val_1=" Sydney, Australia"
            val_2="New york, United States"
            val_3=" Tokyo japan"
            val_4=" Manila, philippines"
            val_5=" Seoul, South Korea"
            val_6="Western city, UK"
          />

          <Queries
            title="Job Type"
            val_1="Part Time"
            val_2="Full Time"
            val_3="Internship"
            val_4="Freelance"
            val_5="Fixed"
            val_6="Temporary"
          />
        </div>
      </div>

      <Newslatter />
      <Footer />
    </>
  );
}

export default CondidatesPage;
