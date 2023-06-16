import React from 'react';

function Testimonials() {
    // Fake testimonial data
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            position: 'Professional Athlete',
            quote: 'The training at this academy is unparalleled. It has helped me push my limits and achieve new heights in my career.',
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Parent of an Athlete',
            quote: 'My child has shown remarkable progress since joining this academy. The coaches are knowledgeable and provide excellent guidance.',
        },
        {
            id: 3,
            name: 'Michael Johnson',
            position: 'Olympic Gold Medalist',
            quote: 'I highly recommend this academy to aspiring athletes. They provide top-notch facilities and a supportive environment for growth.',
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <p className="text-lg mb-4">{testimonial.quote}</p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    {/* <img src="testimonial-avatar.jpg" alt={testimonial.name} className="h-12 w-12 rounded-full" /> */}
                                </div>
                                <div className="ml-4">
                                    <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                                    <div className="text-gray-500">{testimonial.position}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
