import { editPostApi } from "@/features/blogs/api/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface EditPostParams {
  id: string;
  data: FormData;
}

interface ApiResponse {
  message: string;
  data?: any;
}

interface UseEditPostReturn {
  isEditing: boolean;
  editPost: (params: EditPostParams, options?: any) => void;
}

export default function useEditPost(): UseEditPostReturn {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editPost } = useMutation<
    ApiResponse,
    any,
    EditPostParams
  >({
    mutationFn: editPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err: any) => toast.error(err?.response?.data?.message),
  });

  return { isEditing, editPost };
}