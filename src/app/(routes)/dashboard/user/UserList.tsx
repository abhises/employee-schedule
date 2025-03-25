import { clerkClient } from "@clerk/nextjs/server";
import React from "react";
import moment from "moment";

const UserList = async () => {
  const client = await clerkClient();
  const user = await client.users.getUserList();
  console.log("hello users", user);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-900  *:first:left-0 *:first:bg-white">
              <th className="px-3 py-2 whitespace-nowrap">Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Email</th>
              <th className="px-3 py-2 whitespace-nowrap">Last Active At</th>
              <th className="px-3 py-2 whitespace-nowrap">Created At</th>
              <th className="px-3 py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {user &&
              user?.data.map((item, index) => {
                return (
                  <tr
                    className="*:font-medium *:text-gray-900  *:first:left-0 *:first:bg-white"
                    key={index}>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item.firstName} {item.lastName}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {item?.emailAddresses?.[0].emailAddress ||
                        "No email available"}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {moment(item.lastActiveAt).startOf("hour").fromNow()}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {moment(item.createdAt).startOf("day").fromNow()}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {/* <button onClick={() => deleteUser(item.id)}>
                        delete
                      </button> */}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
