import { Job } from "@/lib/data";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type JobCardProps = {
    job: Job;
};

export default function JobCard({ job }: JobCardProps) {
    return (
        <Card className="hover:shadow-md transition-shadow duration-200">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                            {job.company} · {job.location}
                        </p>
                    </div>
                    <Badge variant="outline">{job.type}</Badge>
                </div>
            </CardHeader>

            <CardContent>
                <p className="text-sm font-medium text-green-600">{job.salary}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {job.stack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter>
                <p className="text-xs text-muted-foreground">
                    Posted {new Date(job.postedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                })}
                </p>
            </CardFooter>
        </Card>
    );
}