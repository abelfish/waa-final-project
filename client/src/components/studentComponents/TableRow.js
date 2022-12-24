import React from 'react';
import { useNavigate } from 'react-router';


function TableRow(props) {
    const navigate = useNavigate();
    const onTableRowClicked = () => {
        navigate(`/student-info/${props.id}`);
    }




  return (
    <tr onClick={onTableRowClicked} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {props.id}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.firstName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.lastName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.email}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {props.gpa}
      </td>
    </tr>
  );
}

export default TableRow;
