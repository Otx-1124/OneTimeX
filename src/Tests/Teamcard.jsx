import React from "react";

const Teamcard = (props) => {
  return (
    <div  className={`${props.cursor} text-center w-[201px] h-[180px]  py-5 px-5 rounded-3xl shadow-lg`}>
      <img
        src={props.img}
        alt={props.name}
        className="w-20 h-20 rounded-full mx-auto mb-3"
      />
      <h4 className="font-semibold">{props.name}</h4>
      <p className="text-sm text-gray-600">{props.role}</p>
    </div>
  );
};

export default Teamcard;
