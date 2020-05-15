import React from 'react';
import Scrollchor from 'react-scrollchor';

class Navbar extends React.PureComponent {
  componentDidMount() {
    this.refs.navbar.addEventListener('click', e => {
      if (e.target.innerText === 'Projects') {
        document
          .getElementById('projects')
          .scrollIntoView({ behavior: 'smooth' });
      } else if (e.target.innerText === 'Contact') {
        document
          .getElementById('contact')
          .scrollIntoView({ behavior: 'smooth' });
      } else if (e.target.innerText === 'Education') {
          document
              .getElementById('education')
              .scrollIntoView({ behavior: 'smooth' })
      }
    });
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar" ref="navbar">
          <Scrollchor to="#about-me">About Me</Scrollchor>
          <Scrollchor to="#education">Education</Scrollchor>
          <Scrollchor to="#work-experience">Work Experience </Scrollchor>
          <Scrollchor to="#projects">Projects</Scrollchor>
          <Scrollchor to="#contact">Contact</Scrollchor>

        </nav>
      </div>
    );
  }
}

export default Navbar;
