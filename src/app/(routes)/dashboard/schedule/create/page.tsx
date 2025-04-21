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
        <div className="col-span-12 ">
          <div className="overflow-auto">
            <table className="table-auto w-full border border-gray-500">
              <thead>
                <tr className="bg-gray-500">
                  <th>Users</th>
                  {dates.map((date, index) => (
                    <th
                      key={index}
                      className="border px-4 py-3 text-sm text-gray-800 whitespace-nowrap min-w-[120px] text-center">
                      {date}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {user.map((user, index) => (
                  <tr
                    key={index}
                    className="border px-4 py-3 text-center min-w-[120px]">
                    <td className="p-4 m-1"> {user.firstName}</td>
                    {dates.map((_, index) => (
                      <td
                        key={index}
                        className="border px-4 py-3 text-sm text-gray-800 whitespace-nowrap min-w-[120px] text-center">
                        <input className="p-2 m-1" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CreateSchedule;
