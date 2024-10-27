'use client'
import React from 'react'
import { FaLaptop, FaDatabase, FaLock, FaCodepen } from "react-icons/fa";
import './../styles/Offer.css'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';


const Offer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once when the component comes into view
        threshold: 0.3 // Adjust the threshold as needed
    });
    const servicesData = [
        {
            image: <FaLaptop />,
            title: 'Customization',
            post: '100% Customized Tour Quotes for Himachal Tourism Holiday Packages'
        },
        {
            image: <FaDatabase />,
            title: 'Knowledgeable Guidance',
            post: 'Simply fill the form & let our tour advisor contact you & provide you best deal.'
        },
        {
            image: <FaLock />,
            title: 'Best Deals',
            post: 'Provide maximum details so that we can provide you best package within your budget.'
        },
        {
            image: <FaCodepen />,
            title: '24x7 Assistance',
            post: 'Call Us any Hour of Any Day. We are here for you.'
        }

    ]
    return (
        <div>
            <div className="offer-main">
                <div className="offer-container">
                    <div className="offer-heading">
                        <h3>
                            What We Offer
                        </h3>
                        <p>
                            Get customized plans and personal guidance from our experts 24 ×7.
                        </p>
                    </div>
                    <div className="offer-row">
                        <div className="offer-col-1">
                            <h4>We’re Offering Unmatched Services</h4>
                            <p>Himachal-Tourism.Org.In is a full-service travel management company based in India. We are committed to our values of innovation, safety, professionalism, pride and fun as we strive to exceed our customers expectations. Professionalism: We are committed to conducting ourselves to high standards, with respect, in an honest, kind and fair manner.</p>
                            <p>Pride: We are proud of where we are from, where we go and who we are. We demonstrate pride in everything we do, while we support our community and our country.</p>
                            <div className='offer-stats' ref={ref}>
                                <div className='stats'>
                                    <h4>{inView ? <CountUp end={2300} duration={2} /> : 0}</h4>
                                    <h6>Clients</h6>
                                </div>
                                <div className='stats'>
                                    <h4>{inView ? <CountUp end={16} duration={2} /> : 0}</h4>
                                    <h6>Awards</h6>
                                </div>
                                <div className='stats'>
                                    <h4>{inView ? <CountUp end={2536} duration={2} /> : 0}</h4>
                                    <h6>Packages</h6>
                                </div>
                            </div>
                        </div>
                        <div className="offer-col-2">
                            {servicesData.map((service, index) => (

                                <div key={index} className='service-container'>
                                    <div >
                                        <span className='service-image'>{service.image}</span>
                                    </div>
                                    <div className='service-data'>
                                        <h6 className='service-title'>
                                            <a href="#url">{service.title}</a>
                                        </h6>
                                        <p>{service.post}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer;
