export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className="title-font sm:text-4xl text 3xl mb-4 font-small text-white">
                        Salutations!
                    </h2>
                    <h3 className="mb-8 leading-relaxed">
                        I'm Christian Castillo, a full-stack developer with a background in writing and ediitng.
                        <br className="hidden lg:inline-block" /> I have experience with HTML, CSS, Javascript, and React.
                        If there's anything you'd like, and you want to know more, please let me know!
                    </h3>
                    <div className="flex justify-center">
                        <a href="#contact"
                            className="l-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Let's work together
                        </a>
                    </div>
                </div>
                <div className="lg:max-lg lg:w-fit md: w-1/2 w5/6">
                    {/* hero image */}
                    <img className="object-scale-down object-center rounded" alt="hero" src="../hero.png" />
                </div>
            </div>

        </section>
    )
}