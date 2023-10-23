import React, { useEffect, useState } from "react";
import { getAllCategory } from "../services/JobServices";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function Category() {
  const handleNavigate = useNavigate();

  const [allCategories, setAllCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCategories = async () => {
    try {
      setIsLoading(true);
      const { data } = await getAllCategory();
      setAllCategories(data?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="mb-[5rem]">
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="w-10/12 mx-auto mt-20 grid grid-cols-12 gap-5">
          {allCategories &&
            allCategories.map((currEle, index) => {
              return (
                <div
                  className="rounded-xl py-2 col-span-4 text-xl font-semibold text-slate-800 hover:scale-105 cursor-pointer border-2 border-[#277ffe]"
                  key={index}
                  onClick={() => handleNavigate(`/category/${currEle}`)}
                >
                  <p className="text-center">{currEle}</p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Category;
