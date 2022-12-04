import React from "react";
import photo from "../../assets/gymnastics/IMG_0162.jpeg"

function Gallery(props) {
    const currentGallery = {
        name: "gymnastics",
        description: "Mei-Ling enjoying gymnastics" 
    };
    return (
        <section>
            <h1>{currentGallery.name}</h1>
            <p>{currentGallery.name}</p>
            <div className="flex-row">
                <img src = {photo} alt="gymnastic example" className="img-thumbnail mx-1"></img>
            </div>
        </section>
    );
}

export default Gallery;