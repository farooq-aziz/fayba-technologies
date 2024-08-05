import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
// Components
import CTA from '../cta/CTA';
// Css
import styles from './Header.module.css'
// Icons
import { FaAngleDown, FaAngleRight, FaPhoneAlt } from "react-icons/fa";
// Images
import logo from 'media/images/logo.png'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.navBar}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image src={logo} alt="Fayba Technologies" className="w-[5%]" />
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li className={styles.dropDown}>
                                Services
                                <FaAngleDown />
                                <div className={styles.megaMenu}>
                                    <ul>
                                        <li>
                                            <a href="/logo-design">Logo Design</a>
                                        </li>
                                        <li className={styles.dropDown1}>
                                            Website Design & Development
                                            <FaAngleRight />
                                            <div className={styles.subMenu1}>
                                                <ul>
                                                    <li><Link href="/web-development">Web Development</Link></li>
                                                    <li><Link href="/custom-website-design-development">Custom Website Development</Link></li>
                                                    <li><Link href="/ecommerce-website-development">Ecommerce Website Development</Link></li>
                                                    <li><Link href="/shopify-development">Shopify Development</Link></li>
                                                    <li><Link href="/wordpress-development">Wordpress Development</Link></li>
                                                    <li><Link href="/woocommerce-development">Woocommerce Development</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className={styles.dropDown2}>
                                            Digital Marketing
                                            <FaAngleRight />
                                            <div className={styles.subMenu2}>
                                                <ul>
                                                    <li><Link href="/content-writing">Content Writing</Link></li>
                                                    <li><Link href="/google-paid-marketing">Google Paid Marketing</Link></li>
                                                    <li><Link href="/social-media-marketing-services">Social Media Marketing</Link></li>
                                                    <li><Link href="/search-engine-optimization">Search Engine Optimization</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link href="/portfolio">Portfolio</Link></li>
                            <li><Link href="/packages">Packages</Link></li>
                            <li><Link href="/contact-us">contact us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div className={`${styles.hamBurger} block lg:hidden`}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <ul className={`btnSec hidden lg:flex justify-content-center gap-4`}>
                            <div className={styles.call}>
                                <FaPhoneAlt className='text-[12px]' />
                                <CTA
                                    text="0123456789"
                                    bg="bg-white"
                                    color="text-black"
                                    href="tel:0123456789"
                                />
                            </div>
                            <CTA
                                text="Get Started"
                                bg="bgPrimary"
                                color="text-white"
                            />
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
