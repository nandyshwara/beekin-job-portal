import React from "react";
import ListingCard from "./ListingCard";
import { getAllJobs } from "../../services/JobServices";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Loading";

function Listings() {
  const [allJobs, setAllJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const getJObListings = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllJobs();
      setAllJobs(data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJObListings();
  },[]);

  return (
    <div className="mt-20">
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="mx-auto w-10/12">
          <p className="text-3xl font-semibold text-left text-slate-600 mb-10">
            Check All Openings.
          </p>
          <div className="grid grid-cols-12 gap-x-5 gap-y-10 ">
            {allJobs && allJobs.map((job, index) => <ListingCard data={job} />)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Listings;
