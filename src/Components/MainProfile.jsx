import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PersonalDetailsSection from "./PersonalDetails";
import DematDetails from "./DematDetails";
import KYCDetails from "./KycDetails";
import ChargesFees from "./ChargesAndFees";
import CloseAccount from "./CloseAccount";
import Teamcard from "../Tests/Teamcard";
import { h1 } from "framer-motion/client";

const sections = [
  "Personal Details",
  "Demat Details",
  "KYC Details",
  "Charges & Fees",
  "Your Relationship Manager",
  "Change Your Pass/PIN",
  "Close OneTimeX Account",
];

const MainProfile = () => {
  const [active, setActive] = useState(null);
  const [currUser, setCurrUser] = useState({});
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    setActive(sections[0]);

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setCurrUser(JSON.parse(savedUser));
    }

    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
      setProfilePic(savedPic);
    }
  }, []);

  const handleSectionClick = (section) => {
    setActive(section);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setProfilePic(base64);
      localStorage.setItem("profilePic", base64);
    };
    reader.readAsDataURL(file);
  };

  const renderSectionContent = () => {
    switch (active) {
      case "Personal Details":
        return (
          <PersonalDetailsSection
            currUser={currUser}
            setCurrUser={setCurrUser}
          />
        );
      case "Demat Details":
        return <DematDetails />;
      case "KYC Details":
        return <KYCDetails />;
      case "Charges & Fees":
        return <ChargesFees />;
      case "Your Relationship Manager":
        return (
          <Teamcard
            name="Raj Duani"
            img="/logoOne2.png"
            role="Relationship Manager"
            cursor="cursor-pointer"
          />
        );
      case "Change Your Pass/PIN":
        return (
          <div className="min-h-[80%] flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
              <h1 className="text-3xl font-bold text-red-600 mb-4">
                We're Sorry!
              </h1>
              <p className="text-gray-700 text-lg">
                The option you're looking for is currently not available.
              </p>
              <p className="text-gray-500 mt-2">
                Please check back later or explore other available features.
              </p>
              <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Go Back
              </button>
            </div>
          </div>
        );
      case "Close OneTimeX Account":
        return <CloseAccount />;
      default:
        return <p>Select a section to view details.</p>;
    }
  };

  return (
    <div className="mt-10 py-10 px-4 md:px-10 flex flex-col lg:flex-row gap-5 bg-[#009999] bg-opacity-20">
      {/* Sidebar */}
      <div className="px-5 py-6 flex flex-col border border-gray-300 w-full lg:w-2/6 rounded-xl items-center bg-white">
        {/* Profile Picture */}
        <div className="relative mb-6">
          <label htmlFor="upload-photo">
            <div className="w-24 h-24 border border-gray-300 rounded-full overflow-hidden cursor-pointer bg-gray-100">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Upload
                </div>
              )}
            </div>
          </label>
          <input
            type="file"
            id="upload-photo"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        {/* Sections */}
        <div className="flex flex-col w-full gap-2">
          {sections.map((section) => (
            <Link
              key={section}
              onClick={() => handleSectionClick(section)}
              to=""
              className={`px-4 py-2 rounded-lg text-left ${
                active === section
                  ? "bg-blue-100 border-l-4 border-blue-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {section}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 flex flex-col border border-gray-300 w-full lg:w-4/6 rounded-xl bg-white shadow overflow-y-auto max-h-screen">
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default MainProfile;
