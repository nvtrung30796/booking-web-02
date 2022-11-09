import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import "../styles/car-listing.scss";
import axios from "axios";
import { getDatabase, ref, child, get } from "firebase/database";
import {database} from '../config/firebase'

const CarListing = () => {
  const [data, setData] = useState(carData);
  const [searchTerm, setSearchTerm] = useState("");

//   const dbRef = ref(database);
// get(child(dbRef, `Cars`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


 




  const sortByPirce = (value) => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
          switch(value) {
            case "low":
              return dataA.price - dataB.price;
            case "high":
              return dataB.price - dataA.price;
            default: console.log('error')
          }
          return true
    })
    setData(dataCopy)
  }

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="carlisting d-flex align-items-center gap-3 mb-5 justify-content-between flex-wrap">
                <div className=" d-flex align-items-center ">
                  <span className=" d-flex align-items-center gap-2 mr-1">
                    <i  class="ri-sort-asc"></i> Sort By
                  </span>

                  <select className="select"  onChange={e => sortByPirce(e.target.value)} >
                    <option>Select</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                  </select>
                </div>

                <div className="nav__rightt">
                  <div className="search__box">
                    <input
                      type="text"
                      placeholder="Search..."
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                    <span>
                      <i class="ri-search-line"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Col>

            {data
              .filter((item) => {
                if (searchTerm === "") {
                  return item;
                } else if (
                  item.carName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => (
                <CarItem item={item} key={item.id} />
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
