import React from "react";
import VideoPlayer from '../components/UI/videoPlayer';
import Bg from '../Images/profile-background.jpg';
import Tab from "../components/UI/tab";
import Button from "../components/UI/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Textarea from "../components/UI/textArea";
import Divider from "../components/UI/divider";
import { useNavigate } from 'react-router-dom';
import {
  faVideo, faFileAlt, faUsers, faShare, faCheckDouble, faUserCircle, faMessage, faThumbsUp, faClock,faUser,faArrowLeft ,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import Card from "../components/UI/card";
import Mern from '../Images/Mern.jpg'
const VideoPage: React.FC = () => {
const navigate = useNavigate();

  const tabs = [
    {
      name: 'Content',
      icon: <FontAwesomeIcon icon={faVideo} />,
      content:
        <div className="w-full h-[calc(100vh-16.5rem)] bg-white overflow-hidden border border-gray-50 flex flex-col justify-between">
          <VideoPlayer
            videoSrc="/videos/beach.mp4"
            poster={Bg}
            autoPlay={false}
            loop={true}
            muted={false}
            
          />

          <div className="p-4 gap-3 flex">
            <Button type='info' size='sm' variant="base"><FontAwesomeIcon icon={faCheckDouble} />Mark as Complete</Button>
            <Button type='info' size='sm' variant="border"><FontAwesomeIcon icon={faShare} /> Share Course</Button>
          </div>
        </div>


    },
    {
      name: 'Overview',
      icon: <FontAwesomeIcon icon={faFileAlt} />,
      content:
        <div className="w-full p-5">
          {/* Course Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About This Course</h2>
            <p className="text-gray-600 text-md leading-relaxed">
              A comprehensive introduction to company policies, culture, and expectations for new employees.
              Learn about our mission, values, organizational structure, and key procedures that will help you
              integrate smoothly into our team. This course is designed to give you the foundation you need to
              succeed in your new role.
            </p>
          </div>

          {/* Topics Covered Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Topics Covered</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li className="text-md">Company Culture</li>
              <li className="text-md">Policies</li>
              <li className="text-md">Procedures</li>
              <li className="text-md">Benefits</li>
            </ul>
          </div>

          {/* Instructor Information */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Instructor</h3>
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-5xl">
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
              <div>
                <p className="text-md font-medium text-gray-800">Chetan Biradar</p>
                <p className="text-sm text-gray-600">Instructor</p>
              </div>
            </div>
          </div>
        </div>

    },
    {
      name: 'Discussion',
      icon: <FontAwesomeIcon icon={faUsers} />,
      content:
        <div className="w-full flex flex-col justify-between p-5">
          <h1 className="text-xl font-semibold font-serif mb-3 text-gray-600">
          Discussion
        </h1>
         
          <Textarea
            // label="Notes"
            name="notes"
            placeholder="Add your comment or question..."
            value={""}
            onChange={() => { }}
            className="border-blue-500"
            rows={4}
          // required
          />
          <div className=" py-4 gap-3 flex  ">
            <Button type='info' size='sm' variant="base"> Post Comment</Button>
          </div>

<Divider title='Comments'></Divider>
          <div>
 <div className=" p-4 rounded-lg mb-4 bg-slate-50 ">
            {/* Header: Name & Date */}
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-gray-800">Chetan Biradar</div>
              <div className="text-sm text-gray-500">2025-04-18</div>
            </div>

            {/* Comment Text */}
            <p className="text-gray-700 mb-4">
              This was really helpful for my first day!
            </p>

            {/* Actions: Like and Reply */}
            <div className="flex items-center space-x-4 ">
              {/* Like Icon & Count */}
              <button className="flex items-center space-x-1 text-md text-gray-500 border border-transparent px-4 py-1 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-400">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span  >3</span>
              </button>

              {/* Reply Button */}
              <button className="flex items-center space-x-2 text-sm text-gray-500 border border-transparent px-4 py-1 rounded-md cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-400">
                <FontAwesomeIcon icon={faMessage} />
                <span>Reply</span>
              </button>
            </div>


          </div>
          <div className=" p-4 rounded-lg mb-4 bg-slate-50 ">
            {/* Header: Name & Date */}
            <div className="flex items-center justify-between mb-2">
              <div className="font-bold text-gray-800">Chetan Biradar</div>
              <div className="text-sm text-gray-500">2025-04-18</div>
            </div>

            {/* Comment Text */}
            <p className="text-gray-700 mb-4">
              This was really helpful for my first day!
            </p>

            {/* Actions: Like and Reply */}
            <div className="flex items-center space-x-4 ">
              {/* Like Icon & Count */}
              <button className="flex items-center space-x-1 text-md text-gray-500 border border-transparent px-4 py-1 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-400">
                <FontAwesomeIcon icon={faThumbsUp} />
                <span  >3</span>
              </button>

              {/* Reply Button */}
              <button className="flex items-center space-x-2 text-sm text-gray-500 border border-transparent px-4 py-1 rounded-md cursor-pointer transition-all duration-200 hover:bg-blue-500 hover:text-white hover:border-blue-400">
                <FontAwesomeIcon icon={faMessage} />
                <span>Reply</span>
              </button>
            </div>


          </div>
          </div>
         

        </div>
    }
  ];
  return (
    < >
  <div className="mb-2 ml-3">
  {/* Title + Back Button */}
  <div className="flex items-center justify-between mb-2">
    <h1 className="text-2xl md:text-2xl font-serif font-semibold text-gray-600">
      The MERN Fullstack Guide
    </h1>
   <div
  className="flex items-center gap-2 text-sm text-blue-600 hover:bg-blue-500 hover:px-3 py-1.5 rounded-md hover:text-white cursor-pointer"
  onClick={() => navigate('/dashboard')}
>
  <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
  Back to Courses
</div>

  </div>

  {/* Metadata */}
  <div className="flex flex-wrap gap-x-6 gap-y-3 text-base text-gray-600">
    {/* Duration */}
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faClock} className="text-blue-500 w-4 h-4" />
      <span>45 minutes</span>
    </div>

    {/* Created Date */}
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faCalendarAlt} className="text-green-500 w-4 h-4" />
      <span>Created 2025-01-17</span>
    </div>

    {/* Author */}
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faUser} className="text-indigo-500 w-4 h-4" />
      <span>Chetan Biradar</span>
    </div>

    {/* Type */}
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faVideo} className="text-rose-500 w-4 h-4" />
      <span>Video</span>
    </div>
  </div>
