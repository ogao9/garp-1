import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../../components/Layout"
import prisma from '../../lib/prisma';

export const getServerSideProps = async ({ params }) => {
  // const post = await prisma.post.findUnique({
  //   where: {
  //     id: String(params?.id),
  //   },
  //   // include: {
  //   //   author: {
  //   //     select: { name: true },
  //   //   },
  //   // },
  // });
  const post = {};
  return {
    props: post,
  };
};

const Post = (props) => {
  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <p>{props.content} </p>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default Post
