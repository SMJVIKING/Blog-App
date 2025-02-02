import Spinner from "@/ui/Spinner";

function Loading() {
  return (
    <div className="grid items-center justify-center gap-x-8">
      <span className="text-lg text-secondary-500">درحال بارگذاری پست ها</span>
      <Spinner />
    </div>
  );
}

export default Loading;
