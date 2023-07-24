import React from 'react';
import { DevelopersList } from '../helpers/DevelopersList';
import { DeveloperItem } from '../components/DeveloperItem';
import './Developers.css';

const Developers = () => {
  return (
    <>
    {DevelopersList.map((developerItem, key) => {
      return (
        <DeveloperItem
          key={key}
          image={developerItem.image}
          name={developerItem.name}
          title={developerItem.title}
          association={developerItem.association}
          linkedin={developerItem.linkedin}
          github={developerItem.github}
          contact={developerItem.contact}
          title_description={developerItem.title_description}
          bio={developerItem.bio}
          tech_stack={developerItem.tech_stack}
        />
      )
      })}
    </>
  )
}

export default Developers