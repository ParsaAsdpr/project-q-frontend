import uploadApi from "@/utils/Services/upload.api";
import SectionLayout from "../common/SectionLayout";
import { FileUploader } from "react-drag-drop-files";
import authApi from "@/utils/Services/auth.api";
import { UserTypes } from "@/types/UserTypes";
import { toast } from "react-toastify";

interface Props {
  onClick: () => void;
}

const decodedToken = authApi.getCurrentUser();
const user: UserTypes = decodedToken as UserTypes;

const fileTypes = ["JPG", "PNG", "GIF"];

const ChangeAvatarModal = ({ onClick }: Props) => {

  const handleChange = async (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await uploadApi.upload(user._id, formData);

      authApi.logout();
      authApi.loginWithJwt(res.headers["x-auth-token"]);
      window.location.href = "/profile";
      
    } catch (error) {
      toast("خطایی هنگام ارسال فایل رخ داده است", {
        type: "error",
      });
    }
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
