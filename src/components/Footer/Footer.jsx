import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <section className="relative overflow-hidden py-4 rounded-md bg-amber-200 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-6/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex justify-center">
                                <Logo width="80px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-700">
                                    &copy; {new Date().getFullYear()} Mohammad Zaid. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Contact */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12 flex items-center justify-center">
                        <Link
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/contact-us"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Terms */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12 flex items-center justify-center">
                        <Link
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/terms-and-conditions"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                    {/* Privacy */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12 flex items-center justify-center">
                        <Link
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                            to="/privacy-policy"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer