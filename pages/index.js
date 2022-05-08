import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import fetch from 'isomorphic-unfetch';

const Home = () => {
  const [name, setName] = useState('Test name...');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/test');
      const res = await response.json();
      if (res && res.name) {
        setName(res.name);
      }
    }
    fetchData();
  });

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">Hello to {name}!</h1>
        <p className="description">
          Well hello there, fellow internet explorer.
        </p>
        <div className="image-wrapper">
          <h3>View from the mountains</h3>
          <img src="/images/photo-asset.jpeg" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
        .image-wrapper {
          display: grid;
          justify-content: center;
          align-items: center;
          grid-gap: 2em;
        }
        .image-wrapper.img {
          height: 300px;
          image-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default Home;
