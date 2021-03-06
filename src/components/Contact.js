import React from "react";

export default function Contact() {

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative"> */}
                {/* <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"> */}
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        LOCATION
                    </h2>
                    <p className="mt-1">
                        Riverside, CA; Remote
                    </p>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        OTHER
                    </h2>
                    <p className="underline mt-1">
                        <a href="https://chriscast94.journoportfolio.com/">Writer Portfolio</a>
                    </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        EMAIL
                    </h2>
                    <p className="text-indigo-400 leading-relaxed">
                        chriscast94@outlook.com
                    </p>
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                        PHONE
                    </h2>
                    <p className="leading-relaxed">951-733-5087</p>
                </div>
                {/* </div> */}
                {/* </div> */}

            </div>
        </section>
    );
}