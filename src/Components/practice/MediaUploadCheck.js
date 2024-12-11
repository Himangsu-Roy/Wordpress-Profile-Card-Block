// import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
// import { Button } from "@wordpress/components";

// const MediaUploader = ({ onSelect }) => (
//   <MediaUploadCheck>
//     {" "}
//     {/* Ensures the user has upload permissions */}
//     <MediaUpload
//       onSelect={onSelect} // Callback triggered when a file is selected
//       allowedTypes={["image", "video"]} // Restrict file types
//       render={(
//         { open } // Function to render the upload UI
//       ) => (
//         <Button onClick={open} variant="primary">
//           Upload Media
//         </Button>
//       )}
//     />
//   </MediaUploadCheck>
// );

// export default MediaUploader;

import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

const FileUpload = ({ onChange, label = "Upload File" }) => {
  const handleSelect = (media) => {
    if (media) {
      console.log("Media selected:", media);
      if (onChange) onChange(media);
    }
  };

  return (
    <div className="file-upload-container">
      <MediaUploadCheck>
        <MediaUpload
          onSelect={handleSelect}
          allowedTypes={["image", "video"]}
          render={({ open }) => (
            <Button onClick={open} variant="primary">
              {label}
            </Button>
          )}
        />
      </MediaUploadCheck>
    </div>
  );
};

export default FileUpload;
