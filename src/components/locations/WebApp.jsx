import React from 'react';
import Card from '../utils/Card';

const WebApps = [
  {
    index: 1,
    title: "To Do Application",
    github: "https://github.com/RitochitGhosh/Todo_Application",
    deployment: "https://minimalistictodoapplication.netlify.app/",
    imgSrc: "/public/todo.png",
  },
  {
    index: 2,
    title: "Calculator Application",
    deployment: "https://eloquent-sundae-bfbc97.netlify.app/",
    imgSrc: "public/calculator.png"
  },
  {
    index: 3,
    title: "Clock Application",
    deployment: "https://magnificent-quokka-3096c0.netlify.app/",
    imgSrc: "public/clock.jpg"
  }, // 
  {
    index: 4,
    title: "Resume Builder",
    github: "https://github.com/RitochitGhosh/Projects_Web",
    deployment: "https://projects-web-nu.vercel.app/",
    imgSrc: "/public/resumebuilder.png",
  },
]

const WebApp = () => {
  return (
    <div className="h-[600px] overflow-y-auto p-4">
      <div className="flex flex-wrap items-start justify-start gap-10">
        {WebApps.map((webapp) => (
          <Card key={webapp.index} props={webapp} />
        ))}
      </div>
    </div>
  )
}

export default WebApp
