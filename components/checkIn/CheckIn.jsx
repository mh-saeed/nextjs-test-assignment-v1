import styles from "./checkIn.module.css";
import { useState } from "react";
import { Modal, Input } from "antd";
import { useMutation } from "@apollo/client";
import { POST_CHECK_IN } from "./queries";

import { useRefetching } from "@/Context/RefetchingContext";

const CheckIn = ({ modal, setModal }) => {
  // usestate to store input values
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // toggleFetching will change context which will trigger refetching in check_in
  const { toggleFetching } = useRefetching();

  // mutation query
  const [insert_check_in_one, { data, loading, error }] =
    useMutation(POST_CHECK_IN);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  // onChange handle functions to update state & store values
  const handleTitleChange = (event) => {
    setTitle((prev) => (prev = event.target.value));
  };
  const handleImageChange = (event) => {
    setImageUrl((prev) => (prev = event.target.value));
  };

  // onSubmit/onOk handle functions to mutate data and reset states
  const handleSubmit = () => {
    if (setTitle && imageUrl) {
      insert_check_in_one({
        variables: {
          check_in: {
            name: title,
            image_url: imageUrl,
            created_at: new Date(),
          },
        },
      });

      setTitle("");
      setImageUrl("");
      toggleFetching();
    }
  };

  return (
    <Modal
      title="New Checkin"
      className={styles.checkInModal}
      centered
      open={modal}
      onOk={() => handleSubmit()}
      onCancel={() => {
        setTitle("");
        setImageUrl("");
        setModal(false);
      }}
      okText="Create CheckIn"
      okButtonProps={{
        className: `${styles.createCheckInButton}`,
      }}
    >
      <Input
        size="large"
        placeholder="Check In Title"
        value={title}
        onChange={handleTitleChange}
        style={{
          marginTop: "26px",
          marginBottom: "10px",
        }}
      />
      <Input
        size="large"
        value={imageUrl}
        onChange={handleImageChange}
        placeholder="Image Url"
        style={{
          marginBottom: "56px",
        }}
      />
    </Modal>
  );
};

export default CheckIn;
