
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useForm } from "react-hook-form";
// import { toast } from "sonner"; // TODO: Install sonner or mock

// Mock toast for now
const toast = {
    success: (msg) => console.log("Toast Success:", msg),
    error: (msg) => console.error("Toast Error:", msg),
};


export function Footer() {
    const currentYear = new Date().getFullYear();
    const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        // Mock submission
        console.log("Newsletter subscription:", data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.success("Subscribed successfully!");
        reset();
    };

    return (
        <footer className="bg-background border-t">
            <div className="container px-4 py-12 md:py-16 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    <div className="md:col-span-2 space-y-4">
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl font-headline">
                            <span>GM</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Building digital experiences with a focus on performance, accessibility, and modern design.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full">
                                            <a href="https://github.com/g-makris" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                                <Github className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>GitHub</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full">
                                            <a href="https://linkedin.com/in/g-makris" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                                <Linkedin className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>LinkedIn</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full">
                                            <a href="https://twitter.com/g_makris_dev" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                                <Twitter className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Twitter</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full">
                                            <a href="mailto:contact@g-makris.com" aria-label="Email">
                                                <Mail className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Email</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Platform</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="https://g-makris.com/portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
                            <li><a href="https://g-makris.com/blog" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><a href="https://g-makris.com/services" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="https://g-makris.com/about" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="https://g-makris.com/roadmap/board" className="hover:text-primary transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Stay Updated</h3>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to the newsletter for the latest updates and articles.
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Enter your email"
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="h-9 bg-background"
                                />
                                <Button type="submit" size="sm" className="h-9 w-9 p-0" disabled={isSubmitting}>
                                    <Send className="h-4 w-4" />
                                    <span className="sr-only">Subscribe</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} George Makris. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="https://g-makris.com/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="https://g-makris.com/legal/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="https://g-makris.com/sitemap" className="hover:text-primary transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
