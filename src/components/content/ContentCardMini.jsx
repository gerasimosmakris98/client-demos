
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from '@/lib/utils';

export function ContentCardMini({ item, index }) {
    const href = item.href || (item.type === 'project' ? `/portfolio/${item.slug}` : `/blog/${item.slug}`);
    const imageSrc = item.image;
    const isNew = item.date && (new Date().getTime() - new Date(item.date).getTime()) < 1000 * 60 * 60 * 24 * 7;

    return (
        <Card
            key={item.id}
            className={cn(
                "group flex overflow-hidden hover:border-primary/50 transition-all duration-300 animate-in fade-in zoom-in-95 fill-mode-both"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <div className="w-24 sm:w-32 aspect-square relative shrink-0">
                <Link to={href} className="block w-full h-full">
                    <img
                        src={imageSrc}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
                {isNew && (
                    <div className="absolute top-1 left-1">
                        <Badge className="text-[10px] h-4 px-1">New</Badge>
                    </div>
                )}
            </div>
            <div className="flex-1 p-3 flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-[10px] py-0 h-5 font-normal truncate max-w-[100px]">
                        {item.category}
                    </Badge>
                </div>
                <Link to={href} className="group-hover:text-primary transition-colors">
                    <h4 className="font-medium text-sm sm:text-base leading-tight line-clamp-2 mb-1">
                        {item.title}
                    </h4>
                </Link>
                <p className="text-xs text-muted-foreground line-clamp-1 truncate">
                    {item.description}
                </p>
            </div>
        </Card>
    );
}
