import React from 'react';
import mainStyle from '../styles/App.module.css';
import Header from '../components/Header';
import List from '../components/List';

function App() {
  return (
    <>
      <Header />
      <h1 className={mainStyle.pageTitle}>List of Blog Posts</h1>
      <List />
    </>
  );
}

export default App;
