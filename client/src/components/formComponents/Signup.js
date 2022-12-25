import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [role, setRole] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [state, setState] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [major, setMajor] = React.useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      firstName: firstname,
      lastName: lastname,
      address: {
        street: street,
        city: city,
        zip: zip,
        state: state,
      },
      username: username,
      major: major,
    };
    console.log(data);

    const saveStudent = async () => {
      const response = await fetch('http://localhost:8080/students/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          alert(err);
        });
    };
    const saveFaculty = async () => {
      const response = await fetch('http://localhost:8080/faculties/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          alert(err);
        });
    };
    if (role === 'student') {
      saveStudent();
    } else {
      saveFaculty();
    }

    setTimeout(() => {
      navigate('/Login');
    }, 2000);
  };

  return (
    <div className="flex w-full h-75 justify-center py-20">
      <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <Link
            to="/login"
            className="text-sm text-blue-500 underline hover:text-blue-700"
          >
            Sign in
          </Link>
        </span>
        <div className="p-6 mt-8">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-2">
              <label
                htmlFor="create-account-email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-500 dark:text-gray-300"
              >
                Role
              </label>
              <div className=" relative ">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="faculty">Faculty</option>
                  <option value="student">Student</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="firstName"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="firstName"
                  placeholder="First name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="lastName"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="lastName"
                  placeholder="Last name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="street"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="street"
                  placeholder="Street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="city"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="state"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="state"
                  placeholder="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="zip"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="zip"
                  placeholder="Zipcode"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <input
                required
                type="text"
                id="username"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  required
                  type="major"
                  name="major"
                  id="major"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Major"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <input
                type="submit"
                value="Sign Up"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
