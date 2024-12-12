import { FormFileUpload } from "@wordpress/components";

const MyUsefulFormFileUpload = () => (
  <FormFileUpload
    __next40pxDefaultSize
    accept="image/*"
    onChange={(event) => console.log(event.currentTarget.files)}
  >
    Upload
  </FormFileUpload>
);

export default MyUsefulFormFileUpload;
