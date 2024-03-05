interface Props {
  profilePic: string;
  name: string;
}

export const Profile: React.FC<Props> = ({ profilePic, name }) => {
  return (
    <div className="flex items-center bg-slate-300 h-5/6 w-1/3 rounded-profileBR">
      <div className="h-14 w-14 bg-white rounded-1/2 flex justify-center items-center">
        {profilePic}
      </div>
      <div className="ml-2 text-xl">{name}</div>
    </div>
  );
};
