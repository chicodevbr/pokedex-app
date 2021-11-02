import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { BASE_URL } from '../../api/PokesService';
import Button from '../UI/Button';
import { useHistory } from 'react-router-dom';

const Dashborad = () => {
  let history = useHistory();

  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/pokemon`).then((response) => {
      setPokes(response.data);
    });
  }, [pokes]);

  const getData = () => {
    axios.get(`${BASE_URL}/pokemon`).then((response) => {
      setPokes(response.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`${BASE_URL}/pokemon/${id}`).then(() => {
      getData();
    });
  };
  return (
    <React.Fragment>
      <div className={`flex flex-col items-center m-14 justify-center`}>
        <Button
          className="bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60 "
          onClick={() => history.replace('/add')}
        >
          Add Pokemon
        </Button>
      </div>

      <div className="flex flex-col m-14">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Generation
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Create At
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pokes.map((poke) => (
                    <tr key={poke._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={poke.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {poke.name}
                            </div>
                            <div className="text-sm text-gray-500"></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900"></div>
                        <div className="text-sm text-gray-500"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button
                          onClick={() => onDelete(poke._id)}
                          className="bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashborad;
