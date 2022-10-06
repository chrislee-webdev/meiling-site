import React from 'react';
import coverImage from '../../assets/cover_image.jpeg'

function About() {
    return (
        <section>
            <h1 id='about'>Mei-Ling Altic-Lee</h1>
            <img src={coverImage} style={{ width: '35%'}} id='cover-image' alt='cover' />
        </section>
    );
}

export default About;