import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, Tag } from "lucide-react";

interface BlogCardProps {
  title: string;
  summary: string;
  category: string;
  date: string;
  thumbnail: string;
  onReadMore: () => void;
}

const BlogCard = ({
  title,
  summary,
  category,
  date,
  thumbnail,
  onReadMore,
}: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-scale-in">
      <div className="aspect-video overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="inline-flex items-center gap-1 font-semibold">
            <Tag className="h-3 w-3 " />
            {category}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>
        <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary text-primary/70 transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{summary}</p>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant="outline" 
          onClick={onReadMore}
          className="w-full group-hover:bg-primary border-primary text-primary group-hover:text-primary-foreground transition-colors"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
