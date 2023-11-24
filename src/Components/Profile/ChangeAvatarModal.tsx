// import { useState } from "react";
import SectionLayout from "../common/SectionLayout";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

interface Props {
  onClick: () => void;
}

const ChangeAvatarModal = ({ onClick }: Props) => {
  // const [file, setFile] = useState<File>();
  const handleChange = (file: File) => {
    // setFile(file);
    console.log(file);
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={onClick}
      ></div>
      <SectionLayout className="p-10 fixed z-50 bottom-1/2 right-1/2 translate-x-1/2">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
      </SectionLayout>
    </>
  );
};

export default ChangeAvatarModal;
