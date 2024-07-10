import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = () => {
  const cards = [
    { id: 1, title: '# But what is crypto and...', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png', tasks: 11 },
    { id: 2, title: '# Setting up your own...', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg', tasks: 8 },
    { id: 3, title: '# What the heck is a...', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg', tasks: 8 },
    { id: 4, title: '# Fourth card title...', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg', tasks: 7 },
    { id: 5, title: '# Fifth card title...', image: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg', tasks: 5 },
  ];

  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id} title={card.title} image={card.image} tasks={card.tasks} />
      ))}
    </div>
  );
};

export default CardList;
