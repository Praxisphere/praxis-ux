'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import Image from 'next/image';

import logo from '/public/images/logo/logo.png';

const Navbar: React.FC = () => {
    const currentRoute = usePathname();


    // Sticky Navbar
    useEffect(() => {
        const elementId = document.getElementById('navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId?.classList.add('isSticky');
            } else {
                elementId?.classList.remove('isSticky');
            }
        });

        return () => {
            document.removeEventListener('scroll', () => {
                if (window.scrollY > 170) {
                    elementId?.classList.add('isSticky');
                } else {
                    elementId?.classList.remove('isSticky');
                }
            });
        };
    }, []);

    // Toggle active class
    const [isActive, setActive] = useState<boolean>(false);
    const handleToggleSearchModal = () => {
        setActive(!isActive);
    };

    return (
        <>
            <div id="navbar" className="navbar-area bg-black relative py-[20px] lg:py-[15px] xl:py-0">
                <div className="container mx-auto max-w-[1760px] xl:px-[30px]">
                    <nav className={`navbar bg-black relative flex flex-wrap ${isActive ? 'active' : ''}`}>
                        <div className="self-center">
                            <Link href="/">
                                <Image src={logo}
                                       className="inline md:max-w-[110px] lg:max-w-[250px]" alt="Praxisphere Logo"/>
                            </Link>
                        </div>

                        {/* Toggle button */}
                        <button
                            className="navbar-toggler absolute ml-auto right-0 rtl:right-auto rtl:left-0 top-[2px] md:hidden" type="button" onClick={handleToggleSearchModal}>
              <span className="burger-menu cursor-pointer leading-none text-[30px]">
                <i className="ri-menu-line"></i>
              </span>
                        </button>

                        <div className="navbar-collapse flex self-center grow basis-auto
                            md:space-x-[20px] lg:space-x-[50px] xl:space-x-[70px] 2xl:space-x-[100px] rtl:space-x-reverse">
                            <ul className="navbar-nav self-center flex-row ml-auto rtl:ml-0
                            rtl:mr-auto md:flex md:space-x-[15px] lg:space-x-[25px] xl:space-x-[35px] 2xl:space-x-[50px] rtl:space-x-reverse">
                                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                                    <Link href="/about"
                                          className="text-[16px] md:text-[16px] lg:text-[18px] transition-all text-white hover:text-primary">
                                        About
                                    </Link>
                                </li>

                                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                                    <Link href="/solutions"
                                          className="text-[16px] md:text-[16px] lg:text-[18px] transition-all text-white hover:text-primary">
                                        Offerings
                                    </Link>
                                </li>

                                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                                    <Link
                                        href="/pricing"
                                        className="text-[16px] md:text-[16px] lg:text-[18px] transition-all text-white hover:text-primary"
                                    >
                                        Pricing
                                    </Link>
                                </li>

                                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                                    <Link
                                        href="/resources"
                                        className="text-[16px] md:text-[16px] lg:text-[18px] transition-all text-white hover:text-primary"
                                    >
                                        Resources
                                    </Link>
                                </li>

                                <li className="py-[8px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group">
                                    <Link
                                        href="/contact"
                                        className={`text-[16px] md:text-[16px] lg:text-[18px] transition-all text-white hover:text-primary ${
                                            currentRoute === '/contact/' ? 'text-primary' : ''
                                        }`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                            {/* Other options */}
                            <div
                                className="self-center space-x-[20px] lg:space-x-[25px] xl:space-x-[45px] rtl:space-x-reverse">
                                <Link
                                        href="/contact"
                                        className={`text-[16px] md:text-[16px] lg:text-[18px] transition-all text-white hover:text-primary ${
                                            currentRoute === '/contact/' ? 'text-primary' : ''
                                        }`}
                                    >
                                        Login
                                    </Link>
                                <Link href='/register'
                                      className="py-[10px] md:py-[8px] lg:py-[12px] xl:py-[15px] px-[20px]
                                      md:px-[15px] lg:px-[20px] xl:px-[30px] inline-block rounded-[6px]
                                      bg-accent text-white font-semibold text-[14px] md:text-[13px]
                                      lg:text-[16px] xl:text-[18px] transition duration-500 ease-in-out hover:bg-secondary">
                                    Register
                                </Link>
                            </div>
                            <div
                                className="self-center space-x-[20px] lg:space-x-[25px] xl:space-x-[45px] rtl:space-x-reverse">
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
