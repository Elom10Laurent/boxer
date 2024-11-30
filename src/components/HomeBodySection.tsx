// motion
import { motion } from "framer-motion";
//variants
import fadeIn from "../variants"

import picture1 from '../assets/rename.png'
import picture2 from '../assets/momie.png'



const disciplines = [1, 2, 3]

const HomeBodySection = () => {
    return (
        <main>
            <section className='my-10' >
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <h2 className="text-3xl mb-6 text-center  text-gray-900">
                        Avenir de la boxe
                    </h2>
                </motion.div>
                <div className="flex flex-col  md:flex-row-reverse xl:mx-28 lg:gap-20 md:gap-0 sm:gap-8 items-center justify-center p-4">

                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className=" relative flex flex-col justify-center  px-6  lg:gap-0 xl:gap-24 max-w-lg md:w-1/2  ">
                        <div
                            className="absolute lg:-top-10  xl:h-[60vh] xl:w-[40vh] lg:h-96 lg:w-96 h-64 w-64 bgColorRed opacity-30 transform -rotate-12"
                            style={{
                                clipPath: "polygon(0% 20%, 100% 0, 100% 100%, 20% 100%)"
                            }}
                        ></div>
                        <h2 className="text-4xl mb-6 font-bold text-gray-900">
                            Qui sommes-nous ?
                        </h2>
                        <p className="lg:text-lg mb-8 font-medium text-gray-700">
                            Nous sommes une communauté de passionnés de boxe, dédiés à booster votre
                            santé, votre confiance et vos compétences, peu importe votre âge ou votre
                            niveau. Fondée il y a plusieurs années par des amoureux de la boxe, notre
                            association croit fermement que ce sport a le pouvoir de transformer des
                            vies. Rejoignez-nous et découvrez comment la boxe peut vous aider à
                            devenir la meilleure version de vous-même !
                        </p>
                        <div className="flex items-center  gap-4">
                            <a
                                href="#"
                                className="text-sm flex rounded-md px-4 py-2 bg-red-700 font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white"
                                aria-label="Discover our family"
                            >
                                Notre famille
                            </a>
                            <a
                                href="#integration"
                                className="font-semibold text-indigo-600 hover:underline"
                                aria-label="Learn about integration"
                            >
                                Intégration
                            </a>
                        </div>
                    </motion.div>



                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }} className=" md:w-1/2">
                        <img
                            className="rounded-md w-full  "
                            src="https://media.istockphoto.com/id/913075072/fr/photo/portrait-des-sportifs-heureux-d%C3%A2ges-diff%C3%A9rents.webp?a=1&b=1&s=612x612&w=0&k=20&c=UZBKIqdonrfcAIUE-SJ2qK94BYmMZP6gRTNeHgSS2XU="
                            alt="A group of happy athletes of different ages"
                        />
                    </motion.div>

                </div>

                <div className=" mt-10  md:flex lg:mx-28 lg:gap-20 md:gap-0 sm:gap-8  justify-between p-4  ">
                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <h2 className="text-4xl mb-10 font-bold text-gray-900  ">
                            Notre Mission
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("down", 0.6)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.4 }}
                        className=' flex flex-col gap-y-4 md:w-1/2 ' >
                        <p className="text-lg font-medium ">
                            Notre association de boxe est dédiée à promouvoir la santé,
                            la confiance et les compétences pour tous, quel que soit l'âge ou le niveau. Fondée par des passionnés,
                            nous croyons en la capacité de la boxe à améliorer la vie.
                        </p>
                        <div className='flex flex-col gap-y-4  md:w-1/2'>
                            <p>

                                <a href="">Développement personnel <span aria-hidden="true">&rarr;</span></a>
                            </p>
                            <p>

                                <a href="">Communauté inclusive<span aria-hidden="true">&rarr;</span></a>
                            </p>
                            <p>

                                <a href="">Passion et expertise <span aria-hidden="true">&rarr;</span></a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section>
                <div className="flex flex-col "  >
                    <h2 className="text-4xl mb-10 text-center font-semibold  text-gray-900">
                        Temoignage
                    </h2>

                    <div className=" rounded-md lg:flex md:gap-y-0 gap-y-10 m-auto justify-center lg:gap-20 md:gap-0 sm:gap-8 p-4 ">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}
                            className=" h-full flex flex-col relative">
                            <div className="sm:flex m-aut gap-x-6 sm:flex-row flex-row-reverse items-center sm:ms-24 relative z-10 ">
                                <img
                                    className="h-80 w-56 rounded-md"
                                    src={picture1}
                                    alt="temoignage"
                                />
                                <span className=" relative w-64 flex flex-col gap-y-1">
                                    <div className="absolute -top-2 left-20 h-24 w-24 bgColorTeal rounded-full opacity-30 transform rotate-12"></div>

                                    <p className="text-red-700 text-sm">Consultant, économiste</p>
                                    <p className="text-lg font-semibold text-gray-800">Bila Komlan</p>
                                    <p className="text-sm text-gray-600">
                                        Notre association de boxe est dédiée à promouvoir la santé, la confiance et les compétences pour tous, quel que soit l'âge ou le niveau.
                                    </p>
                                </span>
                            </div>

                            <div className="sm:flex gap-x-6 items-center justify-star  md:-mt-20 relative z-30">
                                <img
                                    className="h-80 w-56 rounded-md"
                                    src={picture2}
                                    alt="temoignage"
                                />
                                <span className=" relative w-64 flex flex-col gap-y-1">
                                    <div className="absolute -top-2 left-20 h-24 w-24 bgColorRed rounded-full opacity-30 transform rotate-12"></div>

                                    <p className="text-red-700 text-sm">Étudiant</p>
                                    <p className="text-lg font-semibold text-gray-800">Nyom Adekunle</p>
                                    <p className="text-sm text-gray-600">
                                        Notre association de boxe est dédiée à promouvoir la santé, la confiance et les compétences pour tous, quel que soit l'âge ou le niveau.
                                    </p>
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn("left", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.3 }}

                            className=" h-full xl:flex hidden flex-col  relative">
                            <div className="sm:flex  m-aut gap-x-6 sm:flex-row flex-row-reverse items-center sm:ms-24 relative z-10 ">
                                <img
                                    className="h-80 w-56 rounded-md"
                                    src="https://i.pinimg.com/236x/3c/04/b3/3c04b317457b59537203e12f522d7aa7.jpg"
                                    alt="temoignage"
                                />
                                <span className=" relative w-64 flex flex-col gap-y-1">
                                    <div className="absolute -top-2 left-20 h-24 w-24 bgColorRed rounded-full opacity-30 transform rotate-12"></div>

                                    <p className="text-red-700 text-sm">Consultant, économiste</p>
                                    <p className="text-lg font-semibold text-gray-800">Bila Komlan</p>
                                    <p className="text-sm text-gray-600">
                                        Notre association de boxe est dédiée à promouvoir la santé, la confiance et les compétences pour tous, quel que soit l'âge ou le niveau.
                                    </p>
                                </span>
                            </div>

                            <div className="sm:flex gap-x-6 items-center justify-star  md:-mt-20 relative z-30">
                                <img
                                    className="h-80 w-56 rounded-md"
                                    src="https://i.pinimg.com/474x/e3/c6/40/e3c640734520dec50102a99f4702d685.jpg"
                                    alt="temoignage"
                                />
                                <span className=" relative w-64 flex flex-col gap-y-1">
                                    <div className="absolute -top-2 left-20 h-24 w-24 bgColorTeal rounded-full opacity-30 transform rotate-12"></div>

                                    <p className="text-red-700 text-sm">Étudiant</p>
                                    <p className="text-lg font-semibold text-gray-800">Nyom Adekunle</p>
                                    <p className="text-sm text-gray-600">
                                        Notre association de boxe est dédiée à promouvoir la santé, la confiance et les compétences pour tous, quel que soit l'âge ou le niveau.
                                    </p>
                                </span>
                            </div>
                        </motion.div>

                    </div>


                </div>
            </section>

            <section>

                <div className="mt-10 lg:mx-28 p-4">
                    <div>
                        <h2 className="text-4xl mb-10 font-bold text-gray-900">Nos Disciplines</h2>
                    </div>
                    <div className="relative overflow-hidden">
                        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            {disciplines.map((i) => (
                                <div
                                    key={i}
                                    className="relative grid w-full max-w-sm h-[30rem] flex-col items-end justify-center overflow-hidden rounded-lg bg-white"
                                >
                                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('./assets/Headerbackground.jpg')] bg-cover bg-center">
                                        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                                    </div>
                                    <div className="relative p-6 px-6 py-14 md:px-12">
                                        <h3 className="mb-6 text-4xl text-white">Boxe anglaise</h3>
                                        <p className="mb-6 text-2xl font-medium">
                                            How we design and code open-source projects?
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
            <section className="bg-blue-50" id="contact">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-4xl mb-10 text-center font-semibold  text-gray-900 ">
                                Contact
                            </p>

                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg">
                                    Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                                    sagittis ante, ac tincidunt sem venenatis ut.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center bgColorRed rounded text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path
                                                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6">Notre Addresse
                                            </h3>
                                            <p className="">1230 Hotel EDA-OBA Lycée Scientifique</p>
                                            <p className="">Lomé Togo</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bgColorRed text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path
                                                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                </path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 ">Contact
                                            </h3>
                                            <p className="">Mobile: + 228 99009900</p>
                                            <p className="">Mail: tailnext@gmail.com</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bgColorRed text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-6 w-6">
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 7v5l3 3"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6">Working
                                                hours</h3>
                                            <p className="">Lundi - Vendredi: 17:30 - 20:00</p>
                                            <p className="">Samedi &amp; Dimache: 08:00 - 12:00</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                                <form id="contactForm">
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                <input type="text" id="name" autoComplete="given-name" placeholder="Votre nom" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name" />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                <input type="email" id="email" autoComplete="email" placeholder="votre adresse email" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" name="email" />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <textarea id="textarea" name="textarea" placeholder="Ecrivez votre message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full bgColorRed text-white px-6 py-3 font-xl rounded-md sm:mb-0">Envoyer un message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-gray-200 py-8 px-4 shadow-md z-10 flex justify-content-center align-items-center bgColorRed ">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                    Designed by Sidjé | © {new Date().getFullYear()} Avenir de la Boxe Togo
                </div>
                <div className="flex ml-auto gap-4">
                    <a href="#" className="text-white">Terms &
                        Conditions
                    </a>
                    <a href="#" className="text-white">Privacy
                        Policy
                    </a>
                </div>
            </footer>

        </main >


    )
}

export default HomeBodySection
