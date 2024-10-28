import React from 'react'
import { FaUniversity, FaBath, FaCubes, FaHospital } from "react-icons/fa";
import '../../styles/ApplyInfo.css'

const ApplyInfo = () => {

    const applyInfoData = [
        {
            image: <FaUniversity/>,
            title: "Maximum Choices",
            post: 'Receive 100% customized tour quotes for holiday packages in Himachal Pradesh.'
        },
        {
            image: <FaBath/>,
            title: "Clients Trust Us",
            post: 'We aim to build strong trust in the reliability of our services.'
        },
        {
            image: <FaCubes/>,
            title: "Referrals",
            post: 'Our clients consistently recommend us.'
        },
        {
            image: <FaHospital/>,
            title: "Expert Guidance",
            post: 'Please provide as many details as possible so we can offer you the best package that fits your budget.'
        },
    ]
  return (
    <div>
      <div className="apply-info-main">
        <div className="apply-info-container">
            <div className="apply-info-heading">
                <h3>What Makes Us The Preferred Choice</h3>
                <p>
                We offer a variety of tour packages and hotel booking services. With access to a diverse selection of hotels and car rentals, we ensure our clients receive the best deals in the market. Leveraging our expertise in holiday destinations and our extensive network, we strive to exceed your expectations
                </p>
            </div>
            <div className="apply-info-row">
                <div className="col-1">
                    <div className='col-1-data'>
                        {applyInfoData.map((apply , index) =>(

                    <div key={index} className='apply-data-container'>
                        <div >
                            <span className='apply-image'>{apply.image}</span>
                        </div>
                        <div className='apply-data-detail'>
                            <h6 className='apply-title'>
                                <a href="#url">{apply.title}</a>
                            </h6>
                            <p>{apply.post}</p>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                <div className="col-2">
                    <div className="col-2-data">
                        <h4>What Makes Us </h4>
                        <p>
                        My Bharat Trips is a comprehensive travel management company located in India. We are committed to our core values of innovation, safety, professionalism, pride, and enjoyment as we strive to surpass our customer&apos;s expectations.
                        </p>
                        <p>
                        Professionalism: We are dedicated to upholding high standards in our conduct, treating others with respect, honesty, kindness, and fairness.Pride: We take pride in our origins, our journeys, and our identity. We express this pride in everything we do while actively supporting our community and our country.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyInfo;
