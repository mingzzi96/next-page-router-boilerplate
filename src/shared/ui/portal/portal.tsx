import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps extends PropsWithChildren {
  rootId: string;
}

const Portal = ({ rootId, children }: PortalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    containerRef.current = document.querySelector(rootId);

    return () => setIsMounted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMounted && containerRef.current ? createPortal(children, containerRef.current) : null;
};

export default Portal;
