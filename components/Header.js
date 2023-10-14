import React from 'react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import LoginButton from './LoginButton';
import { Avatar } from "@nextui-org/react";

const Header = () => {
  const router = useRouter();
  const isActive = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <NavbarBrand>
      <a href="/" className="text-3xl font-bold ">
        garp
      </a>
    </NavbarBrand >
  );

  let right = null;

  if (status === 'loading') {
    right = (
      <div className="right">
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <LoginButton />
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <a href="/" className="text-3xl font-bold ">
          garp
        </a>
      </div>
    );
    right = (
      <div className="right">
        <Popover placement="bottom" showArrow={true}>
          <PopoverTrigger>
            <Button color="foreground"><Avatar src={session.user.image} /></Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className='mb-4'>
                <a href="/profile">
                  <Button>Profile</Button>
                </a>
              </div>
              <div><Button onPress={() => signOut()}>Log out</Button></div>
            </div>
          </PopoverContent>
        </Popover>

      </div>
    );
  }

  return (
    <Navbar position='static' className='mb-4 bg-gray-200'>
      {left}
      {right}
    </Navbar>
  );
};

export default Header;

{/*  */ }