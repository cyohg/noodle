import React from 'react';
import '../styles/Noodle.css';
import Navbar from '../components/Navbar';
import CategoryList from '../components/CategoryList';

function Mylist() {  
    const categories = [
        {
            title: 'Ma Liste',
            images: [
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
                'https://cdn.discordapp.com/attachments/1105829710899978280/1114189551326474240/boss.png',
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <CategoryList categories={categories} />
            </div>

        </div>
    )   
};

export default Mylist;