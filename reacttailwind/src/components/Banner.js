import React from "react";
import Users from "../components/Users";
import Img from "../assets/img/banner-img.png"
const Banner = () => {
    return (
        <section className="min-h-[600px] pt-24 pb-12 text center relative lg:pt-48 lg:pb-0 lg:text-left">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div>
                        <h1 className="text-3xl font-bold mb-8 lg:text-5x1 lg:leading-snug" data-aos="fade-down" data-aos-delay="700">
                            Üç boyutlu görselliği keşfedin.
                        </h1>
                        <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0" data-aos="fade-down" data-aos-delay="600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod vulputate urna, sed cursus dui commodo quis. Nam ultrices, nunc eu sodales tempus, est massa bibendum dolor, quis bibendum nulla risus eu dolor. Quisque sed sapien nec metus bibendum ultricies at et turpis. Quisque a tempor sem. Ut velit erat, malesuada vel mi quis, ullamcorper eleifend dui. Fusce accumsan iaculis mauris et porta. Aliquam dapibus orci sit amet lacinia rhoncus.</p>
                        <div className="flex items-center justify-around space-x-4 max-w-[320px] mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start" data-aos="fade-down" data-aos-delay="600">
                            <button className="btn" data-aos="fade down" data-aos-delay="500">Get it now</button><br />
                            <a className="border-b-2 border-transparent hover:border-white transition ease-out" href="#" data-aos="fade down" data-aos-delay="600">
                                Explore Device
                            </a>
                        </div>
                        <Users />
                    </div>
                    <div>
                        <img src={Img} alt="" data-aos="fade-up" data-aos-delay="800" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner;