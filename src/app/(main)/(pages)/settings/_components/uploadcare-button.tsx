"use client"; // is needed only if you’re using React Server Components
import {
  FileUploaderRegular,
  UploadcareFile,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useRouter } from "next/navigation";

type Props = {
  onUpload: (url: string) => any;
};

function App({ onUpload }: Props) {
  const router = useRouter();

  const handleFileChange = async (event: any) => {
    const file = event.detail.file as UploadcareFile;

    // Use cdnUrl to get the file URL
    const fileUrl = file.cdnUrl;

    // Check if fileUrl is not null
    if (fileUrl) {
      // Call your upload handler
      const uploadedFile = await onUpload(fileUrl);

      if (uploadedFile) {
        router.refresh();
      }
    } else {
      // Handle the case where fileUrl is null
      console.error("File URL is null.");
    }
  };

  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-light"
        pubkey="653143260a794daec9db"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default App;
