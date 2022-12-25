import { PaperClipIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Unauthorized from '../403';
import { useParams } from 'react-router-dom';
import JobAd from '../adComponents/JobAd';

export default function StudentPage() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    address: {
      street: '',
      city: '',
      zip: '',
      state: '',
    },
    email: '',
    phoneNumber: '',
    birthDate: '',
    gpa: '',
    feedbacks: [],
  });
  const id = useParams().id;

  const onAddCommentClicked = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    if (!user || !token) return navigate('/login');
    if (!user.roles.includes('FACULTY')) {
      alert('Only Faculties can add comments!');
      return;
    }

    const facultyId = localStorage.getItem('userId');

    const comment = {
      comment: e.currentTarget.comment.value,
    };

    const response = fetch(
      'http://localhost:8080/feedbacks/add/' + facultyId + '/' + id,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(comment),
      }
    )
      .then((data) => {
        navigate(0);
        console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (
      !localStorage.getItem('isLoggedIn') ||
      localStorage.getItem('token') == null
    ) {
      navigate('/login');
    }

    const getData = async () => {
      const response = await fetch('http://localhost:8080/students/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setStudent(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
          navigate('/login');
        });
    };

    getData();
  }, []);
  const user = localStorage.getItem('user');
  const roles = JSON.parse(user).roles;
  if (roles.includes('STUDENT')) {
    return (
      <div>
        <Unauthorized></Unauthorized>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Student Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Personal details and comments
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {student.firstName} {student.lastName}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {student.address.street} {student.address.city}{' '}
              {student.address.state} {student.address.zip}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {student.email}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              cGPA (cumulative GPA)
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {student.gpa}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Comments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4">Comment</th>
                    <th className="px-4">By</th>
                  </tr>
                </thead>
                <tbody>
                  {student.feedbacks.map((feedback) => {
                    return (
                      <tr className=" rounded border-2">
                        <td className="px-4">{feedback.comment}</td>
                        <td className="px-4">
                          {feedback.faculty.firstName +
                            ' ' +
                            feedback.faculty.lastName}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500"></dt>

            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <form onSubmit={onAddCommentClicked}>
                <label
                  htmlFor="comment"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Comments
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  name="comment"
                  required
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your comments here..."
                ></textarea>
                <div className="mt-6">
                  <input
                    value="Add Comment"
                    type="submit"
                    className=" bg-blue-800 px-3 py-3 text-white rounded"
                  ></input>
                </div>
              </form>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
