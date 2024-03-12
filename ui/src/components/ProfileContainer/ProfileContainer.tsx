interface Props {
  profilePic: string | undefined;
  name: string | undefined;
}

export const ProfileContainer: React.FC<Props> = ({ profilePic, name }) => {
  if (name?.includes("@")) {
    name = name.slice(0, name.indexOf("@"));
  }
  if (name?.includes(".")) {
    name = name.slice(0, name.indexOf("."));
  }
  return (
    <div className="flex items-center h-5/6 w-1/3 rounded-profileBR">
      <img
        src={profilePic}
        alt={name}
        className="h-10 w-10 rounded-1/2 flex justify-center items-center"
      ></img>
      <div className="ml-2 text-sm">{name}</div>
    </div>
  );
};
