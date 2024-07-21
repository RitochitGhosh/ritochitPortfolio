import React from 'react';
import Card from '../utils/Card';

const Features = [
  {
    index: 1,
    title: "To Do Application",
    github: "https://github.com/RitochitGhosh/Todo_Application",
    deployment: "https://minimalistictodoapplication.netlify.app/",
    imgSrc: "/public/todo.png",
  },
  {
    index: 2,
    title: "games_terminal",
    github: "https://github.com/RitochitGhosh/games_terminal",
    deployment: "https://www.npmjs.com/package/games_terminal",
    imgSrc: "/public/games_terminal.png",
  },
  {
    index: 3,
    title: "C_clock",
    link: "https://gist.github.com/RitochitGhosh/410e4d47911bc347f52ff319a628fabb",
    imgSrc: "public/C_clock.png",
  },
  {
    index: 4,
    title: "Dissecting JavaScript I",
    link: "https://ritochit.hashnode.dev/dissecting-javascript-i",
    imgSrc: "public/js1.png",
  },
  {
    index: 5,
    title: "Dissecting JavaScript II",
    link: "https://ritochit.hashnode.dev/dissecting-javascript-ii",
    imgSrc: "public/js2.png",
  }
];

const Featured = () => {
  return (
    <div className="h-[600px] overflow-y-auto p-4">
      <div className="flex flex-wrap items-start justify-start gap-10">
        {Features.map((feature) => (
          <Card key={feature.index} props={feature} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
