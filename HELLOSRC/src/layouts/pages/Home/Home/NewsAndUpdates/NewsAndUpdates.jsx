import React from 'react';

function NewsAndUpdates() {
    // Fake news data
    const news = [
        {
            id: 1,
            title: 'New Training Program Launch',
            date: '2023-06-10',
            description:
                'We are excited to announce the launch of our new training program designed to enhance performance and skills. Join us to take your game to the next level!',
        },
        {
            id: 2,
            title: 'Upcoming Sports Event',
            date: '2023-07-05',
            description:
                "Mark your calendars! We have an exciting sports event coming up where athletes from around the world will compete for glory. Don't miss the action!",
        },
        {
            id: 3,
            title: 'Expansion of Facilities',
            date: '2023-08-20',
            description:
                'We are thrilled to announce the expansion of our facilities, including a new state-of-the-art gymnasium and upgraded training fields. More space, more opportunities!',
        },
        {
            id: 4,
            title: 'New Nutrition Workshop',
            date: '2023-09-15',
            description:
                'Join our upcoming nutrition workshop to learn about proper fueling for athletes. Our experts will share valuable insights and tips for optimizing your performance.',
        },
        {
            id: 5,
            title: 'Featured Athlete of the Month',
            date: '2023-10-02',
            description:
                'We are proud to recognize John Davis, one of our exceptional athletes, for his outstanding achievements and dedication. Read his inspiring journey here.',
        },
        {
            id: 6,
            title: 'Sports Psychology Seminar',
            date: '2023-11-18',
            description:
                'Unlock your mental game! Attend our sports psychology seminar, where you will learn valuable techniques to enhance focus, resilience, and mental well-being.',
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">News and Updates</h2>
                <div className="space-y-6 md:space-y-8">
                    {news.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-500 mb-2">
                                Date: {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <p className="text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsAndUpdates;
