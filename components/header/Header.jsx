"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { Typography, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

const { Text } = Typography;

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.Link}>
        <Text className={styles.logo}>AAA</Text>
      </Link>

      <span className={styles.button}>
        <Link href={"/"} className={styles.Link}>
          <Text className={styles.navItem}>Feedback</Text>
        </Link>

        <Link href={"/"} className={styles.Link}>
          <Text className={styles.navItem}>Support</Text>
        </Link>

        <Avatar
          className="avatar"
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </span>
    </header>
  );
};

export default Header;
