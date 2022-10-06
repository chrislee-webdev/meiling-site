import React from "react";

function Nav() {

    const categories = [
        {
            name: "Gymnastics",
            description: "Mei-Ling in gymnastics"
        },

        {
            name: "Dance",
            description: "Mei-Ling dancing"
        },

        {
            name: "Friends",
            description: "Mei-Ling and her friends"
        }
    ]

    function categorySelected() {
        console.log('hello')
    }

    return (
        <header>
            <h2>
                Mei-Ling Altic-Lee
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Mei-Ling
                        </a>
                    </li>

                    <li>
                        <span>Contact</span>
                    </li>

                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={categorySelected}>{category.name}</span>
                        </li>
                    ))}

                </ul>          
            </nav>
        </header>
    );
}

export default Nav;