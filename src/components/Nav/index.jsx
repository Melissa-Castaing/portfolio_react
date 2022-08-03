import { NavHashLink } from 'react-router-hash-link';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import './style.scss';

export default function Nav() {
  const navButton = [
    {
      id: 1,
      nav: 'A propos',
      road: '/',
    },
    {
      id: 2,
      nav: 'Mon parcours',
      road: '/career',
    },
    {
      id: 3,
      nav: 'Mes skills',
      road: '/skills',
    },
    {
      id: 4,
      nav: 'Mes projets',
      road: '/projects',
    },
    {
      id: 5,
      nav: 'Me contacter',
      road: '/contact',
    },
  ];
  return (

    <div className="nav">
      <h1 className="nav_title"> Hire me !</h1>
      <nav className="nav_button">
        { navButton.map((button) => (
          <NavHashLink
            key={button.id}
            to={`${button.road}`}
            className="nav_link"
            // activeclassname="selected"
          >
            {button.nav}
          </NavHashLink>
        ))}
      </nav>
      <div className="nav_media">
        <a href="https://www.linkedin.com/in/m%C3%A9lissa-castaing-9b69a9235/" target="_blank" rel="noreferrer"><img className="nav_media_logo" src={linkedin} alt="Linkedin icon" width="60px" /></a>
        <a href="https://github.com/Melissa-Castaing" target="_blank" rel="noreferrer"><img className="nav_media_logo" src={github} alt="Github icon" width="60px" /></a>
      </div>
    </div>
    // <nav className="nav">
    //   <NavHashLink
    //     to="/path#about"
    //     className="nav_hashlink"
    //     activeClassName="selected"
    //     activeStyle={{ color: 'red' }}
    //   >
    //     About me
    //   </NavHashLink>

  //   <NavHashLink
  //     to="/path#skills"
  //     className="nav_hashlink"
  //     activeClassName="selected"
  //     activeStyle={{ color: 'red' }}
  //   >
  //     Skills
  //   </NavHashLink>
  // </nav>
  );
}
