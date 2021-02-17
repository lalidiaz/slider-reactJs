import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ImQuotesLeft } from 'react-icons/im';
import data from './data';
import Title from './components/Title';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {}, []);

  return (
    <section className="section">
      <div className="title">
        <Title title="Reviews" />
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          return (
            <article className={position} key={id}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <ImQuotesLeft className="icon" />
            </article>
          );
        })}
        <button className="prev">
          <IoIosArrowBack size={40} />
        </button>
        <button className="next">
          <IoIosArrowForward size={40} />
        </button>
      </div>
    </section>
  );
}

export default App;
