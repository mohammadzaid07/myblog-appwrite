import React from 'react';

function ContactUs() {
    return (
        <div className="max-w-3xl h-[75vh] mx-auto py-18 text-gray-800">
            <h1 className="text-3xl py-2 font-bold mb-4">Contact Us</h1>

            <p className="mb-4 py-2">
                If you have any questions, feedback, or collaboration ideas, feel free to reach out. I'm always open to connecting!
            </p>

            <div className="space-y-4 py-2">
                <p>
                    📧 <span className="font-medium">Email:</span>{' '}
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdzaid07091997@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        mohdzaid07091997@gmail.com
                    </a>
                </p>

                <p>
                    💼 <span className="font-medium">LinkedIn:</span>{' '}
                    <a
                        href="https://www.linkedin.com/in/mohammadzaid07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        mohammadzaid07
                    </a>
                </p>
            </div>

            <p className="mt-18 text-sm  text-gray-500">
                I usually respond within 6 hours.
            </p>
        </div>
    );
}

export default ContactUs;
