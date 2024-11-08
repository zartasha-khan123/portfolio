import Image from "next/image";
import "./about.css";
import about from "@/app/public/assets/public/images.jpeg";
function About() {
  return (
    <section id="about" className="about">
      <div className="img-about">
        <Image
          src={about}
          alt="Description of image"
          width={400}
          height={400}
         border-radius={200} 
        />
        <div className="info-about1">
          <span>1+</span>
          <p>years exprience</p>
        </div>
        <div className="info-about2">
          <span>50+</span>
          <p>project complete</p>
        </div>
        <div className="info-about3">
          <span>200+ </span>
          <p>Happy cionts</p>
        </div>
      </div>
      <div className="about-content">
        <span>Let me Indtroduce myself</span>
        <h2>About me</h2>
        <h3>A Story Of Good</h3>
        <h4>
          I am a web developer with 1 years of experience in creating modern
          responsive, and user-focused websites. Skilled in leveraging the
          latest technologies to deliver seamless and efficient web experiences
          I am dedicated to building high-quality functional, and visually
          appealing applications that meet user needs and enhance online
          presence.
        </h4>
        <div className="btn-box">
          <a
          target="blank"
          href="https://www.linkedin.com/in/zartash-zartasha-9916992bb/" className="btn">
            Read More!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;