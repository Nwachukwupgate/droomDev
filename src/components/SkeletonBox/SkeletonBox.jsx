import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonBox = ({ row }) => {
  return (
    <>
      {Array(10)
        .fill("")
        ?.map((_, index) => (
          <tr className="bg-white border-t border-t-grey-input border-opacity-20 transition duration-300 ease-in-out hover:bg-gray-100" key={index}>
            {Array(row)
              .fill("")
              .map((_, index) => (
                <td className="px-6 py-3 whitespace-nowrap text-sm text-grey-text capitalize" key={index}>
                  <Skeleton className="h-8" />
                </td>
              ))}
          </tr>
        ))}
    </>
  );
};

export default SkeletonBox;
