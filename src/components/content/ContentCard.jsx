
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
// import Image from "next/image"; // Converting to standard img
import { Clock, Eye, MessageSquare, Share2, Heart, Sparkles, Star } from 'lucide-react';
// import { timeAgo } from "@/lib/time-ago"; // TODO: Port time-ago or use date-fns
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";

function timeAgo(date) {
    if (!date) return '';
    return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function ContentCard({ item, index }) {
    // Adaptation for demo routing
    const href = item.href || (item.type === 'project' ? `/portfolio/${item.slug}` : `/blog/${item.slug}`);

    // Mock engagement stats if not present
    const engagement = item.engagement || { views: 0, likes: 0, comments: 0 };

    // Image handling
    const imageSrc = item.image;

    const isNew = item.date && (new Date().getTime() - new Date(item.date).getTime()) < 1000 * 60 * 60 * 24 * 7; // 7 days

    return (
        <Card
            key={item.id}
            className="group flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both overflow-hidden h-full"
            style={{ animationDelay: `${100 + index * 100}ms` }}
        >
            <CardHeader className="p-0 relative">
                {isNew && (
                    <Badge className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground shadow-lg animate-pulse">
                        New
                    </Badge>
                )}
                <div className="aspect-video overflow-hidden border-b border-border/50">
                    <Link to={href}>
                        <img
                            src={imageSrc}
                            alt={item.title}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                    </Link>
                </div>
            </CardHeader>
            <CardContent className="flex-1 p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs font-normal">
                        {item.category}
                    </Badge>
                    {item.readingTime && (
                        <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {item.readingTime}
                        </div>
                    )}
                </div>
                <Link to={href} className="block group-hover:text-primary transition-colors">
                    <CardTitle className="text-xl leading-tight line-clamp-2">{item.title}</CardTitle>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {item.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">
                                #{tag}
                            </span>
                        ))}
                        {item.tags.length > 3 && (
                            <span className="text-[10px] text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded">
                                +{item.tags.length - 3}
                            </span>
                        )}
                    </div>
                )}
            </CardContent>
            <CardFooter className="p-4 pt-0 text-xs text-muted-foreground border-t bg-muted/20 mt-auto">
                <div className="w-full flex items-center justify-between pt-3">
                    <span suppressHydrationWarning>{timeAgo(item.date)}</span>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1" title="Views">
                            <Eye className="w-3 h-3" />
                            <span>{engagement.views || 0}</span>
                        </div>
                        <div className="flex items-center gap-1" title="Likes">
                            <Heart className="w-3 h-3" />
                            <span>{engagement.likes || 0}</span>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
