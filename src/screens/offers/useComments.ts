import { useState, useEffect } from 'react';
import { Comment } from '../../models/types';

interface UseCommentsResult {
  comments: Comment[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useComments = (): UseCommentsResult => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComments = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load comments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return {
    comments,
    loading,
    error,
    refetch: fetchComments,
  };
}; 