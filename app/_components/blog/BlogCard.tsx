interface BlogCardProps {
  title: string;
  body: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, body }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-bold text-primary-800">{title}</h2>
        <p className="text-gray-600">{body}</p>
      </div>
    </div>
  );
};

export default BlogCard;
