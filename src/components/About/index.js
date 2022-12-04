import React from "react";
import coverImage from "../../assets/cover_image.jpeg";

function About() {
  return (
    <section class="my-5">
      <h1 id="about">Mei-Ling Altic-Lee</h1>
      <img src={coverImage} style={{ width: "35%" }} id="cover-image" alt="cover"
      />

      <p id="about-info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit eu dui vitae tristique. Suspendisse luctus a risus ac pharetra. Ut eu ultrices orci. In maximus est sit amet erat scelerisque efficitur. Vivamus efficitur tempus varius. Curabitur vitae finibus enim. Sed ultrices, urna sed scelerisque faucibus, metus nisl luctus elit, at lobortis urna sem ut mauris. In hac habitasse platea dictumst.<br></br>
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit eu dui vitae tristique. Suspendisse luctus a risus ac pharetra. Ut eu ultrices orci. In maximus est sit amet erat scelerisque efficitur. Vivamus efficitur tempus varius. Curabitur vitae finibus enim. Sed ultrices, urna sed scelerisque faucibus, metus nisl luctus elit, at lobortis urna sem ut mauris. In hac habitasse platea dictumst.
      </p>
    </section>
  );
}

export default About;
