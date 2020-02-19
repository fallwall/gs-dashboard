import React from 'react';
import data from '../data/dadjokes';
import './Intro.css';

const dadJokesTotal = data.jokes.length;
const randIndex = Math.floor(Math.random() * data.jokes.length);

export default function Intro() {
  return (
    <div className="intro">
      <h1>
        <span>T</span>
        <span>r</span>
        <span>i</span>
        <span>p</span>
        <span>l</span>
        <span>a</span>
        <span>n</span>
        <span>e</span>
        <span>r</span>
        </h1>
      <h2>{data.jokes[randIndex].line}</h2>
      <h3>{data.jokes[randIndex].pun}</h3>
    </div>
  )
}
