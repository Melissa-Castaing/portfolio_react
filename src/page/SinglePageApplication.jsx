import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
// import Hobbies from '../components/Hobbies';
import HardSkills from '../components/HardSkills';
import SoftSkills from '../components/SoftSkills';

import './style.scss';

export default function SinglePageApplication() {
  return (
    <main className="spa">
      <Nav />
      <Header />
      <div className="spa_container">
        <About />
        {/* <Hobbies /> */}
        <HardSkills />
        <SoftSkills />
      </div>
    </main>
  );
}
