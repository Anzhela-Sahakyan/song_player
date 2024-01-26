import { useRef, useState } from "react";
import styles from "./musicUploadForm.module.css";

export default function MusicUploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress === 100) {
            clearInterval(interval);
            console.log("A new song uploaded");
            return 100;
          }
          return Math.min(prevProgress + 10, 100);
        });
      }, 500);
    }
  };
  const handleChooseFileClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className={styles.uploadFormContainer}>
      <div>
        <input
          type="file"
          ref={fileInputRef}
          accept=".mp3,.wav"
          onChange={handleFileChange}
          style={{ display: "none" }}
          className={styles.fileInput}
        />
        <button
          className={styles.uploadFormBtns}
          onClick={handleChooseFileClick}
        >
          Choose File
        </button>
      </div>
      <div className={styles.fileName}>
        {selectedFile && <div> {selectedFile.name}</div>}
      </div>
      <button
        className={styles.uploadFormBtns}
        onClick={handleUpload}
        disabled={!selectedFile}
      >
        Upload
      </button>

      {uploadProgress > 0 && (
        <div className={styles.uploadProgresss}>
          Uploading {uploadProgress}%
        </div>
      )}
      {uploadProgress > 0 && (
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
