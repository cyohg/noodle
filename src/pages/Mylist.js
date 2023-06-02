import React from 'react';
import '../styles/Noodle.css';
import Navbar from '../components/Navbar';
import CategoryList from '../components/CategoryList';

function Mylist() {  
    const categories = [
        {
            title: 'Ma Liste',
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
        }
    ]
    return (    
        <div className="netflix">
          <Navbar />
            <div>
                <br></br>
                <br></br>
                <br></br>
                <CategoryList categories={categories} />
            </div>

        </div>
    )   
};

export default Mylist;