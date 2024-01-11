import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

export default function Footer({ loadMoreItems }) {
  const [page, setPage] = useState(1);

  const handleScroll = debounce(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    loadMoreItems(page + 1);
    setPage(page + 1);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, handleScroll]);

  return (
    <footer className="bg-gray-200 p-4 text-center">
      <div>
        <p>Estás en la página {page}.</p>
      </div>
    </footer>
  );
}