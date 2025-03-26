"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { BookMinus } from "lucide-react";
import { fetchUser, deleteUser } from "./_actions";

interface UserType {
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddresses: { emailAddress: string }[];
  lastActiveAt: number | null; // Allow null
  createdAt: number;
}

const UserList = () => {
  const [user, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const users = await fetchUser();
      setUsers(users.data);
    };
    fetchData();
  }, []);

  const userDelete = async (userId: string) => {
    deleteUser(userId);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

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
              user.map((item, index) => {
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
                      <BookMinus
                        className="cursor-pointer"
                        onClick={() => userDelete(item.id)}
                      />
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
