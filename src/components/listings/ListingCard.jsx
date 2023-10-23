import React from "react";
import { useNavigate } from "react-router-dom";

function ListingCard({ data }) {
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + "...";
  };

  const handleNavigate = useNavigate();
  const navigateToJobDetails = () => {
    handleNavigate(`/job/${data._id}`, { state: { job: data } });
  };

  const shortenedDescription = truncateDescription(data.description[0], 100);
  return (
    <div className="py-5 px-5 col-span-4 bg-white rounded-md shadow-md border-2 border-[#277ffe] hover:scale-105   text-slate-600">
      <p className="text-xl font-semibold text-slate-700 hover:text-white">
        {data.title}
      </p>
      <p className="text-xl font-normal my-2 ">{data.company}</p>
      <p className="text-lg font-normal my-3">{data.location}</p>
      <p className="text-lg font-normal my-3">{shortenedDescription}</p>
      <p className="text-lg mt-5 font-semibold">{data.jobType}</p>
      <div className="flex flex-row w-1/2 mx-auto gap-2 mt-10" onClick={navigateToJobDetails}>
        <p className="text-slate-700">know more</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="bg-slate-700"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#277ffe"
          class="w-5 h-5 mt-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
  );
}

export default ListingCard;
