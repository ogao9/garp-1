import prisma from '../lib/prisma';
import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import LandingPage from '../components/LandingPage';
import Post, { PostProps } from "../components/Post"

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

type Props = {
  feed: PostProps[]
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <LandingPage/>
    </Layout>
  )
}

export default Home
