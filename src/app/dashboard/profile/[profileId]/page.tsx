import React from 'react';

const ProfiledetailsPage = async ({ params }: { params: Promise<{ profileId: string }>}) => {
    console.log('params', params);  
    const { profileId } = await params;

    return (
        <div>
            <h1 className="text-2xl font-bold">Profile Details Page : {profileId}</h1>
        </div>
    );
};

export default ProfiledetailsPage;