import React from "react";

const CreateUser = () => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-center gap-3">
        <h2 className="text-2xl">Create User</h2>
      </div>
      <div className="flex items-center justify-center">
        <div
          className="border-gray-400 shadow-lg
       flex-col p-10 mb-10 gap-10">
          <form className="m-3">
            <input type="hidden" name="id" />
            <input
              type="input"
              value="First Name"
              name="role"
              className="p-2 rounded-2xl "
            />
          </form>

          <form className="m-3">
            <input type="hidden" name="id" />
            <input
              type="input"
              value="Last Name"
              name="role"
              className="p-2 rounded-2xl"
            />
          </form>

          <form className="m-3">
            <input type="hidden" name="id" />
            <input
              type="email"
              value="Email"
              name="role"
              className="p-2 rounded-2xl"
            />
          </form>

          <form className="m-3">
            <button
              className="bg-blue-800 rounded-2xl
             w-full mt-4 p-1 text-white
              cursor-pointer
               hover:bg-blue-400">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
