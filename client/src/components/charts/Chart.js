// src/App.js
import ReactEcharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
function Chart() {
  const navigate = useNavigate();
  const [jobAds, setJobAds] = useState([{}, {}]);
  const getData = async () => {
    const response = await fetch('http://localhost:8080/jobAdverts', {
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
        console.log(data);
        setJobAds(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        navigate('/login');
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const mapper = jobAds
    .map((jobAd) => jobAd.address)
    .reduce((acc, curr) => ((acc[curr] = acc[curr] + 1 || 1), acc), {});
  const key = Object.keys(mapper);
  const value = Object.values(mapper);
  const option = {
    xAxis: {
      type: 'category',
      data: key,
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: value,
        type: 'bar',
      },
    ],
  };

  return (
    <div className=" w-60 mt-10 md:h-2/3 md:w-1/2 m-auto">
      <ReactEcharts option={option} />

      <div className="bg-white border-b">
        <div
          scope="col"
          className="text-md  font-medium text-gray-900 px-6 py-4
          text-center"
        >
          {' '}
          Category By City
        </div>
      </div>
    </div>
  );
}
export default Chart;
