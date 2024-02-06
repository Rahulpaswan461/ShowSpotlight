import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => {
        setPost(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((error) => console.log('The error is occurred'));
  }, []);

  return (
    <div className="navBar">
      <div className="left-section">
        <h2>Rahul Paswan</h2>
      </div>
      <div className="right-section">
        <ul>
        {post && post.show && (
       <Link to={`/home/${post.show.id}`}>
         <li>Home</li>
      </Link>
      )}
         <Link to='movie/popular'><li>Popular</li></Link>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
