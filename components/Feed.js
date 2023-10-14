import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../components/Layout"
import prisma from '../lib/prisma';

// export const getServerSideProps = async ({ params }) => {
//   //   const post = await prisma.post.findUnique({
//   //     where: {
//   //       id: String(params?.id),
//   //     },
//   //     // include: {
//   //     //   author: {
//   //     //     select: { name: true },
//   //     //   },
//   //     // },
//   //   });
//   const post = {};
//   return {
//     props: post,
//   };
// };

const Feed = (props) => {

  return (
    <div>

    </div>
  )
}

export default Feed
