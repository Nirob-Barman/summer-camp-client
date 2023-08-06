import React from 'react';

const SocialMediaIntegration = () => {
    const socialMediaData = [
        {
            id: 1,
            platform: 'Twitter',
            username: 'elite_sport_academy',
            followers: 12000,
            icon: 'bx bxl-twitter',
        },
        {
            id: 2,
            platform: 'Facebook',
            username: 'elite.sport.academy',
            followers: 24000,
            icon: 'bx bxl-facebook',
        },
        {
            id: 3,
            platform: 'Instagram',
            username: 'elite_sport_academy',
            followers: 35000,
            icon: 'bx bxl-instagram',
        },
        {
            id: 4,
            platform: 'LinkedIn',
            username: 'elite-sport-academy',
            followers: 5000,
            icon: 'bx bxl-linkedin',
        },
    ];

    return (
        <div className="container mx-auto p-4 max-w-4xl mt-20"> 
            <div className="flex flex-wrap">
                {socialMediaData.map((socialMedia) => (
                    <div
                        key={socialMedia.id}
                        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-4">
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <i className={socialMedia.icon + ' text-4xl text-blue-500'}></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">{socialMedia.platform}</h4>
                                    <p className="text-gray-500">@{socialMedia.username}</p>
                                    <p className="text-gray-500">{socialMedia.followers} followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaIntegration;
