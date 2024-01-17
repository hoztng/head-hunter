// src/routes/PublicRoutes.ts
import React, { useLayoutEffect }  from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@views/HomePage';
import AboutPage from '@views/AboutPage';
import NotFoundPage from '@views/NotFoundPage';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      {/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
};

export default PublicRoutes;