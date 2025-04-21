 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : Dashboard.tsx
*
* Description      : Dashboard
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
import React, { useState } from 'react';  
import ProCard from "../components/UI/proCard";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
 faVideo, faHeadphones, faFileAlt, faUsers
} from '@fortawesome/free-solid-svg-icons';
import {  faGraduationCap ,faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import Tab from "../components/UI/tab";
import SearchField from "../components/UI/searchInput";
import Select from '../components/UI/select';
import Button from '../components/UI/button';
import Card from '../components/UI/card';
   const App = () => { 
    const [searchTerm, setSearchTerm] = useState('');

    const [headliner, setHeadliner] = useState("");

  const guitarLegends = [
    { label: "All Types", value: "All Types" },
    { label: "Videos", value: "Videos" },
    { label: "Audios", value: "Audios" },
    { label: "PDF", value: "PDF" },
    { label: "Excel", value: "Excel" },
    { label: "Documents", value: "Documents" },
   ];
  
    const handleSearch = () => {
      console.log('Searching for:', searchTerm);
    };
  
    const tabs = [
       {
        name: 'Web Developement',
          active: true,
        // icon: <SettingsIcon />,
          content:
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
      <ProCard
        title="TypeScript"
        // image="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
        image="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
        content="Learn TypeScript from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/courses"
/>
 <ProCard
        title="JavaScript"
         image="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        content="Learn JavaScript from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/courses"
/>
<ProCard
        title="React JS"
         image="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
        content="Learn React js from the ground up and finish the course as an advanced React developer."
        buttonText="Learn More"
        buttonLink="/courses"
/>
 <ProCard
        title="HTML"
         image="https://cdn-icons-png.flaticon.com/512/5968/5968267.png"
        content="Learn HTML from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/courses"
/>
<ProCard
        title="CSS"
         image="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
        content="Learn CSS from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/courses"
/>
<ProCard
        title="Redux"
         image="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
        content="Learn Redux from the ground up and finish the course as an advanced React developer"
        buttonText="Learn More"
        buttonLink="/courses"
/>

      </div>
      },
      {
        name: 'Data Science',
        // icon: <HomeIcon />,
        content: 'Welcome to the Home Tab!'
      },
      {
        name: 'Leadership',
        // icon: <ProfileIcon />,
        content: 'This is your profile information.'
      },
     
      {
        name: 'Communication',
        // icon: <ContactIcon />,
        content: 'Reach us via email or phone.'
      },
      {
        name: 'Bussinsess Analytics',
        // icon: <HelpIcon />,
        content: 'Find FAQs and support options here.'
      },
      {
        name: 'AI',
        // icon: <AboutIcon />,
           content: 'Find FAQs and support options here.'
      }
    ];

  return (
 <>
 <div>
   <h1 className="text-2xl font-semibold font-serif">
    <FontAwesomeIcon icon={faGraduationCap}/> All the skills you need in one place
  </h1>
 </div>
 
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
  {/* Total Videos */}
  <Card>
    <div className="flex justify-between items-center p-6 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg">
      <div className="text-3xl sm:text-3xl">
        <FontAwesomeIcon icon={faVideo} />
      </div>
      <div className="text-right">
        <p className="text-xl font-bold">204</p>
        <span className="text-sm opacity-80">Total Videos</span>
      </div>
    </div>
  </Card>

  {/* Total Audio */}
  <Card>
    <div className="flex justify-between items-center p-6 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg">
      <div className="text-3xl sm:text-3xl">
        <FontAwesomeIcon icon={faHeadphones} />
      </div>
      <div className="text-right">
        <p className="text-xl font-bold">98</p>
        <span className="text-sm opacity-80">Total Audio</span>
      </div>
    </div>
  </Card>

  {/* Total Documents */}
  <Card>
    <div className="flex justify-between items-center p-6 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 text-white shadow-lg">
      <div className="text-3xl sm:text-3xl">
        <FontAwesomeIcon icon={faFileAlt} />
      </div>
      <div className="text-right">
        <p className="text-xl font-bold">332</p>
        <span className="text-sm opacity-80">Total Documents</span>
      </div>
    </div>
  </Card>

  {/* Total Users */}
  <Card>
    <div className="flex justify-between items-center p-6 rounded-lg bg-gradient-to-r from-rose-600 to-rose-500 text-white shadow-lg">
      <div className="text-2xl sm:text-3xl">
        <FontAwesomeIcon icon={faUsers} />
      </div>
      <div className="text-right">
        <p className="text-xl font-bold">328</p>
        <span className="text-sm opacity-80">Total Users</span>
      </div>
    </div>
  </Card>
</div>


 

<br />
 
 <div>
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8">
    <SearchField 
      name="search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onSubmit={handleSearch}
      placeholder="Type something to search..."
    />
  </div>

  <div className="col-span-12 sm:col-span-12 md:col-span-2 lg:col-span-2 xl:col-span-2">
    <Select
      label="Headliner"
      name="headliner"
      value={headliner}
      onChange={(e) => setHeadliner(e.target.value)}
      options={guitarLegends}
      disabled={false}
    />
  </div>
    
  <div className="col-span-12 sm:col-span-12 md:col-span-2 lg:col-span-2 xl:col-span-2">
    <Button  fullwidth variant='base' onClick={() =>  console.log("")} type="info" size='sm' >Add New Course <FontAwesomeIcon icon={faCirclePlus} /> </Button>
  </div>
</div>

  </div>
  <div className='mt-5'>
   <Tab tabs={tabs}/> 

  </div>
 </>   
  );
};

export default App;
