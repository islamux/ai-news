import { motion } from 'framer-motion'

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    url: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <motion.div
      className="bg-dark-blue-800/70 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6 flex flex-col justify-between border border-dark-blue-700"
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-accent-blue transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm">
          {article.description}
        </p>
      </div>
      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-blue hover:text-accent-purple transition-colors duration-300 self-end text-sm font-semibold"
        >
          Read more &rarr;
        </a>
      )
    }</motion.div>
  );
};

export default NewsCard;
