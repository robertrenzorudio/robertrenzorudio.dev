import React from 'react';
import ProjectCard from './ProjectCard';
import { featuredProjects } from '../constants';

interface Props {}

const FeatuedProjects = (props: Props) => {
  return (
    <div className="flex flex-col max-w-2xl 2xl:max-w-4xl mx-auto w-full md:px-0 space-y-6 p-8 pb-4">
      <h1 className="text-3xl font-extrabold">Featured Projects</h1>
      <div className="flex flex-col space-y-6 pb-4">
        {featuredProjects.map(
          ({ name, description, imgSrc, imgAlt, techStack, links }) => (
            <ProjectCard
              key={name}
              name={name}
              description={description}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              techStack={techStack}
              links={links}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FeatuedProjects;
