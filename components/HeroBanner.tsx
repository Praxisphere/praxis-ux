'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import heroApp from '/public/images/app/hero-app.png';
import bannerVector from '/public/images/app/banner-vector.png';
import userImg1 from '/public/images/users/user1.jpg';
import userImg2 from '/public/images/users/user2.jpg';
import userImg3 from '/public/images/users/user3.jpg';

const HeroBanner: React.FC = () => {
  return (
      <div id="home" className="relative overflow-hidden bg-['#cccccc'] pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px] pb-[50px] md:pb-[80px] lg:pb-[80px] xl:pb-[120px]">
        <div id="home" className="container max-w-[1760px] xl:px-[30px] relative z-[1]">
          <div className="grid gap-[30px] items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3">
            <div className="space-y-[30px] md:space-y-[40px] sm:max-w-[570px] mx-auto xl:mx-0 text-center xl:text-start relative">
              <div>
                <h1 className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[40px] xl:text-[40px] 2xl:text-[55px] leading-[40px] font-heading
                 sm:leading-[46px] md:leading-[50px] xl:leading-[50px] 2xl:leading-[64px] mb-[20px] md:mb-[25px] lg:mb-[20px] xl:mb-[30px]"
                  data-aos="fade-right" data-aos-delay="100" data-aos-duration="600" data-aos-once="true">
                  Your Transformation with our Empathetic Tech Solutions
                </h1>

                <p
                  className="text-[18px]"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-once="true" >
                  We believe in the power of technology to build inclusive, supportive communities.
                  Our empathetic solutions empower you to connect and thrive together.
                </p>
              </div>

              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <Link
                  href="#"
                  className="py-[15px] px-[30px] inline-block rounded-[6px] bg-secondary text-white font-semibold text-[16px] md:text-[18px]
                  transition duration-500 ease-in-out hover:bg-tertiary">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={bannerVector}
          alt="shape"
          className="absolute bottom-0 left-0 bg-[#fff] w-full"
        />
      </div>

  );
};

export default HeroBanner;
