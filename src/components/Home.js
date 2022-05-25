import React, { useEffect, useState } from "react";

function Home() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    let interval = setInterval(
      () =>
        fetch("https://api.quotable.io/random")
          .then((res) => res.json())
          .then((quote) => setQuote(quote)),
      10000
    );
    //destroy interval on unmount
    return () => clearInterval(interval);
  }, []);
  console.log(quote);
  return (
    <div className="homediv">
      <div className="intro">
        <p>Connect with the rest of the students Worldwide</p>
        <p>
          This is S-connect. We help you connect with other students
          across the globe from your house. <br />It’s that simple! All you have to do is to fill the form below and connect with other students in your area
        </p>
      </div>
      <div className="quote">
        <p>{quote.content}</p>
        <h5>{quote.author}</h5>
      </div>
    </div>
  );
}

export default Home;
