import React from 'react';
import listStyle from '../styles/List.module.css';
import {ListProps} from '../types/ListProps';

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <ul className={listStyle.listItem}>
      {data.map((post) => (
        <li key={post._id}>
          <h3>{post.title}</h3>
          <p>created: {post.created_at} | updated: {post.updated_at}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
