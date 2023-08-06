import React from 'react';

function EventCalendar() {
    // Fake event data
    const events = [
        {
            id: 1,
            title: 'Basketball Training Camp',
            date: '2023-06-25',
            time: '10:00 AM - 2:00 PM',
            location: 'Sports Complex',
        },
        {
            id: 2,
            title: 'Football Tournament',
            date: '2023-07-10',
            time: '8:00 AM - 6:00 PM',
            location: 'Stadium',
        },
        {
            id: 3,
            title: 'Swimming Competition',
            date: '2023-07-18',
            time: '1:00 PM - 4:00 PM',
            location: 'Aquatics Center',
        },
        {
            id: 4,
            title: 'Tennis Workshop',
            date: '2023-08-05',
            time: '9:00 AM - 12:00 PM',
            location: 'Tennis Courts',
        },
        {
            id: 5,
            title: 'Athletics Tryouts',
            date: '2023-08-15',
            time: '3:00 PM - 6:00 PM',
            location: 'Athletics Field',
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Event Calendar</h2>
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                            <p className="text-gray-500 mb-2">
                                Date: {new Date(event.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                            <p className="text-gray-500 mb-2">Time: {event.time}</p>
                            <p className="text-gray-500">Location: {event.location}</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                                Enroll
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EventCalendar;
