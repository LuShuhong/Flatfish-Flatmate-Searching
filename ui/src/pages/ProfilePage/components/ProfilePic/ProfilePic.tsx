interface Props {
  pic: string;
}

export const ProfilePic: React.FC<Props> = ({ pic }) => {
  return <img src={pic} alt="profile" className="w-28 h-28 rounded-1/2"></img>;
};
