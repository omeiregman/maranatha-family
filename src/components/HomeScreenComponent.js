import React, { Component } from 'react';
import img_logo from '../images/logo.PNG';
import img_community from '../images/community.jpg';
import img_involved from '../images/involvedbible.jpg';
import img_eventone from '../images/event1.jpg';
import img_eventtwo from '../images/event2.jpg';
import img_eventthree from '../images/event3.jpg';
import img_wepray from '../images/wepray.jpg';
import img_westudy from '../images/westudy.jpg';
import img_pastorone from '../images/pastor1.jpg';


class HomeScreenComponent extends Component {
  render(){
    return(
      <div>
        <header className="header-section">
          <nav>

            <ul className="nav-items">
              <li>Home</li>
              <li>About</li>
              <li>Events</li>
              <li>Contact</li>
            </ul>
          </nav>
          <h1 className="hero-text">OUR MISSION IS TO GLORIFY GOD</h1>
        </header>
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="about-mission">
                  <h3>OUR MISSION</h3>
                  <p>We are a loving family church focused
                    on raising support for cross cultural missions
                    in countries where Christ has not been named
                  </p>
                  <h3>OUR VISION</h3>
                  <p>Our prayer is for God to raise men and women who have
                    thirst for the kings return that will join us in this noble cause.
                    We have joined the chariots of cross cultural. PLEASE JOIN THIS CHARIOT
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <h3>OUR COMMUNITY</h3>
                <img src={img_community} alt="our community"/>
                <p>Our church is open and friendly with many social activities.
                  To keep our church running smoothly, we have committees anyone can join.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="gospel-in-action">
          <div className="row">
            <div className="col-md-6">
              <h3>THE GOSPEL IN ACTION</h3>
              <h2>We make a <br/><i>Difference</i></h2>
              <div className="btn-getinvolved">GET INVOLVED</div>
            </div>
            <div className="col-md-6">
              <img src={img_involved} alt="Get Involved"/>
            </div>
          </div>
        </section>

        <section className="upcoming-event">
          <div className="container">
            <h3>UPCOMING EVENT</h3>
            <div className="row">
              <div className="col-sm-4">
                <img src={img_eventone} alt="upcoming event"/>
                <h6>World Changers Conference</h6>
                <h6>13TH AUG 2018</h6>
              </div>
              <div className="col-sm-4">
                <img src={img_eventtwo} alt="upcoming event"/>
                <h6>Refreshing Night Vigil</h6>
                <h6>5TH SEP 2018</h6>
              </div>
              <div className="col-sm-4">
                <img src={img_eventthree} alt="upcoming event"/>
                <h6>Leadership Training Program</h6>
                <h6>26TH - 29TH OCT 2018</h6>
              </div>
            </div>
          </div>
        </section>

      <section>
          <div className="container">
            <div className="study-pray-section">
              <div className="row pray-row">
                <div className="col-md-6 pray-img">
                  <img src={img_wepray} alt="We Pray"/>
                </div>
                <div className="col-md-6 pray-text">
                  <h3><i>Need </i>Prayers? <br/>We'll pray for you!</h3>
                </div>
              </div>
            </div>

          <div className="study-bible-section">
            <div className="row study-row">
              <div className="col-md-6 study-text">
                <h3><i>Join </i>Our <br/>Bible Study Group</h3>
                <p>We invite anyone and everyone to attend our Sunday <br/>gatherings to study bible together.</p>
                <div className="btn-biblestudy">JOIN OUR STUDY GROUP</div>
              </div>
              <div className="col-md-6 study-img">
                <img src={img_westudy} alt="We Study"/>
              </div>
            </div>
          </div>
          </div>
      </section>


      <section className="people-in-service">
        <div className="container">
          <h2>PEOPLE IN SERVICE</h2>
          <div className="row">
            <div className="col-sm-3">
              <img src={img_pastorone} alt="Pastor"/>
              <h3>PASTOR GODSON OKEREKE</h3>
              <p>Senior Pastor</p>
            </div>
            <div className="col-sm-3">
              <img src={img_pastorone} alt="Pastor"/>
              <h3>PASTOR GODSON OKEREKE</h3>
              <p>Senior Pastor</p>
            </div>
            <div className="col-sm-3">
              <img src={img_pastorone} alt="Pastor"/>
              <h3>PASTOR GODSON OKEREKE</h3>
              <p>Senior Pastor</p>
            </div>
            <div className="col-sm-3">
              <img src={img_pastorone} alt="Pastor"/>
              <h3>PASTOR GODSON OKEREKE</h3>
              <p>Senior Pastor</p>
            </div>
          </div>
        </div>
      </section>


      <section className="map-section">
        <div className="row">

        </div>
      </section>

      <section className="footer-section">
          <p>Maranatha Family &copy; 2018</p>
      </section>
      </div>
    );
  }
}

export default HomeScreenComponent;
