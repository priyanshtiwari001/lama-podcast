import React from "react";
const CardLists = ({ card, index }) => {
  const dateObject = new Date(card.
updatedAt)
  const letter = card.projectname.slice(0, 2);

  return (
    <div
      to="/:id/podcast/add"
      key={index}
      className="flex gap-3 p-2 border-1 rounded-2xl border-gray-400 w-70 h-26 cursor-pointer"
    >
      <div

        className=" rounded-2xl w-22 h-22 text-black bg-pink-500"
      >
        <h1 className="font-poppins flex justify-center text-white items-center w-full h-full  text-6xl ">
          {letter}
        </h1>
      </div>
      <div className="flex flex-col items-start  py-2">
        <p className="text-purple-600 font-poppins font-semibold">
          {card.projectname}
        </p>
        <p className="text-[13px] text-gray-400 ">4 files</p>
        <p className="text-[13px] text-gray-400 pt-2">{dateObject.toDateString()}</p>
      </div>
    </div>
  );
};

export default CardLists;
