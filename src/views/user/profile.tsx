/*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : profile.tsx
*
* Description      : profile
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
import React from 'react';
import backgroundImage from '../../Images/profile-background.jpg';
import Profile from '../..//Images/ChetanProfile.jpg'
 import Button from '../../components/UI/button';
 import Input from '../../components/UI/input';
import { useUserContext} from '../../contextApi/loginContext';
 const UserProfileCard: React.FC = () => {
    const { user } = useUserContext();
    return (
        <div className="z-1 w-full p-4">
            {/* Main Grid: 1 column on small screens, 12 on extra large */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">

                {/* Full-width Profile Card */}
                <div className="xl:col-span-12 bg-white rounded-lg shadow-xl pb-8 relative w-full">
                    {/* Cover Photo */}
                    <div className="w-full h-[250px]">
                        <img
                            src={backgroundImage}
                            className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
                            alt="cover"
                        />
                    </div>

                    {/* Profile Info */}
                    <div className="flex flex-col items-center -mt-20">
                        <img
                            src={Profile}
                            className="w-40 h-40 object-cover object-center border-4 border-white rounded-full"
                            alt="profile"
                        />
                        <div className="flex items-center space-x-2 mt-2">
                            <p className="text-2xl">Chetan</p>
                            <span className="bg-blue-500 rounded-full p-1" title="Verified">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                        </div>
                        <p className="text-gray-700">Software Engineer at Alten</p>
                        <p className="text-sm text-gray-500">Bangalore, India</p>
                    </div>
                </div>

                {/* Personal Info Card */}
                <div className="xl:col-span-6 bg-white rounded-lg shadow-xl p-8 w-full">
                    <h4 className="text-xl text-gray-900 font-bold mb-4">Personal Info</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-y-2 gap-x-6 text-gray-700 text-sm">
                        <InfoItem label="Full name:" value="Chetan Biradar" />
                        <InfoItem label="Birthday:" value="17 Jan, 2000" />
                        <InfoItem label="Joined:" value="08 Aug 2022" />
                        <InfoItem label="Mobile:" value="9844939479" />
                        <InfoItem label="Email:" value={String(user?.email || "N/A")} />
                        <InfoItem label="Location:" value="Bangalore, India" />
                        <InfoItem label="Languages:" value="English, Hindi, Kannada" />
                    </ul>
                </div>

                {/* Update Password Card */}
                <div className="xl:col-span-6 bg-white rounded-lg shadow-xl p-8 w-full ">
                    <h4 className="text-xl text-gray-900 font-bold mb-4">Update Password</h4>
                    <form className="space-y-4">
                        <div>
                            <Input
                                id="old_password"
                                name="old password"
                                label="Enter Old Password"
                                type="password"
                                placeholder="Enter Old Password"
                                // onChange={(val) => setValue(val)}
                                value={"value"}
                                // disabled={true}
                                // errorMsg='Field disabled'
                            />
                        </div>
                        <div> 
                            <Input
                                id="new_password"
                                name="new password"
                                label="Enter new password"
                                type="password"
                                placeholder="Enter new password"
                                // onChange={(val) => setValue(val)}
                                value={"value"}

                            />

                        </div>
                        <div>
                            <Input
                                id="re_password"
                                name="re password"
                                label="Re enter new password"
                                type="password"
                                placeholder="Re enter new password"
                                // onChange={(val) => setValue(val)}
                                value={"value"}

                            />

                        </div>
                        <div className='mt-5'>
                                <Button  text='Update Password' type='info' fullwidth onClick={() => console.log("loged")}  size='sm' />
                        </div> 
                    </form>
                </div>

            </div>
        </div>
    );
};

// Subcomponents
const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <li className="flex border-b py-2">
        <span className="font-bold w-24">{label}</span>
        <span>{value}</span>
    </li>
);


export default UserProfileCard;
