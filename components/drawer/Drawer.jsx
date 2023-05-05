import { Drawer, Image } from "antd";
import ImageLoader from "./ImageLoader";

const DrawerComponent = ({ data, ...props }) => {
  return (
    <Drawer {...props}>
      <div style={{ maxWidth: 335, maxHeight: 275 }}>
        <Image
          alt="image1"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src={`${data.image_url}`}
          placeholder={<ImageLoader />}
        />
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
