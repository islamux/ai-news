import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import NewsCard from './components/NewsCard'
import './App.css'

function App() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9f1410e8ea09400292ef25d1b30d6ebe`;
        console.log('Fetching news from:', url);
        const response = await fetch(url);
        console.log('HTTP Response Status:', response.status, response.statusText);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Received data:', data);
        setNews(data.articles || data); 
      } catch (e: unknown) {
        const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
        console.error('Error fetching news:', errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []); 

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-dark-blue-900 text-gray-100">Loading news...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center bg-dark-blue-900 text-red-400">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-dark-blue-900 text-gray-100 p-4">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-tight text-accent-purple"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        AI News Extension
      </motion.h1>

      <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">Latest Headlines</h2>

      {
        news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg">No news available.</p>
        )
      }
    </div>
  )
}

export default App