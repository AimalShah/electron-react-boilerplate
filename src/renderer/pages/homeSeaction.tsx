import React from 'react';
import { Card } from 'flowbite-react';
import {
  Car,
  DollarSign,
  DoorClosed,
  DoorOpen,
  Plus,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeSeaction() {
  const date = new Date();

  const mockData = [1, 2, 4, 5, 6, 7, 8];
  return (
    <section className="space-y-4 font-sans">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Hello , Welcome To Dashboard
        </h1>
        <p>{date.toLocaleDateString()}</p>
      </div>
      <div className="flex gap-2 ">
        <Card className="max-w-sm min-w-80 2xl:max-w-full flex-1">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Total Students</h1>
            <Users />
          </div>
          <div>
            <p className="text-2xl font-bold">100</p>
          </div>
        </Card>
        <Card className="max-w-sm min-w-80 2xl:max-w-full  flex-1">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Total Rooms</h1>
            <DoorOpen />
          </div>
          <div>
            <p className="text-2xl font-bold">104</p>
          </div>
        </Card>
        <Card className="max-w-sm min-w-80 2xl:max-w-full  flex-1">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Total Dues</h1>
            <DollarSign />
          </div>
          <div>
            <p className="text-2xl font-bold">RS 112000</p>
          </div>
        </Card>
      </div>

      <div className="flex gap-2">
        <Card className="max-w-sm min-w-80 flex-1">
          <div className="mb-4 flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Remaning Dues
            </h5>
            <Link
              to="/"
              className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500"
            >
              View all
            </Link>
          </div>
          <div className="flow-root h-full relative">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700 h-[21rem] overflow-y-scroll 2xl:h-[32rem] 2xl:overflow-auto">
              {mockData.map((data) => (
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      <img
                        alt="Neil image"
                        height="32"
                        src="https://flowbite-react.com/_next/image?url=%2Fimages%2Fpeople%2Fprofile-picture-1.jpg&w=32&q=75"
                        width="32"
                        className="rounded-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Neil Sims
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $320
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <div className="py-4 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-grow">
          <h1 className="text-xl font-semibold mb-4">Add New Room</h1>
          <div>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
