import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import profile from '../../assets/profile.png';


const Header = () => (

    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <p>👋 Hi, I'm</p>
        <h1 className="gradient__text"> Antonette Mores</h1>
        <p>  Hey! How nice of you to look at my personal site, Thank you! <br/>
      I am Front-End Developer that specializes at responsive web design.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your email address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">
          <img src={profile} alt="ai" />
      </div>
    </div>
  );


export default Header;