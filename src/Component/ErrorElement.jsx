import { useRouteError } from 'react-router-dom';
import React from 'react';
export const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h4 className="font-bold text-4xl">There was an error, Refresh and try again</h4>
    </div>
  );
};

