import React, { useState } from "react";
import birthdayPerson from "./data";

const Card = () => {
  const [person, setPerson] = useState(birthdayPerson);

  const clickHandler = () => {
    setPerson([]);
  };
  return (
    <main>
      <h2 className="title">{person.length} birthdays today</h2>
      <section>
        {person.map((p) => {
          return (
            <article key={p.id} className="person">
              <img src={p.image} alt={p.name} />
              <div className="person__info">
                <h2>{p.name}</h2>
                <p>{p.age} Years</p>
              </div>
            </article>
          );
        })}
      </section>
      <button onClick={clickHandler}>Clear All</button>
    </main>
  );
};

export default Card;
