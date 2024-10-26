import React from 'react'
import { FaUniversity, FaBath, FaCubes, FaHospital } from "react-icons/fa";
import './../styles/ApplyInfo.css'

const ApplyInfo = () => {

    const applyInfoData = [
        {
            image: <FaUniversity/>,
            title: "Maximum Choices",
            post: '100% Customized Tour Quotes for Himachal Tourism Holiday Packages.'
        },
        {
            image: <FaBath/>,
            title: "Clients Trust Us",
            post: 'We tend to build complete confidence and firm reliance on the integrity of our service.'
        },
        {
            image: <FaCubes/>,
            title: "Referrals",
            post: 'We are always recommended by our clients'
        },
        {
            image: <FaHospital/>,
            title: "Expert Guidance",
            post: 'Provide maximum details so that we can provide you best package within your budget'
        },
    ]
  return (
    <div>
      <div className="apply-info-main">
        <div className="apply-info-container">
            <div className="apply-info-heading">
                <h3>What Makes Us The Preferred Choice</h3>
                <p>
                    We specialize in all type of tour packages and hotel booking. We are accompanying with a large variety of hotels, car rentals to provide our clients with the best deals in the market. It’s about using our expert knowledge of holiday destinations and our network of friends across the world to make sure reality exceeds your expectations
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
                        Himachal-Tourism.Org.In is a full-service travel management company based in India. We are committed to our values of innovation, safety, professionalism, pride and fun as we strive to exceed our customers expectations. 
                        </p>
                        <p>
                        Professionalism: We are committed to conducting ourselves to high standards, with respect, in an honest, kind and fair manner. Pride: We are proud of where we are from, where we go and who we are. We demonstrate pride in everything we do, while we support our community and our country.
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
