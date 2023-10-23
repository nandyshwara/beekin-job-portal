/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { isAuth } from '../helpers/authHelper';
import { getMyJobsApplied } from '../services/userServices';
import Loading from './Loading';
import ListingCard from './listings/ListingCard';

function MyJobs() {
    const [isLoading, setIsLoading] = useState(false);
    const [jobData, setJobData] = useState(null);
  const { token } = isAuth();

  console.log(token)
  const getMyJobs = async () => {
    setIsLoading(true);
    const {data} = await getMyJobsApplied(token);
    setJobData(data)
    setIsLoading(false);
  };
  useEffect(()=>{
    if(!jobData){getMyJobs()}
  },[token]);

  return (
    <div className='mt-10 mb-[5rem]'>{isLoading ? (<Loading isLoading={isLoading}/>):(<div>
        <div className="w-10/12 mx-auto grid grid-cols-12 gap-x-5 gap-y-10 ">
            {jobData && jobData.map((job, index) => <ListingCard data={job} />)}
          </div>
    </div>)}</div>
  )
}

export default MyJobs