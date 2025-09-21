import React from "react";
import "../../css/holiday.css";
import { SidebarOnly } from "../../Component/SidebarOnly";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Newsdiv from "../../Component/Newsdiv";
import NepaliBlogdiv from "../../Component/NepaliBlogdiv";

const Holiday = () => {
  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-3">
            <SidebarOnly />
          </div>
          <div className="col-lg-9 centerdiv">
            <div className="centerdivtopitem">
              <div className="">
                  <div className="bg-color mb-3">
                    <div className="Holiday_page mb-3">
                  <h6>NEPALI TO ENGLISH DATE CONVERTER</h6>

                    <Link to="/">
                      <button>
                        <IoIosArrowBack />
                        Back to calendar
                      </button>
                    </Link>
                    </div>
                    <select className="form-control">
                    <option>2081</option>
                    <option>2082</option>
                    <option>2083</option>
                    </select>
                  </div>

                {/* {Holidaypagedata.map((data, key) => (
                  <div className="holiday_info">
                    <h6>{data.Title}</h6>
                    <p>{data.About}</p>
                  </div>
                ))} */}

                {/* <Calendardowndiv /> */}
                <Newsdiv />
                <NepaliBlogdiv />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holiday;
