import { useState, useEffect } from 'react';
import { Notification, NotificationApiResponse } from '../../models/types';

interface UseNotificationsResult {
  notifications: Notification[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useNotifications = (): UseNotificationsResult => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        'https://www.technovimal.in/apps/fast-english/api/getNotification/?api_key=d2b078b4-b1e8-4348-87f2-31bf58c8fc5b'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json: NotificationApiResponse = await response.json();
      setNotifications(json.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load notifications');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return {
    notifications,
    loading,
    error,
    refetch: fetchNotifications,
  };
};
