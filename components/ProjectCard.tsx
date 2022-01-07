import Image from 'next/image';
import React from 'react';
import {
  CodeIcon,
  GlobeIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline';

interface ProjectCardProps {
  name: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  techStack: string[];
  links: { repo: string; website?: string; read?: string };
}

interface ActionsProp {
  link: string;
  linkType: string;
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

const Action = (props: ActionsProp) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="h-9 rounded-lg flex items-center justify-center hover:ring-2 ring-rose-500 transition-all p-1"
    >
      <props.icon className="w-5 h-5 text-gray-800 dark:text-gray-100" />
      <h5 className="text-sm ml-1">{props.linkType}</h5>
    </a>
  );
};

const ProjectCard = ({
  name,
  imgSrc,
  imgAlt,
  description,
  links,
  techStack,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-900 p-6 border border-gray-900 dark:border-gray-100 rounded-lg  md:w-1/2 md:h-64 flex-none justify-between">
      <div className="flex flex-row justify-between overflow-hidden">
        <div>
          <h5 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {name}
          </h5>
          <p className="text-sm text-gray-900 dark:text-gray-100">
            {description}
          </p>
        </div>

        <div className="hidden sm:block md:flex w-1/2 relative">
          <Image src={imgSrc} alt={imgAlt} layout="fill" />
        </div>
      </div>
      <div className="flex flex-row space-x-2 overflow-auto md:mt-0 mt-3 flex-wrap space-between">
        {techStack.map((tech) => (
          <h5
            key={tech}
            className="bg-gray-300 dark:bg-gray-800 italic text-sm"
          >
            {tech}
          </h5>
        ))}
      </div>
      <div className="flex space-x-2 md:mt-0 mt-3 flex-wrap">
        <Action link={links.repo} linkType="Repo" icon={CodeIcon} />
        {links.website && (
          <Action link={links.website} linkType="Website" icon={GlobeIcon} />
        )}
        {links.read && (
          <Action
            link={links.read}
            linkType="Read More"
            icon={ArrowNarrowRightIcon}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
