import React from "react";
import { LuBedDouble } from "react-icons/lu";
import { FaBath } from "react-icons/fa";
import { PiMapPinAreaFill, PiCubeFocusLight } from "react-icons/pi";

const AllPropertyList = ({ Lists }) => {
  console.log(Lists);

  return (
    <div className="property">
      <h1>All Property List</h1>
      <ul className="property__list">
        {Lists.map((list) => (
          <li key={list.id} className="property__lists">
            {
              <>
                <img src={list.banner_photo} alt="" />
                {/* <h6>{list.address.street1}</h6> */}
                <div className="property__detail">
                  <h3>{list.title}</h3>
                  <div>
                    <PiMapPinAreaFill />
                    <span>{list.address.municipality}</span>
                  </div>
                  <div className="property__detail-price">
                    {list.price || "negotiable"}
                  </div>
                  {/* <hr /> */}

                  <div className="property__detail-amenities">
                    <div>
                      <PiCubeFocusLight />
                      <span>Space</span>
                    </div>

                    <div>
                      <LuBedDouble />
                      <span>Bed</span>
                    </div>
                    <div>
                      <FaBath />
                      <span>Bath</span>
                    </div>
                  </div>
                </div>
              </>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPropertyList;
