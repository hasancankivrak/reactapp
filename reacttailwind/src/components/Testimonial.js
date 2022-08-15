import React from "react";
import TestimonialSlider from "./TestimonialSlider";
const Testimonial=()=>{
    return(
        <section className="mb-64 lg:mb-48">
            <div className="container mx-auto">
                <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up" data-aos-offset="300" data-aos-delay="1600">What Our Clients Say</h2>
                        <p className="max-w-2xl mx-auto mb-12 lg:mb-24" data-aos="fade-up" data-aos-offset="300" data-aos-delay="1600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae neque urna. Nullam mi velit, maximus ut metus nec, molestie lacinia risus. Etiam efficitur ligula vel porttitor posuere. In sem augue, placerat ac elementum et, finibus consectetur sapien. Etiam posuere felis sit amet ante aliquam, consequat blandit ante pharetra. </p>
                    <div className="bg-pink" data-aos="fade-up" data-aos-offset="300" data-aos-delay="1600">
                        <TestimonialSlider/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonial;