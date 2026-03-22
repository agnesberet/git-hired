import { developer } from "@/lib/data";
import ProfileCard from "@/components/ProfileCard";

export default function ProfilePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Developer Profile</h1>
                <p className="text-muted-foreground mt-2">
                    Your public profile visible to recruiters
                </p>
            </div>

            <ProfileCard developer={developer} />
        </main>
    );
}