</div>


      <div className="h-[calc(100vh-12rem)]">
        <Tab tabs={tabs} />
      </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-2'>
        {/* Example 1: Basic Card with Buttons */}

        <Card
          title="The MERN Fullstack Guide"
          footer={
            <div className="flex gap-2">
            <Button text="Documentation" variant="base" color="blue" href="#" onClick={() =>  {}} size='sm' />
            <Button text="Dismiss" variant="border" color="blue" href="#" onClick={() =>  {}} size='sm' />  
            </div>
          }
        >
          <img
            src={Mern}
            alt="The MERN Fullstack Guide"
            className="w-full h-40 rounded-md mb-4"
          />
          <p className="text-gray-600">
            In this course, we'll build an entire project and you will learn how these different technologies work together step by step.
             We'll first have a look at all the individual building blocks, 
             so that we then can also combine them all into one amazing application by the end of the course.
          </p>
        </Card>


        <Card
          title="The MERN Fullstack Guide"
          footer={
           <div className="flex gap-2">
            <Button text="Documentation" variant="base" color="blue" href="#" onClick={() =>  {}} size='sm' />
            <Button text="Dismiss" variant="border" color="blue" href="#" onClick={() =>  {}} size='sm' /> 
            </div>
          }
        >
          <img
            src={Mern}
            alt="The MERN Fullstack Guide"
            className="w-full h-40 rounded-md mb-4"
          />
          <p className="text-gray-600">
            In this course, we'll build an entire project and you will learn how these different technologies work together step by step.
             We'll first have a look at all the individual building blocks,
              so that we then can also combine them all into one amazing application by the end of the course.
          </p>
        </Card>


        <Card
          title="The MERN Fullstack Guide"
          footer={
            <div className="flex gap-2">
            <Button text="Documentation" variant="base" color="blue" href="#" onClick={() =>  {}} size='sm' />
            <Button text="Dismiss" variant="border" color="blue" href="#" onClick={() =>  {}} size='sm' />
 
            </div>
          }
        >
          <img
            src={Mern}
            alt="The MERN Fullstack Guide"
            className="w-full h-40 rounded-md mb-4"
          />
          <p className="text-gray-600">
           In this course, we'll build an entire project and you will learn how these different technologies work together step by step.
            We'll first have a look at all the individual building blocks, 
            so that we then can also combine them all into one amazing application by the end of the course.
          </p>
        </Card>


      </div>
    </>
  );
};

export default VideoPage;
