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
            <nav className="flex-row">
                <h2 id="header-name">Mei-Ling</h2>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
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