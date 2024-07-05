import React from 'react'
import "./RightBar.scss"
import tempimg from "../../assets/temp1.jpg";
import temp2img from "../../assets/temp2.jpg";
import temp3img from "../../assets/temp3.jpg";
import temp4img from "../../assets/temp4.jpg";
import temp5img from "../../assets/temp5.jpg";
import temp6img from "../../assets/temp6.jpg";
import temp7img from "../../assets/temp7.jpg";
import { Link } from 'react-router-dom';


function RightBar() {


  return (
    <div className='rightbar'>
      <div className="container">

        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={tempimg} alt="img"/>
              <span>Julie Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img src={temp2img} alt="img"/>
              <span>Akash</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>


        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={temp5img} alt="img"/>
              <p>
              <span>Jerry</span> changed their cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={temp4img} alt="img"/>
              <p>
              <span>Jasmine Gill</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={temp3img} alt="img"/>
              <p>
              <span>Nayan Goel</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src={temp3img} alt="img"/>
              <p>
              <span>Nayan Goel</span> posted
              </p>
            </div>
            <span>2 min ago</span>
          </div>

        </div>


        <div className="item">
          <span>Friends Suggestions</span>
          <div className="user">
            <div className="userInfo">
              <img src={temp3img} alt="img"/>
              <div className="online" />
              <Link
                to={`/profile/1`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <span>John Jon</span>
              </Link>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={temp7img} alt="img"/>
              <div className="online" />
              <Link
                to={`/profile/7`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <span>Sunjit K</span>
              </Link>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={temp6img} alt="img"/>
              <div className="online" />
              <Link
                to={`/profile/8`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <span>Bavi</span>
              </Link>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={tempimg} alt="img"/>
              <div className="online" />
              <span>Julie Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={tempimg} alt="img"/>
              <div className="online" />
              <span>Julie Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={tempimg} alt="img"/>
              <div className="online" />
              <span>Julie Doe</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default RightBar
