import React from 'react'

const Aside = () => {
  return (
    <div className='side-col'>
        {/* Side About */}
        <div className="about">
            <div id="img"></div>
            <div className="about-text">
                <h4>Name</h4>
                <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
            </div>
        </div>

        {/* Trend Posts */}
        <div className="popular-posts">
          <div className="header">
            <h3>Popular Posts</h3>
          </div>
          <div className="content">
            <div id="thumbnail"></div>
            <div className="post-details">
              <h4>Post Name</h4>
              <p>Just me, myself and I</p>
            </div>
          </div>

          <div className="content">
            <div id="thumbnail"></div>
            <div className="post-details">
              <h4>Post Name</h4>
              <p>Just me, myself and I</p>
            </div>
          </div>

          <div className="content">
            <div id="thumbnail"></div>
            <div className="post-details">
              <h4>Post Name</h4>
              <p>Just me, myself and I</p>
            </div>
          </div>
        </div>

        {/* Advertise */}
        <div className="advertise">
          <div className="advertise-head">
            <h4>Advertise</h4>
          </div>
          <div className="advertise-body">
            <div className="actual-ad">
              <p>Your AD here</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="tags">
          <div className="tags-head">
            <h4>Tags</h4>
          </div>
          <div className="tags-body">
            <span>Food</span>
            <span>Vegetables</span>
            <span>Fruits</span>
            <span>Fruits</span>
            <span>Fruits</span>
            <span>Deserts</span>
          </div>
        </div>

        {/* Inspiration */}
        <div className="inspiration">
          <div className="inspiration-head">
            <h4>Inspiration</h4>
          </div>
          <div className="inspiration-body">
            <div className="imgs"></div>
            <div className="imgs"></div>
            <div className="imgs"></div>
            <div className="imgs"></div>
          </div>
        </div>

        {/* Follow */}
        <div className="follow">
          <div className="follow-head">
            <h4>Follow me</h4>
          </div>
          <div className="follow-body">
              <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-linkedin-in"></i> 
          </div>
        </div>

        {/* Subscribe */}
        <div className="subscribe">
          <div className="subscribe-head">
            <h4>Subscribe</h4>
          </div>
          <div className="subscribe-body">
            <p>Enter your e-mail below and get notified on the latest blog posts.</p>
            <input type="text" placeholder='Enter e-mail'/>
            <button>Subscribe</button>
          </div>
        </div>

    </div>
  )
}

export default Aside