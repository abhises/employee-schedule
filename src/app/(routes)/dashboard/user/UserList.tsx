"use client";
import React from "react";
import moment from "moment";
import { BookMinus, Squirrel } from "lucide-react";
import { deleteUser, updateRole } from "./_actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSideBar } from "../_context/SideBarContext";
import Image from "next/image";

const UserList = () => {
  const { user, setUsers, isLoading } = useSideBar();
  console.log("user", user);
  const router = useRouter();

  const userDelete = async (userId: string) => {
    deleteUser(userId);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    toast.error("The user has been deleted", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
    });
  };

  const addRole = async (userId: string) => {
    const response = await updateRole(userId);
    console.log(response);
    if (response?.success) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId
            ? {
                ...user,
                publicMetadata: {
                  ...user.publicMetadata,
                  role: response.data.publicMetadata.role, // assume backend returns updated role
                },
              }
            : user
        )
      );
    }

    toast.success("The user role has been updated", {
      position: "top-right",
      autoClose: 3000, // Closes after 3 seconds
    });
  };

  return (
    <div>
      <div className="flex justify-between mb-10">
        <h2 className=" text-4xl ">User</h2>

        <button
          className="bg-blue-800  hover:bg-blue-500 px-5 max-h-[40] rounded-3xl text-white cursor-pointer"
          onClick={() => router.push("/dashboard/user/create")}>
          Create user
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-900  *:first:left-0 *:first:bg-white">
              <th className="px-3 py-2 whitespace-nowrap">S.N</th>
              <th className="px-3 py-2 whitespace-nowrap">Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Email</th>
              <th className="px-3 py-2 whitespace-nowrap">Role</th>
              <th className="px-3 py-2 whitespace-nowrap">Last Active At</th>
              <th className="px-3 py-2 whitespace-nowrap">Created At</th>
              <th className="px-3 py-2 whitespace-nowrap">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {isLoading ? (
              <tr className=" text-gray-500">
                <td>Loading.....</td>
              </tr>
            ) : (
              <>
                {user &&
                  user.map((item, index) => {
                    return (
                      <tr
                        className="*:font-medium *:text-gray-900  *:first:left-0 *:first:bg-white"
                        key={index}>
                        <td className="px-3 py-2 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-10 py-2 whitespace-nowrap flex gap-2">
                          <Image
                            src={item.imageUrl}
                            alt="test"
                            width={30}
                            height={30}
                            className="rounded-full"
                          />{" "}
                          {item.firstName} {item.lastName}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          {item?.emailAddresses?.[0].emailAddress ||
                            "No email available"}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          {item.publicMetadata.role as string}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          {moment(item.lastActiveAt).startOf("hour").fromNow()}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          {moment(item.createdAt).startOf("day").fromNow()}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap flex gap-2">
                          {item.publicMetadata.role !== "admin" ? (
                            <>
                              {" "}
                              <span title="Delete User">
                                <BookMinus
                                  color="red"
                                  size={24}
                                  className="cursor-pointer"
                                  onClick={() => userDelete(item.id)}
                                />
                              </span>
                              <span title="Update role">
                                <Squirrel
                                  color="green"
                                  size={24}
                                  className="cursor-pointer"
                                  onClick={() => addRole(item.id)}
                                />
                              </span>
                            </>
                          ) : null}
                        </td>
                      </tr>
                    );
                  })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
