import React, { useEffect, useState } from "react";
import "../../css/radiopage.css";
import Img from "../../Common/Img";
import { Link } from "react-router-dom";

const Radiopage = () => {
  const [radio, setRadio] = useState([]);
  const [loding, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const radiodata = async () => {
      try {
        const res = await fetch(
          "https://radio-and-podcast.nepalipatro.com.np/api/public/radio/v2/web-radios?sort_by=asc"
        );
        console.log("Test", res);
        if (res.ok) {
          const data = await res.json();
          console.log("API Response:", data);

          if (Array.isArray(data)) {
            setRadio(data);
          } else {
            console.error("Expected an array but got:", data);
            setError("Unexpected data format");
          }
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.log("Error", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    radiodata();
  }, []);

  if (loding) return <p>Loading...</p>;
  if (error) {
    <p>Error:{error}</p>;
  }
  if (!Array.isArray(radio) || radio.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <>
      <div className="banner-wrapper">
          <div className="paramarsh-banner">
              <img src="https://images.pexels.com/photos/1137511/pexels-photo-1137511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="banner-img" />
          </div>
          <div className="pramash-content" style={{width: 'auto'}}>
              <div className='page-content'>
                  <h1>Mero Calendar Radio</h1>
                  <Link to="/">Go Back Home</Link> <span> / Mero Calendar Radio</span>
              </div>
          </div>
      </div>
      <div className="container">
        <div className="bg-color border-radius position-relative" style={{marginTop: "-2rem", zIndex: "1"}}>
          <div className="row">
            {radio.map((radioapidata) => (
              <Link to="" className="col-lg-2 rounded mb-4 mt-4">
                <div className="grid items-center text-center">
                  <div className="radio-img">
                    <Img src={radioapidata.image} alt="radioimg" />
                  </div>
                  <div className="radio-title">
                    <p>{radioapidata.station_name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Radiopage;
