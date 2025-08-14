'use client';

import * as React from 'react';

interface IErrorPageProps {
  error?: Error;
}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = ({ error }) => {
  return (
    <section>
      <h1>Something went wrong</h1>
      <p>{error?.message || "We are sorry for the inconvenience. Please try again later."}</p>
      <p>If the problem persists, contact support.</p>
    </section>
  );
};

export default ErrorPage;
