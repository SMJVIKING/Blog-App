import { createCategoryApi } from "@/features/category/api/categoryServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Category } from "../types/category";

interface ApiResponse {
  message: string;
  data?: any;
}

interface UseCreateCategoryReturn {
  isCreating: boolean;
  createCategory: (data: Category, options?: any) => void;
}

export default function useCreateCategory(): UseCreateCategoryReturn {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createCategory } = useMutation<
    ApiResponse,
    any,
    Category
  >({
    mutationFn: createCategoryApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err: any) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, createCategory };
}