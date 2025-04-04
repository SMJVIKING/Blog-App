import { deleteUserApi } from "@/services/authService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// این هوک از React Query برای مدیریت درخواست‌ها استفاده می‌کند:
export default function useDeleteUser() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,

    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, deleteUser };
}
