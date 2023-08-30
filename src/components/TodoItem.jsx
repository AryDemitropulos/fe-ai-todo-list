import React, { useState } from "react";

export const TodoItem = ({ id, title, completed }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log("cambio");
  };

  return (
    <li
      className="w-full border rounded-sm border-gray-200 border-r  hover:bg-blue-100 "
      onClick={handleOnChange}
    >
      <div className="flex items-center pl-3">
        <input
          id={"todo-" + id}
          type="checkbox"
          value="true"
          checked={isChecked}
          readOnly
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500focus:ring-2  "
        />
        <label
          htmlFor="vue-checkbox-list"
          className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
        >
          <div className="block">
            <div className="w-full text-lg font-semibold">{title}</div>
            {/*   <div className="w-full text-sm">
                  A JavaScript library for building user interfaces.
                </div> */}
          </div>
        </label>
      </div>
    </li>
  );
};
