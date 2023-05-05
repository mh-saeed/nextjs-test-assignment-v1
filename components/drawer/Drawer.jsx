import { Drawer, Image } from "antd";
import ImageLoader from "./ImageLoader";

const DrawerComponent = ({ data, ...props }) => {
  console.log(data);

  return (
    <Drawer {...props}>
      <Image
        alt="image1"
        width={335}
        src={`${data.image_url}`}
        placeholder={<ImageLoader />}
      />
    </Drawer>
  );
};

export default DrawerComponent;
