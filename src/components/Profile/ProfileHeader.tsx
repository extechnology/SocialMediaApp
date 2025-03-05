import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Camera, Edit, Grid, Instagram, Twitter, Link as LinkIcon, Mail, Heart, BookmarkCheckIcon, UserCheck, UserPlus} from "lucide-react";
import ProfileStat from "./ProfileStats";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


interface ProfileHeaderProps {
    isCurrentUser?: boolean;
}

interface PostImage {
    url: string;
    likes: number;
}

const ProfileHeader = ({ isCurrentUser = false }: ProfileHeaderProps) => {

    const navigate = useNavigate();

    const [isFollowing, setIsFollowing] = useState(false);

    const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts');


    // Sample posts images with like counts
    const postsImages: PostImage[] = [
        { url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80", likes: 124 },
        { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", likes: 89 },
        { url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80", likes: 256 },
        { url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80", likes: 42 },
        { url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80", likes: 311 },
        { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", likes: 158 },
    ];


    // Sample saved posts with like counts
    const savedImages: PostImage[] = [
        { url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80", likes: 87 },
        { url: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80", likes: 224 },
        { url: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=800&q=80", likes: 145 },
    ];


    // Function to handle edit profile
    const handleEditProfile = () => {
        navigate('/edit-profile');
    };


    return (

        <div className="space-y-6 animate-fade-in">

            <Card className="overflow-hidden shadow-none sm:shadow-md border-0 sm:border py-0 sm:py-6">

                <CardContent className="p-4 sm:p-6">

                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">

                        {/* Left section - Avatar and action button */}
                        <div className="flex flex-col items-center">

                            <div className="relative group mb-4 md:mb-6 animate-scale-in">

                                <Avatar className="h-28 w-28 md:h-36 md:w-36 border-2 border-primary shadow-lg">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
                                    <AvatarFallback className="text-4xl text-primary">JD</AvatarFallback>
                                </Avatar>

                                {isCurrentUser && (
                                    <Button
                                        size="icon"
                                        variant="secondary"
                                        className="absolute bottom-1 right-1 rounded-full h-8 w-8 md:h-9 md:w-9 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    >
                                        <Camera size={14} />
                                    </Button>
                                )}

                            </div>

                            <div className="w-full mt-2">

                                {isCurrentUser ? (
                                    <Button
                                        variant="outline"
                                        className="hover:cursor-pointer w-full gap-2 animate-fade-in-up bg-gradient-to-r from-primary to-pink-700 hover:from-primary hover:to-pink-800 text-white border-0 shadow-md hover:shadow-lg"
                                        style={{ animationDelay: "0.15s" }}
                                        onClick={handleEditProfile}
                                    >
                                        <Edit size={16} />
                                        Edit Profile
                                    </Button>
                                ) : (
                                    <Button
                                        variant={isFollowing ? "outline" : "default"}
                                        onClick={() => setIsFollowing(!isFollowing)}
                                        className={cn(
                                            "w-full transition-all animate-fade-in-up hover:cursor-pointer",
                                            isFollowing
                                                ? "hover:bg-destructive hover:text-destructive-foreground"
                                                : "bg-gradient-to-r from-primary to-pink-700 hover:from-primary hover:to-pink-800 text-white border-0 shadow-md hover:shadow-lg"
                                        )}
                                        style={{ animationDelay: "0.15s" }}
                                    >
                                        {isFollowing ? "Unfollow" : "Follow"}

                                        {isFollowing ? (
                                            <UserCheck size={16} />
                                        ) : (
                                            <UserPlus size={16} />
                                        )}

                                    </Button>
                                )}
                            </div>

                        </div>

                        {/* Right section - Profile info */}
                        <div className="flex-1 flex flex-col animate-fade-in-up" style={{ animationDelay: "0.2s" }}>

                            <div>

                                <div className="flex flex-wrap items-center gap-2 mb-1">

                                    <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-pink-700">John Doe</h1>

                                    <div className="flex flex-wrap items-center gap-1">
                                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/30 text-xs font-normal">Model</Badge>
                                        <Badge variant="outline" className="bg-pink-500/10 border-pink-500/30 text-xs font-normal">Photographer</Badge>
                                    </div>

                                </div>

                                <span className="text-sm text-muted-foreground mb-3 md:mb-4 block">@johndoe</span>

                                <p className="text-sm mb-3 md:mb-4 leading-relaxed max-w-md">
                                    Passionate creative exploring the intersection of art and technology. Based in San Francisco, traveling the world capturing moments and creating memories.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-3 md:mb-4">

                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-medium">Height:</span> 6'1" (185 cm)
                                    </div>

                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="font-medium">Measurements:</span> 40-32-40
                                    </div>

                                </div>

                                <div className="flex gap-2 mb-4 md:mb-5">

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-pink-100 dark:hover:bg-pink-900/30 transition-colors duration-200">
                                                    <Instagram size={16} className="text-muted-foreground hover:text-pink-500 transition-colors duration-200" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Instagram</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200">
                                                    <Twitter size={16} className="text-muted-foreground hover:text-blue-500 transition-colors duration-200" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Twitter</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200">
                                                    <LinkIcon size={16} className="text-muted-foreground hover:text-green-500 transition-colors duration-200" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Website</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200">
                                                    <Mail size={16} className="text-muted-foreground hover:text-purple-500 transition-colors duration-200" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Email</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                </div>

                                {/* Stats */}
                                <div className="flex flex-wrap gap-4 md:gap-8 mb-2">
                                    <ProfileStat value="48" label="Posts" className="items-start" />
                                    <ProfileStat value="2.5k" label="Followers" className="items-start" />
                                    <ProfileStat value="256" label="Following" className="items-start" />
                                </div>

                            </div>

                        </div>
                    </div>

                </CardContent>

            </Card>



            {/* Posts/Saved Tabs */}
            <Card className="overflow-hidden shadow-none sm:shadow-md animate-fade-in-up border-0 sm:border py-0 sm:py-6" style={{ animationDelay: "0.3s" }}>

                <div className="border-b">

                    <div className="flex">


                        <button
                            className={cn(
                                "flex items-center justify-center gap-2 py-3 px-4 sm:px-6 flex-1 font-medium text-sm transition-colors",
                                activeTab === 'posts'
                                    ? "border-b-2 border-purple-500 text-purple-500"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                            onClick={() => setActiveTab('posts')}
                        >
                            <Grid size={16} />
                            POSTS
                        </button>

                        {isCurrentUser && (
                            <button
                                className={cn(
                                    "flex items-center justify-center gap-2 py-3 px-4 sm:px-6 flex-1 font-medium text-sm transition-colors",
                                    activeTab === 'saved'
                                        ? "border-b-2 border-pink-500 text-pink-500"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                                onClick={() => setActiveTab('saved')}
                            >
                                <BookmarkCheckIcon size={16} />
                                SAVED
                            </button>
                        )}

                    </div>

                </div>

                <CardContent className="p-2 sm:p-4 md:p-6">

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2 md:gap-3">

                        {activeTab === 'posts' ? (

                            postsImages.length > 0 ? (

                                postsImages.map((image, index) => (

                                    <div
                                        key={index}
                                        className="aspect-square overflow-hidden relative group rounded-md"
                                    >
                                        <img
                                            src={image.url}
                                            alt={`Post ${index + 1}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                                            <div className="flex items-center gap-1 font-medium text-white">
                                                <Heart size={18} className="fill-red-500 text-red-500" />
                                                <span>{image.likes}</span>
                                            </div>
                                        </div>

                                    </div>
                                ))

                            ) : (

                                <div className="col-span-3 py-10 md:py-12 text-center text-muted-foreground">
                                    No posts yet
                                </div>
                            )

                        ) : (

                            savedImages.length > 0 ? (

                                savedImages.map((image, index) => (

                                    <div
                                        key={index}
                                        className="aspect-square overflow-hidden relative group rounded-md"
                                    >

                                        <img
                                            src={image.url}
                                            loading="lazy"
                                            alt={`Saved post ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                                            <div className="flex items-center gap-1 text-white font-medium">
                                                <Heart size={18} className="fill-red-500 text-red-500" />
                                                <span>{image.likes}</span>
                                            </div>
                                        </div>

                                    </div>
                                ))
                            ) : (

                                <div className="col-span-3 py-10 md:py-12 text-center text-muted-foreground">
                                    No saved posts
                                </div>
                            )
                        )}
                    </div>


                </CardContent>
            </Card>
        </div>
    );
};

export default ProfileHeader;