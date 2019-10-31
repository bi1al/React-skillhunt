import React from "react";
import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import Queries from "../Components/Queries";
import Newslatter from "../Components/NewsLatter";
import Footer from "../Components/Footer";

function BrowseJob() {
  //     const[curValue, setVlaue] = useState(0);

  //     const list = ['web', 'app', 'andriod'];
  //    const queries = (list) => {
  //             const x = list.map(el => {
  //               return  <Queries title={el}/>
  //              })
  //     }
  return (
    <>
      <Banner title="Browse Job" />

      <div className="Browse-parent">
        <div className="Browse-Wrapper">
          <div className="Browse-container">
            <div>
              <Featured title="Front-end Developer" time="Part Time" />
              <Featured title="Front-end Developer" time="Part Time" />
              <Featured title="Front-end Developer" time="Part Time" />
              <Featured title="Front-end Developer" time="Part Time" />
              <Featured title="Front-end Developer" time="Part Time" />
              <Featured title="Front-end Developer" time="Part Time" />
              <Featured title="Front-end Developer" time="Part Time" />
            </div>
          </div>

          {/* <Queries title={queries(list)}/> */}
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
      </div>

      <Newslatter />
      <Footer />
    </>
  );
}

export default BrowseJob;
