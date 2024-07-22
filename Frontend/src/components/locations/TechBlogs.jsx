import React from 'react';
import Card from '../utils/Card';

const blogs = [
  {
    index: 1,
    title: "Tech Journey:(pt. 1)",
    link: "https://ritochit.hashnode.dev/tech-journey-a-fresh-start-pt-1",
    imgSrc: "/techjourney1.png",
  },
  {
    index: 2,
    title: "Demarking Markdown",
    link: "https://ritochit.hashnode.dev/demarking-markdown-simplifying-text-formatting-for-the-web",
    imgSrc: "/markdown.png",
  },
  {
    index: 4,
    title: "Dissecting JavaScript I",
    link: "https://ritochit.hashnode.dev/dissecting-javascript-i",
    imgSrc: "/js1.png",
  },
  {
    index: 5,
    title: "Dissecting JavaScript II",
    link: "https://ritochit.hashnode.dev/dissecting-javascript-ii",
    imgSrc: "/js2.png",
  }
]

const TechBlogs = () => {
  return (
    <div className="h-[600px] overflow-y-auto p-4">
      <div className="flex flex-wrap items-start justify-start gap-10">
        {blogs.map((blog) => (
          <Card key={blog.index} props={blog} />
        ))}
      </div>
    </div>
  )
}

export default TechBlogs
