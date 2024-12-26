import { usePageLoading } from '@/hooks/usePageLoading';

export default function LoadingIndicator() {
  const loading = usePageLoading();

  return (
    loading && (
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div className="loading-bar"></div>
      </div>
    )
  );
}