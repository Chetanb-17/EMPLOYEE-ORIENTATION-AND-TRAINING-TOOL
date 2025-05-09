/*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : app.tsx
*
* Description      : App
*
* Author(s)        : Chetan Biradar
*
* Version History:
* <Version Number>                 <Author>                <date>        <defect Number>      <Modification
*                                                                                           made and the
*                                                                                           reason for
*                                                                                           modification >
*  1.0                            Chetan Biradar          14-04-2025         --              initial version
*
* References        :
*                     
* Assumption(s)     : None.
*                     
* Constraint(s)     : None.
*                     
****************************************************************************
*/
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Home from './views/home';
import Login from './views/login';
import DefaultLayout from './layout/layout';
import { LoginContextProvider } from './contextApi/loginContext'



function App() {
  return (
    <BrowserRouter>
      {/* <LoginContextProvider> */}
        <Routes>
          {/* Public routes OUTSIDE layout */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={<Login />} /> */}

          {/* Protected routes INSIDE layout */}
          <Route path="*" element={<DefaultLayout />}>
            {/* Nested route is lazy-loaded inside the layout */}
          </Route>

        </Routes>
      {/* </LoginContextProvider> */}
    </BrowserRouter>
  );
}

export default App;

