import React from 'react';
import mainStyle from '../styles/App.module.css';
import Header from '../components/Header';
import List from '../components/List';
import blogPosts from '../data/data.json';

function App() {
  return (
    <>
      <Header />
      <List data={blogPosts.data} />
    </>
  );
}

export default App;
