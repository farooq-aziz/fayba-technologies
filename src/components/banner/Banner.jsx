import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
// Components
import CTA from '../cta/CTA';
// Css
import styles from './Banner.module.css'
// Images
import dot from 'media/banner/banner-dot-2.webp'
import plus from 'media/banner/banner-plus.webp'
import tab from 'media/banner/tab.webp'
import tablet from 'media/banner/tablet-new.webp'
import led from 'media/banner/LED.webp'
import mac from 'media/banner/mac-new.webp'
import laptop from 'media/banner/laptop.webp'
import laptopNew from 'media/banner/laptop-new_web.webp'
import phone from 'media/banner/phone.webp'
import mobile from 'media/banner/mobile-new.webp'

const Banner = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.moveDots}></div>
                <Image src={dot} className={styles.moveImg2} alt="Fayba Technologies" />
                <Image src={plus} className={styles.moveImg3} alt="Fayba Technologies" />
                <Image src={dot} className={styles.moveImg4} alt="Fayba Technologies" />
                <div className='container'>
                    <div className='grid grid-cols-2'>
                        <div className={styles.content}>
                            <h1 className="text-[40px] font-bold m-0 text-white uppercase">
                                <span className='text-[32px] font-bold'>Innovative Web Solutions: </span> <br />
                                Design, Development, <br />
                                <span className='text-[30px] font-light'> and Marketing Agency</span>
                            </h1>
                            <ul className={`${styles.list} my-4`}>
                                <li className='text-[16px] text-white tracking-wider'>Customized Solutions</li>
                                <li className='text-[16px] text-white tracking-wider'>Satisfaction Guaranteed</li>
                                <li className='text-[16px] text-white tracking-wider'>24/7 Support By Experts</li>
                            </ul>
                            <div className="btnSec">
                                <CTA
                                    text="Get Started"
                                    bg="bg-white"
                                    color="text-black"
                                />
                                <CTA
                                    text="Live Chat"
                                    bg="bgPrimary"
                                    color="text-white"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>
                        <Link href="#pricing_sec" className={styles.whatWe}>
                            <p className={styles.ciricle}>
                                Let’s <span>Start</span>
                            </p>
                        </Link>
                        <div className={`${styles.bannerImgWrap} hidden lg:block`}>
                            <div className={`${styles.tabCanvas} ${styles.objCanvas}`}>
                                <Image src={tab} alt="Fayba Technologies" className={`${styles.tabImg} ${styles.element}`} />
                                <div className={styles.objSreen}>
                                    <Image src={tablet} alt="Fayba Technologies" className={`${styles.tabWeb} ${styles.objWeb}`} />
                                </div>
                            </div>
                            <div className={`${styles.ledCanvas} ${styles.objCanvas}`}>
                                <Image src={led} alt="Fayba Technologies" className={`${styles.ledImg} ${styles.element}`} />
                                <div className={styles.objSreen}>
                                    <Image src={mac} alt="Fayba Technologies" className={`${styles.ledWeb} ${styles.objWeb}`} />
                                </div>
                            </div>
                            <div className={`${styles.laptopCanvas} ${styles.objCanvas}`}>
                                <Image src={laptop} alt="Fayba Technologies" className={`${styles.laptopImg} ${styles.element}`} />
                                <div className={styles.objSreen}>
                                    <Image src={laptopNew} alt="Fayba Technologies" className={`${styles.laptopWeb} ${styles.objWeb}`} />
                                </div>
                            </div>
                            <div className={`${styles.phoneCanvas} ${styles.objCanvas}`}>
                                <Image src={phone} alt="Fayba Technologies" className={`${styles.phoneImg} ${styles.element}`} />
                                <div className={styles.objSreen}>
                                    <Image src={mobile} alt="Fayba Technologies" className={`${styles.phoneWeb} ${styles.objWeb}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
