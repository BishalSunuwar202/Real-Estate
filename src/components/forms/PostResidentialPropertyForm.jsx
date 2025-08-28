import React from "react";
import { Controller, useForm } from "react-hook-form";
import usePostResidential from "../../hooks/usePostResidential";
import { useAmenities } from "../../hooks/useAmenities";

const PostResidentialPropertyForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      price: null,
      //propertyType: ["Buy", "Rent"],
      buy: false,
      rent: false,
      banner_photo: null,
      address: {
        street1: "",
        street2: "",
        province: "",
        district: "",
        municipality: "",
        ward: null,
      },
      //amenities: ["bed", "light", "water"],
      amenities: [],
      property_plan_id: null,
      storey: null,
      total_house_area: "",
      total_land_area: "",
      face: "",
      face_size: "",
      road_in_front_of_house: "",
      near_landmark: "",
      property_details: "",
      other_details: "",
      note_details: "",
      other_photos: [],
      map_embed: "",
      youtube_link: "",
    },
  });

  const mutation = usePostResidential();
  console.log("eroors in form", errors);
  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data, {
      onSuccess: () => {
        console.log("signup successful");
        //queryClient.invalidateQueries(["users"]); // if you want to refetch users list
      },
      onError: (err) => {
        // console.log(err || "post failed");

        if (!err) return;

        Object.keys(err).forEach((field) => {
          if (typeof err[field] === "object" && !Array.isArray(err[field])) {
            // nested object, like "address"
            Object.keys(err[field]).forEach((nestedField) => {
              const formField = `${field}.${nestedField}`; // e.g., "address.street1"
              setError(formField, {
                type: "server",
                message: err[field][nestedField][0],
              });
            });
          } else {
            // regular field
            setError(field, { type: "server", message: err[field][0] });
          }
        });
      },
    });
  };
  const municipality = watch("address.municipality");

  //for aminities data
  const { data: dataAmenities } = useAmenities();
  console.log(dataAmenities);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input placeholder="Property Title" {...register("title")} />
      </div>

      {/* Price */}
      <div>
        <div style={{ color: "red" }}>{errors.title?.message}</div>
        <label>Price</label>
        <input placeholder="Price" type="number" {...register("price")} />
      </div>

      {/* Property Type (Checkbox) */}
      <div>
        <label>Property Type</label>
        <label>
          <input type="checkbox" value="Buy" {...register("buy")} />
          Buy
        </label>
        <label>
          <input type="checkbox" value="Rent" {...register("rent")} />
          Rent
        </label>
      </div>

      {/* Banner Image */}
      <div>
        <label>Banner Image</label>
        <input type="file" {...register("banner_photo")} />
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
      <div htmlFor="Amenities">Amenitites</div>
      <Controller
        control={control}
        name="amenities"
        render={({ field }) => (
          <div>
            {dataAmenities?.map((amenity) => (
              <label key={amenity.id}>
                {amenity.name}
                <input
                  type="checkbox"
                  // Check if the current value is included in the array of selected items
                  checked={field.value?.some(
                    // this checked is attribute of input
                    (item) => item.id === amenity.id
                  )}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    const newArray = checked
                      ? [...(field.value ?? []), amenity]
                      : field.value?.filter((item) => item.id !== amenity.id);
                    field.onChange(newArray);
                  }}
                />
              </label>
            ))}
          </div>
        )}
      />
      {/* <div>
        <label>Amenities</label>
        <label>
          <input
            type="checkbox"
            id="1"
            value="bed"
            {...register("Bed")}
            onChange={(e) => {
              const checked = e.target.checked;
              if(checked) {

                const newArray = [...dataAmenities]
              }
            }}
          />
          Bed
        </label>
        <label>
          <input type="checkbox" value="light" {...register("Light")} />
          Light
        </label>
        <label>
          <input type="checkbox" value="water" {...register("Water")} />
          Water
        </label>
      </div> */}

      {/* Property Plan */}
      <div>
        <label>Property Plan</label>
        <input {...register("propertyPlan")} />
      </div>

      {/* Map Embed */}
      <div>
        <label>Map Embed</label>
        <input placeholder="Map Embed Link" {...register("map_embed")} />
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
        <input placeholder="" {...register("face")} />
      </div>
      <div>
        <label>Face Size</label>
        <input placeholder="Face Size" {...register("face_size")} />
      </div>

      {/* Road */}
      <div>
        <label>Road In Front Of House</label>
        <input
          placeholder="Road In Front Of House"
          {...register("road_in_front_of_house")}
        />
      </div>

      {/* YouTube Link */}
      <div>
        <label>YouTube Link</label>
        <input placeholder="Youtube Link" {...register("youtube_link")} />
      </div>

      {/* Nearby Landmark */}
      <div>
        <label>Nearby Landmark</label>
        <input placeholder="Nearby Landmark" {...register("near_landmark")} />
      </div>

      {/* Details */}
      <div>
        <label>Property Details</label>
        <textarea {...register("property_details")} />
      </div>
      <div>
        <label>Other Details</label>
        <textarea {...register("other_details")} />
      </div>
      <div>
        <label>Note Details</label>
        <textarea {...register("note_details")} />
      </div>
      {/* Banner Image */}
      <div>
        <label> Other Images</label>
        <input type="file" {...register("other_photos")} />
      </div>

      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? "Posting..." : "Post Property"}
      </button>
      {mutation.isError && (
        <p className="">{mutation.error?.response?.data?.message}</p>
      )}
    </form>
  );
};

export default PostResidentialPropertyForm;
