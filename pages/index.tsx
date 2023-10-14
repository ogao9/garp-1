import prisma from '../lib/prisma';
import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Post, { PostProps } from "../components/Post"

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    // include: {
    //   author: {
    //     select: { name: true },
    //   },
    // },
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
      {/* <div className="page">
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div> */}
      <div className="text-center bg-orange-100">
        <p>Community platform for research papers</p>
        <p>Keep track of papers you want to read, and discover what your peers are reading.</p>
      </div>
    </Layout>
  )
}

export default Home
