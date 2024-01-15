import  { BlogData } from "@/components/blog/BlogData";
import FullBlog from "@/components/blog/FullBlog";

export default function Page({ params }) {
  const post = BlogData.filter((post) => post.id.toString() === params.id);
  if (post.length === 0) {
    return <div>Post not found: {params.id}</div>;
  } else {
    return (
      <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="">
            {post.map((post) => (
              <div key={post.id} className="w-full">
                <FullBlog post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export async function generateStaticParams() {
  return BlogData.map((blog) => ({
    id: blog.id.toString(),
  }));
}
