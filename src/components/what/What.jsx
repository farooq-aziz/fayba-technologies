import React from 'react'
import Image from 'next/image'
// Components
import CTA from '../cta/CTA';
// Images
import screen from 'media/images/web-image1.webp'

const What = () => {
    return (
        <>
            <section className="py-[100px] bg-slate-200">
                <div className='container'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <h3 className="text-[40px] font-bold text-black uppercase mb-3">What We Do</h3>
                            <p className='text-[14px] font-light text-black tracking-wider'>
                                As a Website Development And Design Company, we take pride in leading a group of skilled
                                experts committed to developing aesthetically appealing websites optimized to increase sales for your company. Since your website is a crucial part of your digital marketing strategy, we make it a point to develop sites that are not only effective and user-friendly but also built to attract and acquire potential customers.
                            </p>
                            <p className='text-[14px] font-light text-black tracking-wider my-2'>
                                Professionals on our team use cutting-edge software and hardware to design sites that are
                                customized to your requirements. To guarantee that your website is tailored for optimum
                                conversion rates, we first take the time to learn about your company and your intended
                                audience.
                            </p>
                            <p className='text-[14px] font-light text-black tracking-wider'>
                                From our first meeting, until your website goes live, we guarantee nothing less than
                                excellent service and assistance like an exceptional Website SEO Company. Our mission is to serve as your go-to digital marketing resource, assisting you in expanding your business and generating the profits you earn.
                            </p>
                            <div className="btnSec mt-6">
                                <CTA
                                    text="Get Started"
                                    bg="bg-black"
                                    color="text-white"
                                />
                                <CTA
                                    text="Live Chat"
                                    bg="bgPrimary"
                                    color="text-white"
                                    href="javascript:$zopim.livechat.window.show();"
                                />
                            </div>
                        </div>
                        <div>
                            <Image loading="lazy" src={screen} alt="Fayba Technologies" className="scale-[0.8]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default What
