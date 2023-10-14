import React from "react";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const ReadingList = () => {
  return (
    <div>
      {
        ({ posts }) =>
          <ul>
            {posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
      }
    </div>
  )
}


export const getServerSideProps = async ({ req }) => {
  const list = prisma.paper.findMany(
    {
      where: {
        url: {
          contains: 'https://arxiv.org/abs/1706.03762'
        }
      }
    }
  )
  console.log(list);
  return list;
}

export default ReadingList