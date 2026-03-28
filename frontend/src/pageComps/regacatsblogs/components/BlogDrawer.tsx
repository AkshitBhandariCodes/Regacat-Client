import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Share2, Twitter } from "lucide-react";
import { toast } from "sonner";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
  thumbnail: string;
  summary: string;
}

interface BlogDrawerProps {
  blog: BlogPost | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGetConsulting: () => void;
}

const BlogDrawer = ({ blog, open, onOpenChange, onGetConsulting }: BlogDrawerProps) => {
  if (!blog) return null;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    const title = encodeURIComponent(blog.title);
    const url = encodeURIComponent(shareUrl);
    
    const urls: Record<string, string> = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader className="space-y-4">
          <SheetTitle className="text-3xl font-bold leading-tight pr-8">
            {blog.title}
          </SheetTitle>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span>{blog.date}</span>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-sm max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-semibold">Share this article</h4>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('twitter')}
                className="gap-2"
              >
                <Twitter className="h-4 w-4" />
                X (Twitter)
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('facebook')}
                className="gap-2"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('whatsapp')}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                Copy Link
              </Button>
            </div>
          </div>

          <Separator />

          <div className="bg-gradient-hero rounded-lg p-6 text-center space-y-4">
            <h4 className="text-xl font-bold text-white">
              Want Expert Guidance for Your Licensing Process?
            </h4>
            <p className="text-white/90">
              Our team helps you navigate complex compliance with ease.
            </p>
            <Button
              onClick={() => {
                onOpenChange(false);
                onGetConsulting();
              }}
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Free Consulting
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BlogDrawer;
