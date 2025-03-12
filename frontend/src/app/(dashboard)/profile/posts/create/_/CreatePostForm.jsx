"use client";

import { useCategories } from "@/hooks/useCategories";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object();
const { categoriesData } = useCategories();

function CreatePostForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  return (
    <form className="form">
      <RHFTextField
        label="عنوان :"
        name="title"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="متن کوتاه :"
        name="briefText"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="متن :"
        name="text"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="اسلاگ :"
        name="slug"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFTextField
        label="زمان مطالعه :"
        name="readingTime"
        register={register}
        errors={errors}
        isRequired
      />
      <RHFSelect
        label="دسته بندی :"
        name="category"
        register={register}
        errors={errors}
        isRequired
        options={categoriesData}
      />
    </form>
  );
}
export default CreatePostForm;
