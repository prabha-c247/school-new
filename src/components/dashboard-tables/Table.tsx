import React, { useState, useEffect } from "react";
import { Table, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//data&time
import moment from "moment";
// filter
// import Filter from "../common/filter/Filter";
import SearchBar from "../common/serachbar/SearchBar";
import { TransitionHistoryType, MostSellingPlanType, TotalBalanceType } from "../../helper/Types";
import { RootState } from "../../redux/store/store";
import {
  totalBalanceAsync,
  totalIncomeAsync,
  overAllSellingPlanAsync,
  sellingPlanAsync,
  transitionHistoryAsync,
} from "../../redux/reducers/dashboardReducer";
import Chart from "react-google-charts";
interface FilterProps {
  filterYear?: string;
  setFilterYear?: string;
}

export const TotalIncome = () => {
  const totalIncomeData = useSelector((state: RootState) => state.dashboard.totalIncome);
  const chartData = totalIncomeData.weeklyIncome.map((item) => [
    item.day,
    item.income,
  ]);
  const chartOptions = {
    title: "Weekly Income",
    hAxis: { title: "Day" },
    vAxis: { title: "Income" },
  };

  return (
    <div className="container mt-5">
      <Chart        
        chartType="LineChart"
        // loader={<div>Loading Chart</div>}
        data={[["Day", "Income"], ...chartData]}
        options={chartOptions}        
      />
    </div>
  );
};

export const TotalBalance = () => { 
  // const totalBalanceData = useSelector((state: RootState) => state.dashboard.totalBalance) as TotalBalanceType;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalBalanceAsync() as never);
  }, [dispatch]);

  return (    
    <div>
      <h6>Transition History</h6>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>Withdraw Amount</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {/* {totalBalanceData.map((item: any, index: any) => (
            <tr key={index}>
              <td>{item.income}</td>
              <td>{item.day}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export const CourseTransitionHistory: React.FC<FilterProps> = ({
  filterYear,
  setFilterYear,
}) => {
  // const transitionHistoryData = useSelector((state: RootState) => state.dashboard.transitionHistory) as TransitionHistoryType;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(transitionHistoryAsync() as never);
  }, [dispatch]);
  return (
    <Table striped bordered hover variant="secondary">
      <thead>
        <tr>
          <th colSpan={2}>Buyer Name/Image</th>
          <th>Sailed Plan Name</th>
          <th>Category Name</th>
          <th>Date/Time</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Image
              src={require("../../assets/images/usericon.png")}
              alt="Buyer"
              width={50}
            />
          </td>
          <td>St. Mary H.S. School</td>
          <td>Silver Plan</td>
          <td>@Leadership</td>
          <td>20-03-2023 12:00 Am</td>
          <td>@$10,000</td>
        </tr>
      </tbody>
    </Table>
  );
};

export const MostSellingPlan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(overAllSellingPlanAsync() as never);
  }, [dispatch]);
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td>Test Name :</td>
            <td>Total Purchased:</td>
            <td>Total Earning : </td>
          </tr>
          <tr>
            <td>Platinum Plan </td>
            <td>
              <b>100k+</b>
            </td>
            <td>
              <b>$73,828,790</b>
            </td>
          </tr>
          <tr>
            <td>Platinum Plan </td>
            <td>
              <b>100k+</b>
            </td>
            <td>
              <b>$73,828,790</b>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export const OverallSelling = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(overAllSellingPlanAsync() as never);
  }, [dispatch]);
  return (
    <Table striped bordered hover variant="secondary">
      <thead>
        <tr>
          <th>Test Name</th>
          <th>Total sell</th>
          <th>Total Earning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>

        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
        <tr>
          <td>Single Use Plan</td>
          <td>1029837</td>
          <td>$44,234,575</td>
        </tr>
      </tbody>
    </Table>
  );
};

export const TableContainer = () => {
  // State for filtering logic
  const itemList = [
    "Apple",
    "Orange",
    "Banana",
    "Cherry",
    "Milk",
    "Peanuts",
    "Butter",
    "Tomato",
  ];
  // const [filterYear, setFilterYear] = useState(itemList);//in the usestate keep the res of getapi

  return (
    <div>
      {/* <Filter filterYear={filterYear} setFilterYear={setFilterYear} /> */}
      <TotalBalance />
      {/* <CourseTransitionHistory filterYear={filterYear}/> */}
      <MostSellingPlan />
      <OverallSelling />
    </div>
  );
};
