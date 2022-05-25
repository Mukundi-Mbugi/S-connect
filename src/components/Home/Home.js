import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    let interval = setInterval(
      () =>
        fetch("https://api.quotable.io/random")
          .then((res) => res.json())
          .then((quote) => setQuote(quote)),
      5000
    );
    //destroy interval on unmount
    return () => clearInterval(interval);
  }, []);
  console.log(quote);

  return (
    <>
      <Navbar />
      <div className="homediv">
        <div className="homediv1">
          <div className="intro">
            <span className="connect">
              <p>
                Connect with the rest
                <br /> of the students <br />
                Worldwide!
              </p>
            </span>
            <p>
              <span className="description">
                This is S-connect. <br />
                We help you connect with other students
                <br />
                across the globe from your computer.
              </span>{" "}
              <br />
              <span className="simple">It’s that simple!</span>
            </p>
            <div className="ratings">
              <div>
                <h1>1M+</h1>
                <p>students connected</p>
              </div>
              <div>
                <h1>100%</h1>
                <p>Absolutely free</p>
              </div>
              <div>
                <h1>21</h1>
                <p>Fields and counting</p>
              </div>
            </div>
          </div>

          <div className="quote">
            <p>"{quote.content}"</p>
            <h5>~{quote.author}</h5>
            <div className="cover"></div>
          </div>
          {/* <div>
            <button className="start_btn">Get Started</button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
