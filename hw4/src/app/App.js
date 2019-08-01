import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Blog from './component/Blog/Blog';
import WelcomeMadal from './component/WelcomModal/WelcomeModal';
import './App.css';

class App extends React.Component {
  render() {

    const blogPosts = [
        {
          postTitle: 'Из зоопарка сбежала организованная стая диких хорьков',
          postImg: '../images/post1.jpeg',
          altImgText: 'Lorem ipsum dolor',
          postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur atque corporis culpa dolor dolores doloribus earum illum maxime modi, nesciunt omnis praesentium quas quo soluta   vero voluptatem! Accusantium adipisci animi assumenda commodi enim odit, voluptas? Ad asperiores aut earum est, ex excepturi, impedit nulla quibusdam reiciendis veritatis, voluptas voluptatum!'
        },
        {
            postTitle: 'Прорыв в науке!!! Ученые изобрели новую сыворотку лени!',
            postImg: '../images/post2.jpg',
            altImgText: 'Lorem ipsum dolor',
            postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur atque corporis culpa dolor dolores doloribus earum illum maxime modi, nesciunt omnis praesentium quas quo soluta vero voluptatem! Accusantium adipisci animi assumenda commodi enim odit, voluptas? Ad asperiores aut earum est, ex excepturi, impedit nulla quibusdam reiciendis veritatis, voluptas voluptatum!'
        },
        {
            postTitle: 'В Московском общественном транспорте теперь появилась площадка для разборок!',
            postImg: '../images/post3.jpg',
            altImgText: 'Lorem ipsum dolor',
            postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur atque corporis culpa dolor dolores doloribus earum illum maxime modi, nesciunt omnis praesentium quas quo soluta vero voluptatem! Accusantium adipisci animi assumenda commodi enim odit, voluptas? Ad asperiores aut earum est, ex excepturi, impedit nulla quibusdam reiciendis veritatis, voluptas voluptatum!'
        },
];

    return <div>
      <WelcomeMadal title="Добро пожаловать!!!"/>
      <Header imgurl="../images/logo.svg" imgDesc="Коровий Логотип"/>
      <Login />
      <Blog postItems={blogPosts} title="Блог горячих новостей"/>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));