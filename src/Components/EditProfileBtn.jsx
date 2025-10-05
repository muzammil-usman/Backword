import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditProfileBtn = (prop) => {
  return (
    <>
      <div
        className="flex text-white hover:cursor-pointer items-center justify-center w-32 h-10 gap-1.5 bg-[#2686f7]"
        onClick={prop.modal}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        <p>Edit Profile</p>
      </div>
    </>
  );
};

export default EditProfileBtn;
