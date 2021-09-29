import "./styles.css";
import React, { useState } from "react";
var petsDictionary = {
  "🐶": "Dog",
  "🐱": "Cat",
  "🐭": "Rat",
  "🐰": "Rabbit",
  "🐠": "Fish",
  "🐦": "Bird",
  "🐒": "Monkey",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🦁": "Lion"
};
var petsWeKnow = Object.keys(petsDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function petChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = petsDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function petClickHandler(pet) {
    var meaning = petsDictionary[pet];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Play with Pets</h1>
      <input onChange={petChangeHandler}></input>
      <div id="meaning"> {meaning}</div>
      <div id="text">Choose your pet</div>
      {petsWeKnow.map(function (pet) {
        return (
          <span onClick={() => petClickHandler(pet)} key={pet}>
            {" "}
            {pet}{" "}
          </span>
        );
      })}
    </div>
  );
}
