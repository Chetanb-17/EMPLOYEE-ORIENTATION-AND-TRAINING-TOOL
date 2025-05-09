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


/////-----------------------

import React, { useEffect, useState } from 'react';
import backgroundImage from '../../Images/profile-background.jpg';
import Button from '../../components/UI/button';
import Input from '../../components/UI/input';

import { baseURL } from '../../config/config';

const UserProfileCard: React.FC = () => {
    const [profileData, setProfileData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const username = localStorage.getItem('username');

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch(`${baseURL}profile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userName: username }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }

                const { data } = await response.json();
                console.log("Profile data:", data);

                setProfileData({
                    userName: data.userName,
                    email: data.email,
                    role: data.roleTypeId === 1 ? 'Admin' :
                        data.roleTypeId === 2 ? 'Controller' : 'User',
                    employeeId: data.employeeId,
                    userId: data.userId,
                    createdAt: new Date(data.createdAt).toLocaleDateString(),
                    createdBy: data.createdBy
                });
            } catch (err) {
                console.error('Error fetching profile:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [username]);

    const getInitial = () => {
        if (!profileData) return '';

        // Try to get initials from email first
        if (profileData.email) {
            const emailName = profileData.email.split('@')[0];
            const parts = emailName.split('.');
            const first = parts[0]?.charAt(0).toUpperCase() || '';
            const second = parts[1]?.charAt(0).toUpperCase() || '';
            return first + second;
        }

        return '';
    };

    const getFullNameFromEmail = (): string => {
        if (!profileData?.email) return '';
        const emailName = profileData.email.split('@')[0];
        const parts = emailName.split('.');
        const firstName = parts[0]?.charAt(0).toUpperCase() + parts[0]?.slice(1) || '';
        const lastName = parts[1]?.charAt(0).toUpperCase() + parts[1]?.slice(1) || '';
        return `${firstName} ${lastName}`.trim();
    };

    const randomColor = () => {
        const colors = ['#31C7C8', '#002657', '#0398d7', '#0367ba', '#012540', '#44Cace'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    if (loading) return <div className="text-center mt-10">Loading profile...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
    if (!profileData) return <div className="text-center mt-10">No profile data found</div>;

    return (
        <div className="z-1 w-full p-4">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                {/* Profile Card */}
                <div className="xl:col-span-12 bg-white rounded-lg shadow-xl pb-8 relative w-full">
                    {/* Cover Photo */}
                    <div className="w-full h-[250px] bg-gradient-to-r from-blue-500 to-blue-700 rounded-tl-lg rounded-tr-lg"></div>

                    {/* Profile Info */}
                    <div className="flex flex-col items-center -mt-20">
                        <div
                            className="w-40 h-40 flex items-center justify-center border-4 border-white rounded-full text-white text-4xl font-bold overflow-hidden z-10"
                            style={{ backgroundColor: randomColor() }}
                        >
                            {getInitial()}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                            <p className="text-2xl">{getFullNameFromEmail()}</p>
                            <span className="bg-blue-500 rounded-full p-1" title="Verified">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                        </div>
                        <p className="text-gray-700">{profileData.role}</p>
                        <p className="text-sm text-gray-500">Employee ID: {profileData.employeeId}</p>
                    </div>
                </div>

                {/* Personal Info */}
                <div className="xl:col-span-6 bg-white rounded-lg shadow-xl p-8 w-full">
                    <h4 className="text-xl text-gray-900 font-bold mb-4">Personal Info</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-y-2 gap-x-6 text-gray-700 text-sm">
                        <InfoItem label="Full name:" value={getFullNameFromEmail()} />
                        <InfoItem label="Username:" value={profileData.userName} />
                        <InfoItem label="Email:" value={profileData.email} />
                        <InfoItem label="Employee ID:" value={profileData.employeeId} />
                        <InfoItem label="User ID:" value={profileData.userId} />
                        <InfoItem label="Account created:" value={profileData.createdAt} />
                        <InfoItem label="Created by:" value={profileData.createdBy} />
                    </ul>
                </div>

                {/* Update Password */}
                <div className="xl:col-span-6 bg-white rounded-lg shadow-xl p-8 w-full">
                    <h4 className="text-xl text-gray-900 font-bold mb-4">Update Password</h4>
                    <form className="space-y-4">
                        <Input
                            id="old_password"
                            name="old_password"
                            label="Enter Old Password"
                            type="password"
                            placeholder="Enter Old Password"
                            value=""
                        />
                        <Input
                            id="new_password"
                            name="new_password"
                            label="Enter new password"
                            type="password"
                            placeholder="Enter new password"
                            value=""
                        />
                        <Input
                            id="re_password"
                            name="re_password"
                            label="Re enter new password"
                            type="password"
                            placeholder="Re enter new password"
                            value=""
                        />
                        <div className="mt-5">
                            <Button
                                text="Update Password"
                                type="info"
                                fullwidth
                                onClick={() => console.log('Updated!')}
                                size="sm"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <li className="flex border-b py-2">
        <span className="font-bold w-36">{label}</span>
        <span className="text-gray-700">{value}</span>
    </li>
);

export default UserProfileCard;