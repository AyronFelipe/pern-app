import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { New } from '../data/news';

interface NewsContextType {
  news: New[];
  setNews: React.Dispatch<React.SetStateAction<New[]>>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

interface NewsProviderProps {
  children: ReactNode;
}

function NewsProvider({ children }: NewsProviderProps) {
  const [news, setNews] = useState<New[]>([]);

  useEffect(() => {
    async function getNews(): Promise<void> {
      const response = await fetch(
        `${import.meta.env.VITE_MAIN_HOST}/api/v1/news`
      );
      const result = await response.json();
      setNews(result);
    }
    getNews();
  }, []);

  const foo = useMemo(() => ({ news, setNews }), [news]);

  return <NewsContext.Provider value={foo}>{children}</NewsContext.Provider>;
}

function useNewsContext(): NewsContextType {
  const context = useContext(NewsContext);

  if (!context) {
    throw new Error('useNewsContext must be used within a NewsProvider');
  }

  return context;
}

export { NewsContext, NewsProvider, useNewsContext };
