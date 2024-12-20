'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'A propos', href: '#' },
    { name: 'Mission', href: '#' },
    { name: 'Temoignages', href: '#' },
    { name: 'Evenements', href: '#' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className=" bg-[url('./assets/Headerbackground.jpg')] bg-cover bg-center  ">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Avenir de la boxe</span>
                            <img
                                alt=""
                                src="data:image/png;base64,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"
                                className="h-8 w-auto rounded-full"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6 text-white" />
                        </button>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer  font-medium text-white">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative  transition duration-300 group-hover:text-white ease">
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm/6 rounded-md bg-red-700 p-2 font-semibold  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white">
                            Rejoignez nous <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="data:image/png;base64,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"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-400 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-red-400"
                                    >
                                        Rejoinez nous
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="   relative bg-[url('./assets/Headerbackground.jpg')] bg-cover bg-center isolate px-6 pt-14 lg:px-8">

                <div className=" md:mx-0 mx-auto  max-w-2xl py-32 sm:py-48 lg:py-48">

                    <div className="text-center">
                        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                            votre confiance et vos compétences
                        </h1>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <form action="" method="post">
                                <div className=' flex  rounded-md p-1 bg-white '>
                                    <input className=' flex md:w-auto w-36 rounded-s-md p-1 focus:outline-none ' type="text" name="" id="" />
                                    <a
                                        href="#"
                                        className="rounded-e-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Nos newsletter  <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
