import prisma from '../lib/prisma';
import React from "react"
import Layout from "../components/Layout"
import Dashboard from '../components/Dashboard';
import LandingPage from '../components/LandingPage';
import { signOut, useSession } from 'next-auth/react';
import { Progress } from "@nextui-org/react";

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//   });
//   return {
//     props: { feed },
//     revalidate: 10,
//   };
// };

const Home = (props) => {
  const { data: session, status } = useSession();
  let content = null;
  if (status === 'loading') {
    content = (
      <Progress
        size="sm"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    )
  } else {
    content = session ? <Dashboard /> : <LandingPage />
  }
  return (
      <Layout>
    { content }
      </Layout>
  );
}

export default Home
