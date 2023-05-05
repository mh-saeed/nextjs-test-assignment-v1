import { useState } from "react";
import { Modal, Input } from "antd";
import styles from "./checkInModal.module.css";
import { useMutation } from "@apollo/client";
import { POST_CHECK_IN } from "./queries";

const CheckInModal = ({ modal, setModal }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [insert_check_in_one, { data, loading, error }] =
    useMutation(POST_CHECK_IN);

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleImageChange = (event) => setImageUrl(event.target.value);

  const handleSubmit = () => {
    e.preventDefault();

    insert_check_in_one({
      variables: {
        check_in: { name: title, image_url: imageUrl, created_at: new Date() },
      },
    });

    setTitle("");
    setImageUrl("");
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
export default CheckInModal;
