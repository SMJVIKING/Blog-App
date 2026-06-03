import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCommentApi } from "../api/commentService";

export default function useUpdateComment() {
  const { isPending: isUpdating, mutate: UpdateComment } = useMutation({
    mutationFn: updateCommentApi,

    onSuccess: (data) => {
      toast.success(data.message);
    },

    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isUpdating, UpdateComment };
}