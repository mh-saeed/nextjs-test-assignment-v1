"use client";

import styles from "./heroSection.module.css";
import { Typography, Button } from "antd";
import React from "react";

const { Text } = Typography;

const HeroSection = () => {
  return (
    <>
      <div className={styles.heroSectionDiv}>
        <span className={styles.checkInsDiv}>
          <Text className={styles.checkIns}>CheckIns</Text>

          <div className={styles.checkInsPara}>
            <Text>
              Lorem ipsus dolor sit amen, something important to say here
            </Text>
          </div>
        </span>

        <Button type="primary" className={styles.button}>
          <Text className={styles.buttonText}>Add Check In</Text>
        </Button>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default HeroSection;
