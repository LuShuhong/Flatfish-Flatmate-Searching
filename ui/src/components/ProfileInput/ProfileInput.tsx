import { ProfileInputFields } from "../ProfileInputFields/ProfileInputFields";

export const ProfileInput: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-30% h-full">
      <div className="flex items-center justify-center h-1/6 w-full">
        <div className="text-2xl">My Profile</div>
      </div>
      <ProfileInputFields />
    </div>
  );
};
