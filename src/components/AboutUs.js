import React, { useEffect, useState } from 'react';
import {Container } from 'react-bootstrap';
import axios from 'axios';

const About = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const ACCESS_TOKEN = 'YOUR_INSTAGRAM_ACCESS_TOKEN'; // Replace with your Instagram access token

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${ACCESS_TOKEN}`
        );
        const posts = response.data.data.slice(0, 6); // Get the last 6 posts
        setInstagramPosts(posts);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <Container>
      <h1>About Us</h1>
      <p>
        Welcome to <b>Community Connect x Standert</b> 
      </p>
      <p>Bicycle collective of South Africa.</p>
      
      <h2>Our Team</h2>
      <p>
        We are a dedicated group of professionals committed to delivering the best service possible.
      </p>
      
      {/* Instagram Posts Section */}
      <h2>Follow Us on Instagram</h2>
      <div className="instagram-posts">
        {instagramPosts.map(post => (
          <div key={post.id} className="instagram-post">
            {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
              <img src={post.media_url} alt={post.caption} />
            ) : post.media_type === 'VIDEO' ? (
              <video controls>
                <source src={post.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default About;
