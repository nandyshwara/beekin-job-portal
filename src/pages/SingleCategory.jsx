import React, { useEffect, useState } from "react";
import { getAllJobsByCategory } from "../services/JobServices";
import ListingCard from "../components/listings/ListingCard";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BreadCrumbs from "../components/BreadCrumbs";

function SingleCategory() {
  const [jobData, setJobData] = useState(null);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const getJobsDataByCategory = async (categoryName) => {
    try {
      setIsLoading(true);
      const { data } = await getAllJobsByCategory(categoryName);
      setJobData(data?.[categoryName]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobsDataByCategory(categoryName);
  }, [categoryName]);
  return (
    <div className="mb-[5rem] mt-20">
      <div className="w-10/12 mx-auto">
        <BreadCrumbs catageory={categoryName} />
      </div>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="mx-auto w-10/12 grid grid-cols-12 gap-5">
          {jobData &&
            jobData.map((currEle, index) => {
              return <ListingCard data={currEle} />;
            })}
        </div>
      )}
    </div>
  );
}

export default SingleCategory;
