"use client";
import React from "react";
import moment from "moment";
import { useSideBar } from "../../_context/SideBarContext";

const CreateSchedule = () => {
  const today = moment();
  const dates: string[] = [];

  for (let i = 0; i < 21; i++) {
    dates.push(moment(today).add(i, "days").format("MMM D, YYYY"));
  }
  const { user } = useSideBar();
  return (
    <div className="m-4">
      <h2 className="text-4xl">Create Schedule </h2>
      <div className="grid grid-cols-12 mt-4 gap-3">
        <div className="col-span-2 bg-red-500 border-2 rounded-2xl">
          <div className="flex-col gap-3 p-4">
            {user.map((users) => (
              <p
                className="text-white hover:bg-red-800 
            cursor-pointer px-4 py-2 rounded-4xl"
                key={users.firstName}>
                {users.firstName}
              </p>
            ))}
          </div>
        </div>
        <div className="col-span-10 ">
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                {dates.map((date, index) => (
                  <th
                    key={index}
                    className="border px-2 py-1 text-sm text-gray-700 w-fit">
                    {date}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {dates.map((_, index) => (
                  <td key={index} className="border px-2 py-1 text-center">
                    {/* your data here */}-
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateSchedule;
