import { Fragment } from 'react';
import Head from 'next/head';
import { getPosts } from '../services/index';
import moment from 'moment';
import Hero from '../components/Home/Hero';
import AboutSection from '../components/Home/AboutSection';
import Vision from '../components/Home/Vision';
import Us from '../components/Home/Us';
import Focus from '../components/Home/Focus';

export default function Home({ posts }) {
  console.log(posts);

  return (
    <Fragment>
      <Hero />
      <AboutSection />
      <Vision />
      <Us />
      <Focus />
    </Fragment>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
