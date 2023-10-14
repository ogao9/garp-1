import React from 'react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
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
        <a href="/api/auth/signin">Log in</a>
        {/* <Button color="primary" href="/api/auth/signin">Log in</Button> */}
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <a href="/" className="bold" >
          Feed
        </a>
      </div>
    );
    right = (
      <div className="right">
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      </div>
    );
  }

  return (
    <Navbar position='static'>

      {left}
      {right}
    </Navbar>
  );
};

export default Header;