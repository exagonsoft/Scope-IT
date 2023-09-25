'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Features = () => {
    const { data: session } = useSession();
    const router = useRouter();
    if (!session?.user) {
        router.push("/")
    }
    return (
        <div>
            FEATURES
        </div>
    )
}

export default Features
