import Navbar from "../header/Navbar";
import Swal from "sweetalert2";
const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const rating = form.rating.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const addProduct = {
      name,
      brandName,
      type,
      price,
      details,
      rating,
      photo,
    };
    console.log(addProduct);

    fetch("https://coffee-store-server-two-theta.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-5xl font-extrabold my-10 text-center">Add Product</h1>
      <form onSubmit={handleAddProduct} className="flex justify-center">
        <div className="bg-[#F4F3F0] w-3/4 rounded-xl p-10">
          {/* Form Row of Name and Available Quantity  */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-bold">
                  Mobile Name
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Mobile Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-xl font-bold">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="brandName"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form Row of Supplier and Taste  */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-bold">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="type"
                  name="type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-xl font-bold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Form Row of Categories and Details  */}
          <div className="md:flex bg-[#F4F3F0] mb-8  ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-bold">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="rating"
                  name="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-8">
              <label className="label">
                <span className="label-text text-xl font-bold">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="details"
                  name="details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Photo Url and Rating */}
          <div className="md:flex bg-[#F4F3F0] mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold">Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Submit Button  */}
          <div>
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-block bg-blue-600 text-white hover:text-black font-bold "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;