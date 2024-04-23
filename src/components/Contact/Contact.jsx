import React from 'react';

export default function Contact() {
    return (
        <section id='contact'>
            <div className="py-8 lg:py-16 px-4 mx-auto mt-30 max-w-screen-md">
                <div className='bg-orange-100 shadow-black shadow-2xl text-center rounded-lg lg:w-auto'>
                    <div className="p-6">
                        <h2 className="p-4 mb-4 text-4xl tracking-tight font-extrabold text-center text-rose-800">
                            Get in Touch
                        </h2>
                        <p className="mb-5 lg:mb-10 font-light text-center text-gray-900 sm:text-xl">
                            Wanna talk? Send me a message!
                        </p>
                        <form 
                            className="emailForm space-y-2 text-left text-black" 
                            action="https://formsubmit.co/cmmurphey@gmail.com" 
                            method="POST" 
                            enctype="multipart/form-data">
                            <input type="hidden" name="_template" value="table" />
                            <div class="columns-2">
                                <div>
                                    <label for="fname" className="block mb-2 text-sm font-medium">
                                        First Name
                                    </label>
                                    <input type="text" id="fname" className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-rose-950 
                                        focus:border-rose-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-rose-950 
                                        dark:focus:border-rose-950 dark:shadow-sm-light" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="lname" className="block mb-2 text-sm font-medium">
                                        Last Name
                                    </label>
                                    <input type="text" id="lname"  className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-rose-950 
                                        focus:border-rose-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-rose-950 
                                        dark:focus:border-rose-950 dark:shadow-sm-light" placeholder="Doe" required />
                                </div>
                            </div>
                            <div class="columns-2">
                                <div>
                                    <label htmlFor="companyName" className="block mb-2 text-sm font-medium">
                                        Company
                                    </label>
                                    <input type="text" id="companyName" className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-rose-950 
                                        focus:border-rose-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-rose-950 
                                        dark:focus:border-rose-950 dark:shadow-sm-light" placeholder="N/A if None" required />
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-rose-950 
                                        focus:border-rose-950 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-rose-950 
                                        dark:focus:border-rose-950 dark:shadow-sm-light" placeholder="mail@testmail.com" required />
                                </div>
                            </div>
                            <div>
                                <label for="_subject" className="block mb-2 text-sm font-medium">
                                    Subject
                                </label>
                                <input type="text" name="_subject" id="subject" className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-rose-950 
                                    focus:border-rose-950 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-rose-950 
                                    dark:focus:border-rose-950  dark:shadow-sm-light" placeholder="I.e. In need of Web Design" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label for="message" className="block mb-2 text-sm font-medium">
                                    Message
                                </label>
                                <textarea id="message" name="message" rows="10" className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-rose-950 
                                    focus:border-rose-950 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-rose-950 
                                    dark:focus:border-rose-950 " placeholder="Your message here...">
                                </textarea>
                            </div>
                            <div class="text-center">
                                <button type="submit" value="Submit" className="inline-block lg:mb-5 rounded-full shadow-2xl bg-blue-500 px-6 pb-2 pt-2.5 text-lg text-white transition duration-200 ease-in hover:bg-violet-950">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};
