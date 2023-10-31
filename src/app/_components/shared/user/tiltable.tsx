'use client'
import React from 'react';
import Tilt from 'react-parallax-tilt';

const ExperimentItem = () => {
  let icon;
  const classes = 'text-bright'
  const date  = new Date().getDate().toString()
 

  return (
    <Tilt
      scale={1}
      transitionSpeed={200}
      className="rounded bg-stone-700 text-stone-100 text-xl font-semibold w-full mb-3 p-3 cursor-pointer sm:mx-2 sm:mb-4 sm:basis-[40%] sm:flex-grow sm:flex-shrink lg:basis-[30%] h-[15rem]"
    >
      <a
        className="no-underline"
        href="dummy link"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className="flex items-center justify-between">
          <time className="time">{date}</time>
          <span>{icon}</span>
        </div>
        <h3 className="mb-2 text-base">{"dummy title"}</h3>
        <p className="mb-2">{"dummy description"}</p>
        {/* <ul className="list-none">
          {experiment.tags.map((tag, index) => (
            <li key={index} className="inline-block text-xs mr-2 border-2 border-primary text-primary py-1 px-3 mb-1">{tag}</li>
          ))}
        </ul> */}
      </a>
    </Tilt>
  );
};

export default ExperimentItem;
