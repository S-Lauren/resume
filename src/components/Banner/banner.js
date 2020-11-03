import React from 'react';

const Banner = () => {
  const heart = `<3`
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2 >
            <div className="line">
              <span>Interactive Design is </span>
            </div>
            <div className="line">
              <span>what I {heart} to do. </span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">More about us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;