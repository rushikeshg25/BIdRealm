"use client";

import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@uploadthing/react";
import Image from "next/image";
import { Suspense, useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

interface ImageUploadProps {
  ImageURL: (url: string) => void;
}

export default function ImageUpload({ ImageURL }: ImageUploadProps) {
  const [imgUrl, setImgUrl] = useState<string>("");
  return (
    <div className="w-fit ">
      {imgUrl.length > 0 ? (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="relative">
            <X
              className="absolute  -top-2 -right-2 cursor-pointer z-10  dark:bg-black bg-white font-bold dark:text-white size-6 rounded-full dark:border-white border-black border-2"
              onClick={() => setImgUrl("")}
            />
            <Image
              alt="Uploaded image"
              src={imgUrl}
              width={300}
              height={300}
            ></Image>
          </div>
        </Suspense>
      ) : (
        <UploadDropzone<OurFileRouter, "imageUploader">
          className="dark:text-white ut-label:dark:text-white  ut-label:text-black dark:border-dashed dark:border-border ut-button:bg-primary ut-button:dark:bg-primary ut-button:dark:text-black ut-button:hover:cursor-pointer
"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res[0]?.url) {
              setImgUrl(res[0].url);
              ImageURL(res[0].url);
              toast.success("Image uploaded!");
            }
          }}
          onUploadError={(error: Error) => {
            console.error("Upload error:", error);
            toast.error("Error uploading image! Try again.");
          }}
        />
      )}
    </div>
  );
}
