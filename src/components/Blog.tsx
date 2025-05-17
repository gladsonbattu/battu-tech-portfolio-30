
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of AI in Financial Services",
      date: "April 15, 2025",
      excerpt: "Exploring how generative AI and large language models are transforming financial operations and customer experiences.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      id: 2,
      title: "Building Resilient Data Systems for Financial Markets",
      date: "March 22, 2025",
      excerpt: "Key considerations when designing data architectures that can withstand market volatility and high transaction volumes.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500",
    },
    {
      id: 3,
      title: "The Intersection of Regulatory Compliance and Technology",
      date: "February 10, 2025",
      excerpt: "How modern technologies are helping financial institutions navigate complex regulatory landscapes more efficiently.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-blue-50 section-padding">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
              {post.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              )}
              
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              
              <CardFooter>
                <Button variant="link" className="pl-0 text-primary">
                  Read More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
