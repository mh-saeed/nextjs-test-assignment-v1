"use client";

import { useState } from "react";
import styles from "./heroSection.module.css";
import { Typography, Button } from "antd";
import React from "react";
import CheckIn from "../checkIn/CheckIn";

const { Text } = Typography;

const HeroSection = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.heroSectionDiv}>
      <span className={styles.checkInsDiv}>
        <Text className={styles.checkIns}>CheckIns</Text>

        <div className={styles.checkInsPara}>
          <Text>
            Lorem ipsus dolor sit amen, something important to say here
          </Text>
        </div>
      </span>

      <Button
        type="primary"
        className={styles.button}
        onClick={() => setModal((prev) => (prev = true))}
      >
        <Text className={styles.buttonText}>Add Check In</Text>
      </Button>

      <CheckIn modal={modal} setModal={setModal} />
    </div>
  );
};

export default HeroSection;
