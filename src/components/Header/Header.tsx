import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-teal-500">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-0">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-3xl sm:text-4xl tracking-widest text-white font-bold uppercase font-mono">Hisaab</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/" className="text-gray-100 hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="/" className="text-gray-100 hover:bg-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Table</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" onClick={toggleMenu} className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white">
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`border-t-2 border-white absolute top-16 inset-x-0 p-2 transition bg-teal-500 transform origin-left md:hidden ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
                <div className="pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className="text-gray-50 hover:bg-blue-600 hover:text-white block py-2 font-medium text-lg md:text-xl uppercase tracking-wider pl-1">Home</a>
                    <a href="/" className="text-gray-50 hover:bg-blue-600 hover:text-white block py-2 font-medium text-lg md:text-xl uppercase tracking-wider pl-1">Table</a>
                </div>

            </div>
        </nav>
    );
};

export default Header;