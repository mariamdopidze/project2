import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Checkout = () => {
  const formFields = [
    { id: "first_name", label: "First Name", type: "text", width: "w-[211px]" },
    { id: "last_name", label: "Last Name", type: "text", width: "w-[211px]" },
    {
      id: "company",
      label: "Company Name (Optional)",
      type: "text",
      width: "w-[453px]",
    },
    {
      id: "street_address",
      label: "Street Address",
      type: "text",
      width: "w-[453px]",
    },
    { id: "city", label: "Town / City", type: "text", width: "w-[453px]" },
    { id: "zip", label: "ZIP Code", type: "text", width: "w-[453px]" },
    { id: "phone", label: "Phone", type: "tel", width: "w-[453px]" },
    { id: "email", label: "Email Address", type: "email", width: "w-[453px]" },
  ];

  const selectFields = [
    {
      id: "country",
      label: "Country / Region",
      width: "w-[453px]",
      options: [
        { value: "", text: "Choose a country" },
        { value: "US", text: "United States" },
        { value: "CA", text: "Canada" },
        { value: "FR", text: "France" },
        { value: "LK", text: "Sri Lanka" },
      ],
    },
    {
      id: "province",
      label: "Province",
      width: "w-[453px]",
      options: [
        { value: "", text: "Choose a province" },
        { value: "WP", text: "Western Province" },
        { value: "CP", text: "Central Province" },
        { value: "SP", text: "Southern Province" },
        { value: "NP", text: "Northern Province" },
      ],
    },
  ];

  const icons = [
    { name: "quality", title: "Best Quality", span: "High-quality materials" },
    { name: "guarantee", title: "Warranty", span: "1-year warranty included" },
    { name: "shipping", title: "Fast Shipping", span: "Delivery in 2-5 days" },
    { name: "support", title: "24/7 Support", span: "We're here to help" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className="relative">
        <img
          src="/images/Rectangle.png"
          alt="Banner"
          className="h-[313px] w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <img src="/images/HouseLogos.png" alt="House Logo" />
          <h1 className="text-5xl font-medium text-black">Ceckout</h1>
          <div className="flex mt-[9px] items-center">
            <span className="text-base text-black font-medium">Home</span>
            <img src="/images/arrow.png" alt="Arrow" className="mx-2" />
            <span className="text-base text-black font-light">Checkout</span>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-semibold ml-[174px] mt-[98px]">Billing details</h1>
      <div className="flex gap-[105px]">
        <form>
          <div className="grid gap-6 mt-[36px] ml-[174px] md:grid-cols-1">
            <div className="flex gap-6">
              {formFields.slice(0, 2).map((field) => (
                <div key={field.id} className={field.width}>
                  <label
                    htmlFor={field.id}
                    className="block text-base font-medium  dark:text-white"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="  bg-gray-50 border  mt-[22px] border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[75px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              ))}
            </div>

            {formFields.slice(2).map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block  text-base font-medium dark:text-white"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  className={`bg-gray-50 border border-gray-300 mt-[22px]  rounded-lg focus:ring-blue-500 focus:border-blue-500 block ${field.width} h-[75px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  required
                />
              </div>
            ))}

            {selectFields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block  text-base font-medium dark:text-white"
                >
                  {field.label}
                </label>
                <select
                  id={field.id}
                  className={`bg-gray-50 border mt-[22px] border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block ${field.width} h-[75px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div>
              <label
                htmlFor="additional_info"
                className="block  text-base font-medium dark:text-white"
              >
                Additional Information
              </label>
              <textarea
                id="additional_info"
                rows="4"
                className="block p-2.5 w-[453px] mt-[22px] h-[75px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               
              ></textarea>
            </div>
          </div>
        </form>
        <div className="max-w-[608px] max-h-[789px] ml-[26px] ">
        <div className="flex gap-40 pt-[87px]">
  <div className="space-y-3">
    <h4 className="text-2xl font-medium">Product</h4>
    <p className="text-[#9F9F9F] font-normal text-base">Asgaard</p>
    <p className="text-base font-normal">Subtotal</p>
    <h6 className="text-base font-normal">Total</h6>
  </div>
  <div className="space-y-3">
    <h4 className="text-2xl font-medium">Subtotal</h4>
    <p className="text-base font-light">Rs.250,000.00</p>
    <p className="font-light text-base">Rs.250,000.00</p>
    <h6 className="text-[#B88E2F] text-2xl font-bold">Rs.250,000.00</h6>
  </div>
</div>
  <div className="flex flex-col">
    <hr className="my-6 border-red-500 pt-[40px]" />
    <h5 className="pt-[23px] text-base font-normal">Direct Bank Transfer</h5>
    <p className="pt-[11px] text-[#9F9F9F] text-base font-light">
      Make your payment directly into our bank account. Please use your
      Order ID as the payment reference. Your order will not be shipped
      until the funds have cleared in our account.
    </p>
    <ul className="list-disc pl-5 pt-[25px]">
      <li className="text-base font-medium text-[#9F9F9F]">Direct Bank Transfer</li>
      <li className="pt-[11px] text-base font-medium text-[#9F9F9F]">Cash On Delivery</li>
    </ul>
    <p className="pt-[22px] text-base">
      Your personal data will be used to support your experience throughout
      this website, to manage access to your account, and for other purposes
      described in our privacy policy.
    </p>
    <button className="w-[318px] h-[64px]  text-xl font-normal border border-black mx-auto rounded-lg mt-[39px] hover:bg-blue-600 transition">
      Place order
    </button>
  </div>
</div>
        
      </div>
      <div className="h-[270px] bg-[#FAF3EA] flex justify-center mt-[55px] mx-auto items-center  gap-12">
        {icons.map((icon, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={`/images/${icon.name}.png`}
              alt={icon.name}
              className="w-[48px] h-[48px]"
            />
            <div className="flex flex-col">
              <h3 className="text-2xl  font-semibold text-[#242424]">
                {icon.title}
              </h3>
              <span className="text-xl font-medium text-[#898989]">
                {icon.span}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Checkout;
