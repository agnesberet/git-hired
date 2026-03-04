import { Developer } from "@/lib/data";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type ProfileCardProps = {
    developer: Developer;
};

export default function ProfileCard({ developer }: ProfileCardProps) {
    const initials = developer.name
        .split(" ")
        .map((n) => n[0])
        .join("");

    return (
        <Card className="max-w-xl mx-auto">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg font-bold">
                            {initials}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-xl">{developer.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                            {developer.location} · {developer.yearsOfExperience} years exp.
                        </p>
                        {developer.openToWork && (
                            <Badge className="mt-2 bg-green-100 text-green-700 hover:bg-green-100">
                                ✅ Open to work
                            </Badge>
                        )}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{developer.bio}</p>

                <div>
                    <p className="text-sm font-medium mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {developer.stack.map((tech) => (
                            <Badge key={tech} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
                <a href={`https://github.com/${developer.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
                >
                    github.com/{developer.github}
                </a>
            </CardContent>
        </Card>
    );
}