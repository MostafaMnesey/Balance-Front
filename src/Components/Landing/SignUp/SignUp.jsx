import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import DatePickerr from "../../DatePicker/DatePickerr";

export default function SignUp() {
  const [graduationCertificate, setGraduationCertificate] = useState("");
  const [medicalLicense, setMedicalLicense] = useState("");
  const [otherCertifications, setOtherCertifications] = useState("");
  const [nID, setnID] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(event);

    console.log(file);

    if (file) {
      if (event.target.id == "graduationCertificate") {
        console.log(file);

        setGraduationCertificate(file.name);
      } else if (event.target.id == "medicalLicense") {
        setMedicalLicense(file.name);
      } else if (event.target.id == "otherCertifications") {
        setOtherCertifications(file.name);
      } else if (event.target.id == "nID") {
        setnID(file.name);
      } else {
        setFileName("Upload Medical License");
      }
    }
  };
  const cities = [
    { id: "1", governorate_name_ar: "القاهرة", governorate_name_en: "Cairo" },
    { id: "2", governorate_name_ar: "الجيزة", governorate_name_en: "Giza" },
    {
      id: "3",
      governorate_name_ar: "الأسكندرية",
      governorate_name_en: "Alexandria",
    },
    {
      id: "4",
      governorate_name_ar: "الدقهلية",
      governorate_name_en: "Dakahlia",
    },
    {
      id: "5",
      governorate_name_ar: "البحر الأحمر",
      governorate_name_en: "Red Sea",
    },
    { id: "6", governorate_name_ar: "البحيرة", governorate_name_en: "Beheira" },
    { id: "7", governorate_name_ar: "الفيوم", governorate_name_en: "Fayoum" },
    {
      id: "8",
      governorate_name_ar: "الغربية",
      governorate_name_en: "Gharbiya",
    },
    {
      id: "9",
      governorate_name_ar: "الإسماعلية",
      governorate_name_en: "Ismailia",
    },
    {
      id: "10",
      governorate_name_ar: "المنوفية",
      governorate_name_en: "Menofia",
    },
    { id: "11", governorate_name_ar: "المنيا", governorate_name_en: "Minya" },
    {
      id: "12",
      governorate_name_ar: "القليوبية",
      governorate_name_en: "Qaliubiya",
    },
    {
      id: "13",
      governorate_name_ar: "الوادي الجديد",
      governorate_name_en: "New Valley",
    },
    { id: "14", governorate_name_ar: "السويس", governorate_name_en: "Suez" },
    { id: "15", governorate_name_ar: "اسوان", governorate_name_en: "Aswan" },
    { id: "16", governorate_name_ar: "اسيوط", governorate_name_en: "Assiut" },
    {
      id: "17",
      governorate_name_ar: "بني سويف",
      governorate_name_en: "Beni Suef",
    },
    {
      id: "18",
      governorate_name_ar: "بورسعيد",
      governorate_name_en: "Port Said",
    },
    { id: "19", governorate_name_ar: "دمياط", governorate_name_en: "Damietta" },
    {
      id: "20",
      governorate_name_ar: "الشرقية",
      governorate_name_en: "Sharkia",
    },
    {
      id: "21",
      governorate_name_ar: "جنوب سيناء",
      governorate_name_en: "South Sinai",
    },
    {
      id: "22",
      governorate_name_ar: "كفر الشيخ",
      governorate_name_en: "Kafr Al sheikh",
    },
    { id: "23", governorate_name_ar: "مطروح", governorate_name_en: "Matrouh" },
    { id: "24", governorate_name_ar: "الأقصر", governorate_name_en: "Luxor" },
    { id: "25", governorate_name_ar: "قنا", governorate_name_en: "Qena" },
    {
      id: "26",
      governorate_name_ar: "شمال سيناء",
      governorate_name_en: "North Sinai",
    },
    { id: "27", governorate_name_ar: "سوهاج", governorate_name_en: "Sohag" },
  ];

  return (
    <div className="">
      <div className="bg-mainColor mt-16 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 ">
            <div className="">
              <h1 className="text-[48px] font-semibold font-roboto text-white text-start">
                Join Balance: Empower Lives, Transform Recovery
              </h1>
              <p className="text-white text-[18px] font-normal font-roboto lg:pe-60 my-5">
                Be part of a network of dedicated specialists making a real
                difference in addiction recovery. At Balance, we provide you
                with smart tools to manage patients efficiently, track progress,
                and offer the best care - all while maintaining privacy and
                security. Apply now to join our mission and help patients
                reclaim their lives with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="form min-h-[20vh] my-10 bg-white">
        <div className="container mx-auto ">
          <form className="">
            <div className="Basic-info">
              <span className="text-secondColor text-[28px] font-medium ">
                Basic Information
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                <div>
                  <div className=" flex justify-start  gap-3">
                    <i className="fa-solid fa-user text-secondColor"></i>
                    <label
                      htmlFor="First Name"
                      className="block mb-2 text-sm font-medium text-secondColor dark:text-white"
                    >
                      First Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id="First Name"
                    placeholder="First Name"
                    className="block w-full p-2 text-gray-900 my-1 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <i className="fa-solid fa-user text-secondColor"></i>
                    <label
                      htmlFor="Last Name"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      Last Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id="Last Name"
                    placeholder="Last Name"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <i className="fa-solid fa-envelope text-secondColor"></i>
                    <label
                      htmlFor="Email"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      Email
                    </label>
                  </div>
                  <input
                    type="text"
                    id="Email"
                    placeholder="Email"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <i className="fa-solid fa-phone-volume text-secondColor"></i>
                    <label
                      htmlFor="Phone"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      Phone
                    </label>
                  </div>
                  <input
                    type="text"
                    id="Phone"
                    placeholder="Phone"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Gender"
                    className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                  >
                    <div className="flex justify-start gap-3">
                      <i className="fa-solid fa-venus-mars"></i>
                      Gender
                    </div>
                  </label>
                  <select
                    id="Gender"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue={"Gender"}>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="w-full ">
                  <DatePickerr
                    label="Date of Birth"
                    icon={
                      <i className="fa-solid fa-calendar-days text-secondColor"></i>
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="City"
                    className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                  >
                    <div className="flex justify-start gap-3">
                      <i className="fa-solid fa-location-dot"></i>
                      City
                    </div>
                  </label>
                  <select
                    placeholder="City"
                    id="City"
                    className="block w-full p-2 my-1 text-secondColor border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue={""} hidden>
                      City
                    </option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.governorate_name_en}>
                        {city.governorate_name_en}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <i className="fa-solid fa-map-location-dot text-secondColor"></i>
                    <label
                      htmlFor="Adress"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      Address
                    </label>
                  </div>
                  <input
                    type="text"
                    id="Adress"
                    placeholder="Adress"
                    className="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="personal-info mt-10">
              <span className="text-secondColor text-[28px]  font-medium">
                Personal Information
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                <div>
                  <div className=" flex justify-start  gap-3">
                    <label
                      htmlFor=" Medical Specialty"
                      className="block mb-2 text-sm font-medium text-secondColor dark:text-white"
                    >
                      Medical Specialty
                    </label>
                  </div>
                  <input
                    type="text"
                    id="MedicalSpecialty"
                    placeholder=" Medical Specialty"
                    className="block w-full p-2 text-gray-900 my-1 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <label
                      htmlFor="Years of Experience"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      Years of Experience
                    </label>
                  </div>
                  <input
                    type="text"
                    id="YearsOfExperience"
                    placeholder="Years of Experience"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <label
                      htmlFor="Type of Practice"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      Type of Practice
                    </label>
                  </div>
                  <input
                    type="text"
                    id="TypeOfPractice"
                    placeholder="Type of Practice"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <label
                      htmlFor="Facility Name"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      Facility Name
                    </label>
                  </div>
                  <input
                    type="text"
                    id="FacilityName"
                    placeholder="Facility Name"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                  >
                    <div className="flex justify-start gap-3">City</div>
                  </label>
                  <select
                    placeholder="City"
                    id="city"
                    className="block w-full p-2 my-1 text-secondColor border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue={""} hidden>
                      City
                    </option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.governorate_name_en}>
                        {city.governorate_name_en}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <label
                      htmlFor="adress"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      Address
                    </label>
                  </div>
                  <input
                    type="text"
                    id="adress"
                    placeholder="Adress"
                    className="block w-full p-2  text-secondColor border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="License & Credentials mt-10">
              <span className="text-secondColor text-[28px]  font-medium">
                License & Credentials
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                <div>
                  <div className=" flex justify-start  gap-3">
                    <label
                      htmlFor="medicalLicenseNumber "
                      className="block mb-2 text-sm font-medium  text-secondColor dark:text-white"
                    >
                      Medical License Number
                    </label>
                  </div>
                  <input
                    type="text"
                    id="medicalLicenseNumber "
                    placeholder="Medical License Number "
                    className="block w-full p-2 text-gray-900 py-[11.5px]  border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-secondColor text-sm   ">
                    Graduation Certificate
                  </label>
                  <div className="flex items-center border mt-[7px] border-gray-300 rounded-lg overflow-hidden w-full">
                    <label className=" text-white  p-2  rounded-sm   cursor-pointer hover:bg-opacity-80 transition">
                      <i className="fa-solid fa-paperclip text-secondColor "></i>
                      <input
                        type="file"
                        id="graduationCertificate"
                        className="hidden grad"
                        onChange={handleFileChange}
                      />
                    </label>

                    <span className="p-1 text-gray-600 text-sm flex-1">
                      {graduationCertificate
                        ? graduationCertificate
                        : "Upload Graduation Certificate"}
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-secondColor  text-sm  ">
                    Medical License
                  </label>
                  <div className="flex items-center border mt-[5.5px] border-gray-300 rounded-lg overflow-hidden w-full">
                    <label className=" text-white  p-2  rounded-sm   cursor-pointer hover:bg-opacity-80 transition">
                      <i className="fa-solid fa-paperclip text-secondColor "></i>
                      <input
                        type="file"
                        className="hidden"
                        id="medicalLicense"
                        onChange={handleFileChange}
                      />
                    </label>

                    <span className="p-1 text-gray-600 text-sm flex-1">
                      {medicalLicense
                        ? medicalLicense
                        : "Upload Medical License"}
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-secondColor text-sm  ">
                    Other Certifications
                  </label>
                  <div className="flex items-center border mt-[5.5px] border-gray-300 rounded-lg overflow-hidden w-full">
                    <label className=" text-white  p-2  rounded-sm   cursor-pointer hover:bg-opacity-80 transition">
                      <i className="fa-solid fa-paperclip text-secondColor "></i>
                      <input
                        type="file"
                        id="otherCertifications"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>

                    <span className="p-1 text-gray-600 flex-1">
                      {otherCertifications
                        ? otherCertifications
                        : "Upload Other Certifications"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Identity Verification mt-10">
              <span className="text-secondColor text-[28px]  font-medium">
                Identity Verification
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                <div className="w-full">
                  <label className="block text-secondColor text-sm   ">
                    National ID or Passport
                  </label>
                  <div className="flex items-center border mt-[7px] border-gray-300 rounded-lg overflow-hidden w-full">
                    <label className=" text-white  p-2  rounded-sm   cursor-pointer hover:bg-opacity-80 transition">
                      <i className="fa-solid fa-paperclip text-secondColor "></i>
                      <input
                        type="file"
                        id="nID"
                        className="hidden grad"
                        onChange={handleFileChange}
                      />
                    </label>

                    <span className="p-1 text-gray-600 text-sm flex-1">
                      {nID ? nID : "Upload National ID or Passport "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Additional Information  mt-10">
              <span className="text-secondColor text-[28px]  font-medium">
                Additional Information
              </span>
              <div className="grid grid-cols-1  gap-10 mt-5">
                <div>
                  <div className=" flex justify-start  gap-3">
                    <label
                      htmlFor="motivates"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      What motivates you to support patients in addiction
                      recovery?
                    </label>
                  </div>
                  <input
                    type="text"
                    id="motivates"
                    placeholder="Your Answer"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <div className=" flex justify-start  gap-3">
                    <label
                      htmlFor="Balance"
                      className="block mb-2 text-sm  font-medium text-secondColor dark:text-white"
                    >
                      How do you think Balance will help you in your practice?
                    </label>
                  </div>
                  <input
                    type="text"
                    id="Balance"
                    placeholder="Your Answer"
                    className="block w-full p-2 my-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="w-full">
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 text-mainColor bg-gray-100 border-gray-300 rounded-sm focus:ring-mainColor dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ms-5 text-[16px] font-medium text-gray-900 dark:text-gray-300"
                    >
                      I confirm that I am a licensed healthcare provider.
                    </label>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      defaultValue
                      className="w-4 h-4 text-mainColor bg-gray-100 border-gray-300 rounded-sm focus:ring-mainColor dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ms-5 text-[16px] font-medium text-gray-900 dark:text-gray-300"
                    >
                      I agree to Balance’s Terms & Privacy Policy. 
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
            <button className="w-11/12 mt-10 text-white self-center bg-mainColor text-center hover:bg-secondColor focus:outline-none transition-all font-medium rounded-lg text-sm px-5 py-2.5 ">Apply Now</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
