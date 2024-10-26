"use client";
import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { FaMapMarkerAlt, FaUsers, FaBuilding, FaHome } from "react-icons/fa";
import './../styles/Specification.css';

const Specification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const targets = {
    destinations: 200,
    agents: 100,
    packages: 27,
    hotels: 400,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the section is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className='specification-main'>
        <div className="specification-container">
            <div className='specification-heading'>
                <h3>
                    We Are Here For You
                </h3>
                <p>
                  We have proudly been voted the #1 travel company in the area for the past twenty-five years for hospitality, services &amp; Transport. We offer personalized attention to the leisure and business traveller and will do our best to tend to your needs.
                </p>
            </div>
            <div className="specification-row">
              <div className='specification-coloums'>
                  <span>
                  <FaMapMarkerAlt className='fa-logo'/>
                  </span>
                  <h3>
                    {isVisible && (
                      <CountUp start={0} end={targets.destinations} duration={4} /> 
                    )}
                    +
                  </h3>
                  <p>Total Destinations</p>
              </div>
              <div className='specification-coloums'>
                  <span>
                  <FaUsers className='fa-logo'/>
                  </span>
                  <h3>
                    {isVisible && (
                      <CountUp start={0} end={targets.agents} duration={4} /> 
                    )}
                    +
                  </h3>
                  <p>Professional Agents</p>
              </div>
              <div className='specification-coloums'>
                  <span>
                  <FaBuilding className='fa-logo'/>
                  </span>
                  <h3>
                    {isVisible && (
                      <CountUp start={0} end={targets.packages} duration={4} /> 
                    )}
                    +
                  </h3>
                  <p>Current Packages in Progress</p>
              </div>
              <div className='specification-coloums'>
                  <span>
                  <FaHome className='fa-logo'/>
                  </span>
                  <h3>
                    {isVisible && (
                      <CountUp start={0} end={targets.hotels} duration={4} /> 
                    )}
                    +
                  </h3>
                  <p>Hotels Available</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Specification;
