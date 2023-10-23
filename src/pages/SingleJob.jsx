import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import JobDisplay from "../components/JobDisplay";

function SingleJob() {
  const location = useLocation();
  const { job } = location.state;

  const datePosted = new Date(job.datePosted);
  const day = datePosted.getDate();
  const month = datePosted.getMonth() + 1;
  const year = datePosted.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20 mb-[5rem]">
      {job && <JobDisplay job={job} formattedDate={formattedDate} />}
    </div>
  );
}

export default SingleJob;
