import SignOutBtn from "./SignOutBtn";

const ProfileHeader = () => {
  return (
    <>
      <header className="flex justify-between w-full h-16 items-center px-4 bg-white shadow-md">
        <p className="logo text-2xl font-bold text-[#2686f7]">Back Word</p>
        <div>
          <SignOutBtn />
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
