import React from "react";
import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      location: "",
      propertyType: "",
      minimumPrice: "0",
      maximumPrice: "0",
    },
  });
  return (
    <form
      className="home-search-form"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div>
        <label htmlFor="location">Location</label>
        <input {...register("location")} />
      </div>
      <div>
        <label htmlFor="property type">Property Type</label>
        <input {...register("propertyType", { required: true })} />
      </div>

      {/* {errors.lastName && <p>Last name is required.</p>} */}
      {/* <input {...register("age", { pattern: /\d+/ })} /> */}
      {/* {errors.age && <p>Please enter number for age.</p>} */}
      <div>
        <label htmlFor="Minimum Price">Minimum Price</label>
        <input type="number" {...register("minimumPrice")} />
      </div>
      <div>
        <label htmlFor="Maximum Price">Maximum Price</label>
        <input type="number" {...register("maximumPrice")} />
      </div>

      <div>
        <button type="submit">
          <CiSearch className="search-icon" />
        </button>
      </div>
    </form>
  );
};

export default ReactHookForm;
