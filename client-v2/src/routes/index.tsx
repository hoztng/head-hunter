// src/routes/PublicRoutes.ts
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '@views/HomePage';
import AboutPage from '@views/AboutPage';
import NotFoundPage from '@views/NotFoundPage';

const PublicRoutes:React.FC = () => {
  const basePath = import.meta.env.BASE_URL;
  return (
    <Routes>
      <Route path={`/${basePath}`} element={<HomePage/>} />
      {/* <Route path="/head-hunter" element={<HomePage/>} /> */}
      <Route path={`/${basePath}about`}  element={<AboutPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );

};

export default PublicRoutes;