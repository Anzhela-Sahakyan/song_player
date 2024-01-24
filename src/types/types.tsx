export default interface ISong {
  songName: string;
  artistName: string;
  trackNumber: number;
  file?: File;
}

export interface IButtonProps {
  children: React.ReactNode;
  label: string;
  className?: string;
  onClick: () => void;
}
