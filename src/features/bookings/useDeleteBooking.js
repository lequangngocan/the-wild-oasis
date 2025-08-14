import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingFn } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingFn(bookingId),

    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: () => toast.error("There was an error while deleting"),
  });

  return { deleteBooking, isDeletingBooking };
}
