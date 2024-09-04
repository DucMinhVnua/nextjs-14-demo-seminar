"use client";

import { useRouter } from "next/navigation";

export default function useNavigate() {
  const router = useRouter();

  const navigate = (
    method: "push" | "replace",
    path: string,
    options?: any // Options can include various properties for navigation
  ) => {
    router[method](path, options);
  };

  return {
    navigate,
  };
}
