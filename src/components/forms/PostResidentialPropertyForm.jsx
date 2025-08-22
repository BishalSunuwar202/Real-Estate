import React from "react";
import { useForm } from "react-hook-form";

const PostResidentialPropertyForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      price: "",
      propertyType: ["Buy", "Rent"],
      bannerImage: "",
      address: {
        street1: "",
        street2: "",
        municipality: "",
        ward: "",
        district: "",
        province: "",
      },
      amenities: ["bed", "light", "water"],
      propertyPlan: "",
      mapEmbeded: "",
      storey: "",
      totalHouseArea: "",
      totalLandArea: "",
      face: "",
      faceSize: "",
      roadInfrontOfHouse: "",
      youtubeLink: "",
      nearLandMark: "",
      propertyDetails: "",
      otherDetails: "",
      noteDetails: "",
      otherImages: "",
    },
  });
  const municipality = watch("address.municipality");
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {/* <div>
        <input placeholder="" {...register("lastName", { required: true })} /> 
        {errors.lastName && <p>Last name is required.</p>}
      </div> */}

      {/* <input placeholder="" {...register("age", { pattern: /\d+/ })} /> */}
      {/* {errors.age && <p>Please enter number for age.</p>} */}
      {/* Title */}
      <div>
        <label>Title</label>
        <input placeholder="Property Title" {...register("title")} />
      </div>

      {/* Price */}
      <div>
        <label>Price</label>
        <input placeholder="Price" type="number" {...register("price")} />
      </div>

      {/* Property Type (Checkbox) */}
      <div>
        <label>Property Type</label>
        <label>
          <input type="checkbox" value="Buy" {...register("propertyType")} />
          Buy
        </label>
        <label>
          <input type="checkbox" value="Rent" {...register("propertyType")} />
          Rent
        </label>
      </div>

      {/* Banner Image */}
      <div>
        <label>Banner Image</label>
        <input type="file" {...register("bannerImage")} />
      </div>

      {/* Address (Nested) */}
      <fieldset>
        <legend>Address</legend>
        <div>
          <label>Street 1</label>
          <input placeholder="Street 1" {...register("address.street1")} />
        </div>
        <div>
          <label>Street 2</label>
          <input placeholder="Street 2" {...register("address.street2")} />
        </div>
        <div>
          <label>Municipality</label>
          <input
            placeholder="Municipality"
            {...register("address.municipality")}
          />
        </div>
        <div>
          {municipality && (
            <input placeholder="Ward" {...register("address.ward")} />
          )}
        </div>
        <div>
          <label>District</label>
          <input placeholder="District" {...register("address.district")} />
        </div>
        <div>
          <label>Province</label>
          <input placeholder="Province" {...register("address.province")} />
        </div>
      </fieldset>

      {/* Amenities */}
      <div>
        <label>Amenities</label>
        <label>
          <input type="checkbox" value="bed" {...register("amenities")} />
          Bed
        </label>
        <label>
          <input type="checkbox" value="light" {...register("amenities")} />
          Light
        </label>
        <label>
          <input type="checkbox" value="water" {...register("amenities")} />
          Water
        </label>
      </div>

      {/* Property Plan */}
      <div>
        <label>Property Plan</label>
        <input {...register("propertyPlan")} />
      </div>

      {/* Map Embed */}
      <div>
        <label>Map Embed</label>
        <input placeholder="Map Embed Link" {...register("mapEmbeded")} />
      </div>

      {/* Storey */}
      <div>
        <label>Storey</label>
        <input placeholder="Storey" {...register("storey")} />
      </div>

      {/* House & Land Area */}
      <div>
        <label>Total House Area</label>
        <input placeholder="Total House Area" {...register("totalHouseArea")} />
      </div>
      <div>
        <label>Total Land Area</label>
        <input placeholder="Total Land Area" {...register("totalLandArea")} />
      </div>

      {/* Face */}
      <div>
        <label>Face</label>
        <label>Face</label>
        <input placeholder="" {...register("face")} />
      </div>
      <div>
        <label>Face Size</label>
        <input placeholder="Face Size" {...register("faceSize")} />
      </div>

      {/* Road */}
      <div>
        <label>Road In Front Of House</label>
        <input
          placeholder="Road In Front Of House"
          {...register("roadInfrontOfHouse")}
        />
      </div>

      {/* YouTube Link */}
      <div>
        <label>YouTube Link</label>
        <input placeholder="Youtube Link" {...register("youtubeLink")} />
      </div>

      {/* Nearby Landmark */}
      <div>
        <label>Nearby Landmark</label>
        <input placeholder="Nearby Landmark" {...register("nearLandMark")} />
      </div>

      {/* Details */}
      <div>
        <label>Property Details</label>
        <textarea {...register("propertyDetails")} />
      </div>
      <div>
        <label>Other Details</label>
        <textarea {...register("otherDetails")} />
      </div>
      <div>
        <label>Note Details</label>
        <textarea {...register("noteDetails")} />
      </div>
      {/* Banner Image */}
      <div>
        <label> Other Images</label>
        <input type="file" {...register("otherImages")} />
      </div>

      <button type="submit">Post Property</button>
    </form>
  );
};

export default PostResidentialPropertyForm;
