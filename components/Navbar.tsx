import React from 'react';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const Navbar: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <a href="/" className="text-3xl font-bold underline" >
        garp
      </a>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      null
    );
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
    <nav>
      {left}
      {right}
    </nav>
  );
};

export default Navbar;