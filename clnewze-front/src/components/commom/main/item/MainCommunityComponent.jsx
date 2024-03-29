import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Col, Table } from "reactstrap";
import styles from "../../../../scss/common/main/main.module.scss";

const MainCommunityComponent = () => {
  return (
    <Col className={`${styles?.mainQnA}`}>
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>커뮤니티</h1>
        <p>
          <ChevronRight /> 더보기
        </p>
      </div>
      <Table className="table-hover">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>안녕하세요?</td>
          </tr>
          <tr>
            <td>2</td>
            <td>만나서 반가워요</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default MainCommunityComponent;
