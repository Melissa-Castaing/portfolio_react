import profil from '../../assets/images/profil.jpg';
import './style.scss';

export default function About() {
  return (
    <section id="about" className="about">
      <h1 className="about_title"> Mélissa Castaing </h1>
      <img className="about_img" src={profil} alt="Profil de Mélissa Castaing" />
      <p className="about_describe">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </section>
  );
}
