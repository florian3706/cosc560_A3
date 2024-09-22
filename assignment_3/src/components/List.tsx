import React, { useEffect, useState } from 'react';
import listStyle from '../styles/List.module.css';
import {ListProps, BlogPost} from '../types/ListProps';
import { Link } from 'react-router-dom';
import { fetchPosts, login } from '../services/apiClient';


const List: React.FC<ListProps> = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await login('raynor.monserrate@example.org', 'password'); // Replace with actual credentials if yours differ
        const postsData = await fetchPosts(token);
        setPosts(postsData);
      } catch (error) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <ul className={listStyle.listItem}>
      {posts.map((post) => (
        <li key={post._id}>
          <Link to={`/post/${post._id}`} >
            <h3>{post.title}</h3>
          </Link>
          <p>created: {post.created_at} | updated: {post.updated_at}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
