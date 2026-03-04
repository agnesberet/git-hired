import { jobs } from "@/lib/data";
import JobCard from "@/components/JobCard";

export default function JobsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Find your next role</h1>
                <p className="text-muted-foreground mt-2">
                    {jobs.length} jobs available right now
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </main>
    );
}