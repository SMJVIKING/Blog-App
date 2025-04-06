"use client";

import { uploadAvatarApi } from "@/services/authService";
import Image from "next/image";
import { useState } from "react";
import { Controller } from "react-hook-form";

function UploadAvatarImage({ control, setValue }) {
  const [coverImageUrl, setCoverImageUrl] = useState(null);

  return (
    <Controller
      name="coverImage"
      control={control}
      render={({ field: { onChange, ...rest } }) => (
        <div className="relative w-32 h-32 mx-auto">
          <div className="w-full h-full rounded-full overflow-hidden border border-gray-300 shadow">
            {coverImageUrl ? (
              <Image
                src={coverImageUrl}
                alt="avatar"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-400 text-sm">
                بدون عکس
              </div>
            )}
          </div>

          <label
            htmlFor="cover-upload"
            className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-2 rounded-full shadow cursor-pointer hover:bg-primary-600 transition-all"
          >
            📷
          </label>

          <input
            type="file"
            id="cover-upload"
            accept="image/*"
            className="hidden"
            onChange={async(e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              setCoverImageUrl(URL.createObjectURL(file));

              const formData = new FormData();
              formData.append("avatar", file);

              try {
                const data = await uploadAvatarApi(formData, {
                  withCredentials: true, //send cookie
                });

                if (data?.url) {
                  setValue("coverImage", data.url);
                }
              } catch (err) {
                console.error("خطا در آپلود عکس:", err);
              }

              e.target.value = "";
            }}
            {...rest}
          />
        </div>
      )}
    />
  );
}

export default UploadAvatarImage;
