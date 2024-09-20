"use client";

import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import getUserRole from "@/app/_utils/api/getUserRole";

import Spinner from "@/app/_components/spinner/Spinner";

interface User {
  role: string;
}

const SettingsPage: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserRole = async () => {
      const userRole = await getUserRole();
      setUser(userRole);

      if (userRole?.role !== "Admin") {
        router.push("/access-denied");
      }
    };

    fetchUserRole();
  }, [router]);

  if (user === null) {
    return <Spinner />;
  }

  // Render settings page if the user is an admin
  return <div>Settings</div>;
};

export default SettingsPage;
