import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const videos = [
  {
    name: 'О нас',
    id: 1,
    path: '/Onas', 
  },
  {
    name: 'Запись',
    id: 2,
    path: '/Zapis', 
  },
  {
    name: 'Адрес',
    id: 3,
    path: '/Adres', 
  },
  {
    name: 'О преподавателе',
    id: 4,
    path: '/Prepod', 
  },
  {
    name: 'Контакты',
    id: 5,
    path: '/contacts', 
  },
  {
    name: 'Группы и стоимость',
    id: 6,
    path: '/Groups', 
  },
];

export function AboutUs() {
  return (
    <div className="video-list">
      <h1>About Us</h1>
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <div>
            <p className="video-name">{video.name}</p>
          </div>
          <Link to={video.path}>
            <button className="like-button">Узнать тут</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

