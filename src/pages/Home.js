import React from 'react';

const Home = () => {
  const paraStyle = {
    fontSize: '1.35rem',
    fontWeight: '400',
    marginBottom: '2.25rem',
    lineHeight: '1.25em',
  };

  return (
    <div className="main-container">
      <h2 className="page-title">
        Welcome to our page!
      </h2>
      <p style={paraStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis placeat vero, ratione, molestiae modi obcaecati reprehenderit similique,
        architecto asperiores dicta quod ducimus beatae quo
        at voluptatibus possimus hic voluptas ab.
      </p>
      <p style={paraStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis placeat vero, ratione, molestiae modi obcaecati reprehenderit similique,
        architecto asperiores dicta quod ducimus beatae
        quo at voluptatibus possimus hic voluptas ab.
      </p>
    </div>
  );
};

export default Home;
