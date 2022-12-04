import React from "react";

    function Nav(props) {
        const {
            categories = [],
            setCurrentCategory,
            currentCategory,
        } = props;

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
    
                        <li className="mx-2">
                            <span>Contact</span>
                        </li>
                        {categories.map((category) => (
                            <li
                            className={`mx-1 ${
                                currentCategory.name === category.name && 'navActive'
                            }`}
                            key={category.name}
                            >
                                <span
                                onClick={ () => {
                                    setCurrentCategory(category)
                                }}
                            ></span>
                            </li>
                        ))}
                    </ul>          
                </nav>
            </header>
        )
    }

export default Nav;