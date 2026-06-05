import React from 'react';
import './Airplanes.css';
import { planes } from '../vars';
import { useState } from 'react';

function Airplanes() {
  const [data, setData] = useState(planes);
  const [sort, setSort] = useState('name asc');

  const sortName = () => {
    setData((pdata) => {
      pdata = pdata.sort();
      if (sort === 'name asc') {
        pdata = pdata.reverse();
        setSort('name desc');
      } else {
        setSort('name asc');
      }
      return pdata;
    });
  };

  const sortAvailible = () => {
    setData((pdata) => {
      pdata = pdata.sort((a, b) => {
        let aVal = a[1];
        let bVal = b[1];
        if (bVal === '-') {
          bVal = 0;
        }
        if (aVal === '-') {
          aVal = 0;
        }
        return aVal - bVal;
      });
      if (sort === 'av asc') {
        pdata = pdata.reverse();
        setSort('av desc');
      } else {
        setSort('av asc');
      }
      return pdata;
    });
  };

  const sortClass = () => {
    setData((pdata) => {
      pdata = pdata.sort((a, b) => {
        let aVal = a[2];
        let bVal = b[2];
        return aVal - bVal;
      });
      if (sort === 'class asc') {
        pdata = pdata.reverse();
        setSort('class desc');
      } else {
        setSort('class asc');
      }
      return pdata;
    });
  };

  const sortCapacity = () => {
    setData((pdata) => {
      pdata = pdata.sort((a, b) => {
        let aVal = a[3];
        let bVal = b[3];
        return aVal - bVal;
      });
      if (sort === 'cap asc') {
        pdata = pdata.reverse();
        setSort('cap desc');
      } else {
        setSort('cap asc');
      }
      return pdata;
    });
  };
  const sortRange = () => {
    setData((pdata) => {
      pdata = pdata.sort((a, b) => {
        let aVal = a[4];
        let bVal = b[4];
        return aVal - bVal;
      });
      if (sort === 'rng asc') {
        pdata = pdata.reverse();
        setSort('rng desc');
      } else {
        setSort('rng asc');
      }
      return pdata;
    });
  };

  const sortSpeed = () => {
    setData((pdata) => {
      pdata = pdata.sort((a, b) => {
        let aVal = a[5];
        let bVal = b[5];
        return aVal - bVal;
      });
      if (sort === 'spd asc') {
        pdata = pdata.reverse();
        setSort('spd desc');
      } else {
        setSort('spd asc');
      }
      return pdata;
    });
  };
  const sortWeight = () => {
    setData((pdata) => {
      pdata = pdata.sort((a, b) => {
        let aVal = a[6];
        let bVal = b[6];
        return aVal - bVal;
      });
      if (sort === 'wgt asc') {
        pdata = pdata.reverse();
        setSort('wgt desc');
      } else {
        setSort('wgt asc');
      }
      return pdata;
    });
  };
  return (
    <table className='rounded block max-w-fit mx-auto overflow-x-auto whitespace-no-wrap'>
      <thead className=''>
        <tr className='text-left border-b border-gray-300'>
          <th
            className='px-4 py-3 hover:bg-slate-700 rounded cursor-pointer'
            onClick={sortName}
          >
            Name
          </th>
          <th
            className='px-4 py-3 hover:bg-slate-700 rounded cursor-pointer'
            onClick={sortAvailible}
          >
            Available at
          </th>
          <th
            className='px-4 py-3 hover:bg-slate-700 rounded cursor-pointer'
            onClick={sortClass}
          >
            Class
          </th>
          <th
            className='px-4 py-3 hover:bg-slate-700 rounded cursor-pointer'
            onClick={sortCapacity}
          >
            Capacity
          </th>
          <th
            className='px-4 py-3 hover:bg-slate-700 rounded cursor-pointer'
            onClick={sortRange}
          >
            Range
          </th>
          <th
            className='px-4 py-3 hover:bg-slate-700 rounded cursor-pointer'
            onClick={sortSpeed}
          >
            Speed
          </th>
          <th
            className='px-4 py-3 hover:bg-slate-700 rounded cursor-pointer'
            onClick={sortWeight}
          >
            Weight
          </th>
        </tr>
      </thead>
      <tbody className='text-left table-body'>
        {data.map((airport) => {
          return (
            <tr key={airport[0]}>
              <td className='px-4 py-3'>{airport[0]}</td>
              <td className='px-4 py-3'>{airport[1]}</td>
              <td className='px-4 py-3'>{airport[2]}</td>
              <td className='px-4 py-3'>{airport[3]}</td>
              <td className='px-4 py-3'>{airport[4]}</td>
              <td className='px-4 py-3'>{airport[5]}</td>
              <td className='px-4 py-3'>{airport[6]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Airplanes;
