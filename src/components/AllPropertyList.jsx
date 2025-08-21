import React from "react";

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
                <div className="property__wrapper">
                  <img src={list.banner_photo} alt="" />
                  {/* <h6>{list.address.street1}</h6> */}
                </div>
                <div>
                    <h4>{list.title}</h4>
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
