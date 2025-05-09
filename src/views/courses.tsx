import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo, faFileAlt, faUsers, faShare, faCheckDouble,
  faUserCircle, faMessage, faThumbsUp, faClock, faUser,
  faArrowLeft, faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

import Bg from '../Images/profile-background.jpg';
import Mern from '../Images/Mern.jpg';
import Tab from "../components/UI/tab";
import Button from "../components/UI/button";
import Textarea from "../components/UI/textArea";
import Divider from "../components/UI/divider";
import Card from "../components/UI/card";

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
    }
  }, [videoId]);

  return (
    <video key={videoId} width="100%" height="10%" controls autoPlay crossOrigin="anonymous">
      <source src={`http://192.168.2.3:5000/videos/${videoId}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const VideoPage: React.FC = () => {
  const navigate = useNavigate();
  const [videoId, setVideoId] = useState<string | null>(null);

  // const playVideo = (e: React.MouseEvent, id: string) => {
  //   e.preventDefault();
  //   setVideoId(id);
  // };

  const playVideo = (id: string) => {
    setVideoId(id);
  };

  const tabs = [
    {
      name: 'Content',
      icon: <FontAwesomeIcon icon={faVideo} />,
      content: (
        <div className="w-full h-[calc(100vh-16.5rem)] bg-white overflow-auto border border-gray-50 flex flex-col justify-between p-4">
          {videoId && <VideoPlayer videoId={videoId} />}
          <div className="mt-4 space-x-3">
            <Button onClick={() => playVideo('cdn')} text="Play Video 1" />
            <Button onClick={() => playVideo('generate-pass')} text="Play Video 2" />
            <Button onClick={() => playVideo('get-post')} text="Play Video 3" />
          </div>
          <div className="p-4 gap-3 flex mt-4">
            <Button type='info' size='sm' variant="base">
              <FontAwesomeIcon icon={faCheckDouble} /> Mark as Complete
            </Button>
            <Button type='info' size='sm' variant="border">
              <FontAwesomeIcon icon={faShare} /> Share Course
            </Button>
          </div>
        </div>
      )
    },
    {
      name: 'Overview',
      icon: <FontAwesomeIcon icon={faFileAlt} />,
      content: (
        <div className="w-full p-5">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About This Course</h2>
          <p className="text-gray-600 text-md leading-relaxed mb-8">
            A comprehensive introduction to company policies, culture, and expectations for new employees.
            Learn about our mission, values, organizational structure, and key procedures that will help you
            integrate smoothly into our team.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Topics Covered</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Company Culture</li>
            <li>Policies</li>
            <li>Procedures</li>
            <li>Benefits</li>
          </ul>
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
      )
    },
    {
      name: 'Discussion',
      icon: <FontAwesomeIcon icon={faUsers} />,
      content: (
        <div className="w-full flex flex-col justify-between p-5">
          <h1 className="text-xl font-semibold font-serif mb-3 text-gray-600">Discussion</h1>
          <Textarea
            name="notes"
            placeholder="Add your comment or question..."
            value=""
            onChange={() => { }}
            className="border-blue-500"
            rows={4}
          />
          <div className="py-4 gap-3 flex">
            <Button type='info' size='sm' variant="base">Post Comment</Button>
          </div>
          <Divider title='Comments' />
          {[1, 2].map((_, index) => (
            <div key={index} className="p-4 rounded-lg mb-4 bg-slate-50">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold text-gray-800">Chetan Biradar</div>
                <div className="text-sm text-gray-500">2025-04-18</div>
              </div>
              <p className="text-gray-700 mb-4">
                This was really helpful for my first day!
              </p>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-md text-gray-500 border border-transparent px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white hover:border-blue-400">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span>3</span>
                </button>
                <button className="flex items-center space-x-2 text-sm text-gray-500 border border-transparent px-4 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-blue-400">
                  <FontAwesomeIcon icon={faMessage} />
                  <span>Reply</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <>
      <div className="mb-2 ml-3">
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

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-base text-gray-600">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faClock} className="text-blue-500 w-4 h-4" />
            <span>45 minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-green-500 w-4 h-4" />
            <span>Created 2025-01-17</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} className="text-indigo-500 w-4 h-4" />
            <span>Chetan Biradar</span>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faVideo} className="text-rose-500 w-4 h-4" />
            <span>Video</span>
          </div>
        </div>
      </div>

      <div className="h-[calc(100vh-12rem)]">
        <Tab tabs={tabs} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card
            key={index}
            title="The MERN Fullstack Guide"
            footer={
              <div className="flex gap-2">
                <Button text="Documentation" variant="base" color="blue" size='sm' />
                <Button text="Dismiss" variant="border" color="blue" size='sm' />
              </div>
            }
          >
            <img
              src={Mern}
              alt="The MERN Fullstack Guide"
              className="w-full h-40 rounded-md mb-4"
            />
            <p className="text-gray-600">
              In this course, we'll build an entire project and you will learn how these different technologies work together step by step. We'll first have a look at all the individual building blocks, so that we then can also combine them all into one amazing application by the end of the course.
            </p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default VideoPage;
