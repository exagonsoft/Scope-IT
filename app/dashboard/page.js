'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const DashBoard = () => {
    const { data: session } = useSession();
    const router = useRouter();
    if (!session?.user) {
        router.push("/")
    }
    return (
        <div className="w-full">
         DASHBOARD
        </div>
    )
}

export default DashBoard
