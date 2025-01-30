"use client";

import { useRouter } from "next/navigation";

export default function useMoveBack() {
  const router = useRouter();

//   this is not a fun just an action :
//   return router.back();


// but this is a fun :
  return ()=> router.back();
}

