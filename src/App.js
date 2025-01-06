import React from 'react';
import PropTypes from 'prop-types';

// Potato 컴포넌트 정의
function Food({ name, picture, rating }){
  return (
  <div>
    <h2>I like {name} </h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : 'Maratang',
    image :'https://i.namu.wiki/i/qFWfOHBd0mx7NmNquwtaSbUjnPumXpk5oi1jxNKpWUsv_eGJe44xm9AePkbhQ6hIxTjMtroFaOFPbhBy0MSbNQ.webp',
    rating : 5,
  },
  {
    id : 2,
    name : 'Gimbap',
    image : 'https://static.wtable.co.kr/image-resize/production/service/recipe/689/4x3/edd1e01f-4502-453b-8b61-688941aefb76.jpg',
    rating : 4.9,
  },
  {
    id : 3,
    name : 'Salmon',
    image : 'https://i.namu.wiki/i/O0LMqV4ESWd2nrMyio7CM1kSzQCnA6ZfUyyOJ62FXc6Mh__AeQjSuDVbqxbssn-h80OeOCp1TXX7WNiL8h-HmQ.webp',
    rating : 5,
  },
  {
    id : 4,
    name : 'Bibimbap',
    image : 'https://kormedi.com/wp-content/uploads/2024/09/gettyimages-a11354394.jpg',
    rating : 4,
  },
  {
    id : 5,
    name : 'Doncasu',
    image : 'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002274/img/basic/a0002274_main.jpg',
    rating : 4.5,
  },
];

// App 컴포넌트 정의
function App() {
  // App 컴포넌트는 HTML 반환
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} 
        rating={dish.rating}/>
      ))}
    </div>
    );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};

export default App;
