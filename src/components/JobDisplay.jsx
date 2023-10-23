import React from "react";

function JobDisplay({ job, formattedDate }) {
  return (
    <div>
      <div className="mx-auto w-1/3 my-10 text-white font-semibold text-2xl">
        <button className="bg-[#277ffe] py-3 px-10 rounded-xl items-center w-full">
          Apply Now
        </button>
      </div>
      <div className="w-10/12 mx-auto flex flex-col gap-y-5">
        <h1 className="text-slate-900 font-semibold text-3xl">
          <p className="text-slate-900 font-semibold text-2xl my-2">
            Job Title:
          </p>
          {job.title}
        </h1>
        <p className="text-slate-800 font-semibold text-xl">
          <p className="text-slate-900 font-semibold text-2xl my-2">
            Company Name:
          </p>
          {job.company}
        </p>
        <p className="text-slate-800 font-semibold text-xl">
          <p className="text-slate-900 font-semibold text-2xl my-2">
            Location:
          </p>
          {job.location}
        </p>
        <p className="text-slate-800 font-semibold text-xl">
          <p className="text-slate-900 font-semibold text-2xl my-2">
            Date Posted:
          </p>
          {formattedDate}
        </p>
        <p className="text-slate-800 font-semibold text-xl">
          <p className="text-slate-900 font-semibold text-2xl my-2">Degree:</p>
          {job.degree}
        </p>
        <p className="text-slate-800 font-semibold text-xl">
          <p className="text-slate-900 font-semibold text-2xl my-2">
            Job Type:
          </p>
          {job.jobType}
        </p>
        <p className="text-slate-800 font-semibold text-xl">
          <p className="text-slate-900 font-semibold text-2xl my-2">
            Job Category:
          </p>
          {job.category}
        </p>
        <p className="text-slate-900 font-semibold text-2xl my-2">
          Job Description:
        </p>
        {job.description.map((currEle, index) => {
          return (
            <p className="text-slate-800 font-normal text-xl">{currEle}</p>
          );
        })}
        <p className="text-slate-900 font-semibold text-2xl my-2">
          Key Responsibilities
        </p>
        <ul className="list-disc">
          <div className="ml-5">
            {job.KeyResponsibilities.map((currEle, index) => {
              return (
                <li className="text-slate-800 font-normal text-xl">
                  {currEle}
                </li>
              );
            })}
          </div>
        </ul>
        <p className="text-slate-900 font-semibold text-2xl my-2">
          Qualifications:
        </p>
        <ul className="list-disc">
          <div className="ml-5">
            {job.qualifications.map((currEle, index) => {
              return (
                <li className="text-slate-800 font-normal text-xl">
                  {currEle}
                </li>
              );
            })}
          </div>
        </ul>
      </div>
      <div className="mx-auto w-1/3 mt-20 text-white font-semibold text-2xl">
        <button className="bg-[#277ffe] py-3 px-10 rounded-xl items-center w-full">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobDisplay;
