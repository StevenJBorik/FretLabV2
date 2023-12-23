import { h, FunctionComponent } from 'preact';
import './About.css';

const About: FunctionComponent = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Fretlabs is an innovative music education platform that offers a unique
        practice experience by integrating scales and song keys. Our platform
        uses advanced algorithms to identify the key signature and specific
        sections of a song, allowing musicians to practice scales over their
        favorite tracks.
      </p>
      <p>
        Fretlabs provides an interactive fretboard that can display any range,
        facilitating both ascending and descending scale practices. As users
        play along, the correct notes light up in real-time, offering immediate
        feedback. Moreover, Fretlabs dynamically adjusts the section of the
        fretboard being displayed as the song progresses, tailoring the learning
        experience to the musician's needs.
      </p>
      <p>
        Our mission is to empower musicians of all skill levels with the tools
        to practice efficiently, making sophisticated music technology
        accessible to everyone.
      </p>
    </div>
  );
};

export default About;
