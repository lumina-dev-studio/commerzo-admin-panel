"use client";

import { isLoggedIn } from "@/Services/Action/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


// Layout component for Dashboard
const DashBoardLayout = ({ children }: any) => {
  const router = useRouter();
 
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    }
  }, [router, children]);

  return children;
};

export default DashBoardLayout;
