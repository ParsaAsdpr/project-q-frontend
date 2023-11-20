import SectionLayout from "../common/SectionLayout";

interface Props {
  onClick: () => void;
}

const ChangeAvatarModal = ({ onClick }: Props) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
        onClick={onClick}
      ></div>
      <SectionLayout className="p-10 fixed z-50 bottom-1/2 right-1/2 translate-x-1/2">
        p
      </SectionLayout>
    </>
  );
};

export default ChangeAvatarModal;
