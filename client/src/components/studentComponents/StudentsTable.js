import { React, useEffect, useState } from 'react';
import TableRow from './TableRow';
import { useNavigate } from 'react-router-dom';
import Unauthorized from '../403';
import { useDispatch } from 'react-redux';

function StudentsTable() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    if (!user || !token) return navigate('/login');
    if (user.roles.includes('STUDENT')) return <Unauthorized />;

    async function getData() {
      const response = await fetch('http://localhost:8080/students/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setStudents(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
          navigate('/login');
        });
      return response;
    }

    getData();
  }, []);

  return (
    <div className="mx-6 mt-10">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      GPA
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => {
                    return <TableRow {...student} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsTable;
