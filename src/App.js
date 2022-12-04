import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    {
        name: "Gymnastics",
        description: "Mei-Ling in gymnastics",
    },
    {
        name: "Dance",
        description: "Mei-Ling dancing",
    },
    {
        name: "Friends",
        description: "Mei-Ling and her friends",
    }
]);

const [currentCategory, setCurrentCategory] = useState(categories[0]);

 return (
    <div>
      <Nav
        categories = {categories}
        setCurrentCategory = {setCurrentCategory}
        currentCategory = {currentCategory}
        ></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>   
    </div>
  );
}

export default App;
