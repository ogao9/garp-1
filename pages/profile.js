import React from "react";
import prisma from '../lib/prisma';

import {Avatar} from "@nextui-org/react";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"
import { useSession } from "next-auth/react"
import Layout from "../components/Layout";

// function that gets userID from email
async function getUserID(email){
    const user = await prisma.user.findUnique({
        where: { email: email },
    });

    // console.log("user", user)
    return user.id;
}

//fetching data from database
export async function getServerSideProps(context) {
    const session = await getServerSession(
        context.req,
        context.res,
        authOptions
    );

    const email = await session.user.email;
    const userID = await getUserID(email);

    // 
    const articlesRead = await prisma.saved.findMany({
        where: {id: userID, read: true },
    });
    console.log("articlesRead: ", articlesRead)

    return {
        props: {
            session,
            articlesRead,
        },
    }
}

function Profile({session}){
    // const { data: session } = useSession()
    // HTML that you see on the page
    const imgurl = session.user.image

    return(
        <Layout>
            <div className="grid grid-cols-2">
                <div>
                    <Avatar isBordered color="default" src={imgurl} size="lg"/>
                </div>
                <div>
                    <p>{session.user.name}</p>
                </div>    
            <p className="text-2xl font-semibold">What I have read</p>
            <div className="mt-8"> 
              <p className="text-2xl font-semibold">What I have saved</p>
            </div>
            <div>
            </div>
        </div>
        </Layout>
    )
}

export default Profile