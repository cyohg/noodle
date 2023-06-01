import React from 'react';
import CategoryList from '../components/CategoryList';
import logo from '../assets/logo.png';
import '../styles/Noodle.css';

function Noodle() {
    const categories = [
        {
            title: 'Category 1',
            images: [
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
            ],
        },
        {
            title: 'Category 2',
            images: [
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',      
            ],
        },
        {
            title: 'Category 3',
            images: [
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',      
            ],
        },
        {
            title: 'Category 4',
            images: [
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://pixy.org/src/477/4774988.jpg',
                'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg',      
            ],
        },
    ];
      
    return (
        <div className="netflix">
            <header className="header">
                <img className="header__logo" src={logo} alt="Netflix Logo" />
                <nav className="navbar">
                    <span className="navbar__item">Accueil</span>
                    <span className="navbar__item">Séries TV</span>
                    <span className="navbar__item">Films</span>
                    <span className="navbar__item">Nouveautés les plus regardées</span>
                    <span className="navbar__item">Ma liste</span>
                </nav>
            </header>

            <div>
                <br></br>
                <br></br>
                <br></br>
                <CategoryList categories={categories} />
            </div>

        </div>
    );
};

export default Noodle;