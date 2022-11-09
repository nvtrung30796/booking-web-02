import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";
import blogData from "../../src/assets/data/blogData";
import { BlogItem } from "../components/UI/BlogList";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(blogData);

  const sortByPName = (value) => {
    const dataCopy = [...data];
    dataCopy.sort((dataA, dataB) => {
      const fullNameA = `${dataA.title}`
      const fullNameB = `${dataB.title}`

      switch (value) {
        case "ZA":
          return fullNameB.localeCompare(fullNameA);
        case "AZ":
          return fullNameA.localeCompare(fullNameB);
        case "oldest":
          return Number(dataA.date.replace('-', '').replace('-','')) - Number(dataB.date.replace('-', '').replace('-',''));
        case "newest":
          return Number(dataB.date.replace('-', '').replace('-','')) - Number(dataA.date.replace('-', '').replace('-',''));
        default:
          console.log("error");
      }
      return true;
    });
    setData(dataCopy);
  };

  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="carlisting d-flex align-items-center gap-3 mb-5 justify-content-between flex-wrap">
                <div className=" d-flex align-items-center ">
                  <span className=" d-flex align-items-center gap-2 mr-1">
                    <i class="ri-sort-asc"></i> Sort By
                  </span>

                  <select className="select" onChange={(e) => sortByPName(e.target.value)}>
                    <option>Select</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="AZ">A - Z</option>
                    <option value="ZA">Z - A</option>
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
          </Row>
          <Row>
            {/* <BlogList />
            <BlogList /> */}
            {data
              .filter((item) => {
                if (searchTerm === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => (
                <BlogItem item={item} key={item.id} />
              ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
