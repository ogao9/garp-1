import prisma from '../lib/prisma';
import React from "react"
import Layout from "../components/Layout"
import Dashboard from '../components/Dashboard';
import LandingPage from '../components/LandingPage';
import { signOut, useSession } from 'next-auth/react';
import { Progress } from "@nextui-org/react";

export async function getServerSideProps() {
  const list = 
  [
    {
      id: 'useridsample',
      read: false,
      paper: {
        id: 'paperidsample',
        url: 'https://www.jstor.org/stable/27826254?typeAccessWorkflow=login'
      }
    }
  ]
  
  console.log(list)
  return {
    props: {
      list,
    }
  };
}

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
    content = session ? <Dashboard toRead={props.list} /> : <LandingPage />
  }
  return (
    <Layout>
      {content}
    </Layout>
  );
}

export default Home
