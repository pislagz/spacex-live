import React from "react";
import { InfoItem } from "app/components/common/InfoItem";
import { Wrapper, Row, Col } from "./styled";

export const Facility = ({ image }) => (
  <Wrapper image={image}>
    <Row justifyContent="space-between">
      <Col ml="5px">
        <InfoItem
          flexDirection="column-reverse"
          label="LC-39A & SLC-40"
          info="Cape Canaveral"
          noUpper
        />
      </Col>
      <Col mr="5px">
        <InfoItem label="region" info="Florida" />
      </Col>
    </Row>
    <Row></Row>
  </Wrapper>
);
