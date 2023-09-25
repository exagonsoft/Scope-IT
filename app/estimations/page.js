'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Estimations = () => {
    const { data: session } = useSession();
    const router = useRouter();
    if (!session?.user) {
        router.push("/")
    }
    return (
        <div>
            ESTIMATIONS
        </div>
    )
}

export default Estimations
