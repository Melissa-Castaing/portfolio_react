/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import profil from '../../assets/images/profil.jpg';
import './style.scss';

export default function About() {
  return (
    <section id="about" className="about">
      <h1 className="about_title"> Mélissa Castaing </h1>
      <img className="about_img" src={profil} alt="Profil de Mélissa Castaing" />
      <p className="about_describe">
        Waouh ! Vous êtes venus sur mon portfolio, fais avec mes petites mains. Je vais profiter d'avoir votre attention pour me présenter
        brievement. Je suis en pleine reconversion professionnelle, le dev m'a choisi et m'est tombé dessus par un concours de circonstance.
        Cette carrière s'est imposée à moi et j'ai décidé de lui ouvrir les bras. Je me suis lancée dans l'aventure épaulé par les formateurs de
        l'école O'clock par le biais de la formation "Développeur web fullstack Javascript" d'une durée de 6 mois. Suite à la formation, nous avons
        réalisé en équipe un projet de fin d'étude, durant un mois, projet que j'ai soutenue devant le jury du "Titre Professionnel Web et Web Mobile".
        Je suis surtout une personne passionnée et créative. Je mets toute mon énergie, dans ce que je fais (désolée je ne sais pas faire autrement
        que de m'investir corps et âme), ensuite je suis quelqu'un de perfectionniste, capable de travailler seule et en équipe et de motivée !
        J'espère que vous serez l'entreprise qui souhaitera m'adopter et faire de moi une développeuse accomplie !
      </p>
    </section>
  );
}
