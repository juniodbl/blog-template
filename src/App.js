import React from 'react';
import Footer from './structure/Footer';
import Tags from './structure/Tags';
import PopularPosts from './structure/PopularPosts';
import About from './structure/About';
import Posts from './structure/Posts';
import Header from './structure/Header';

function App() {
  return (
    <React.Fragment>
      <div className="w3-content" style={{ maxWidth: '1400px' }}>
        <Header />

        <div className="w3-row">
          <Posts />

          <div className="w3-col l4">
            <About />
            <PopularPosts />
            <hr />
            <Tags />
          </div>
        </div><br />
      </div >
      <Footer />
    </React.Fragment>
  );
}

export default App;