"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import Anchor from "@components/event-link";
import StartRouterChangeContext from "@context/router-events";

function RouterEventWrapper({
  onStart = () => {},
  onComplete = () => {},
  children,
}) {
  const [isChanging, setIsChanging] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => setIsChanging(false), [pathname, searchParams]);

  useEffect(() => {
    if (isChanging) onStart();
    else onComplete();
  }, [isChanging]);

  return (
    <StartRouterChangeContext.Provider value={() => setIsChanging(true)}>
      {children}
    </StartRouterChangeContext.Provider>
  );
}

function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Anchor href={href} style={{ fontWeight: pathname === href ? "bold" : undefined }}>
      {children}
    </Anchor>
  );
}


export default function RootLayoutClient({ children }) {
  const onStart = useCallback(() => NProgress.start(), []);
  const onComplete = useCallback(() => NProgress.done(), []);
  return (
    <RouterEventWrapper onStart={onStart} onComplete={onComplete}>
      {children}
    </RouterEventWrapper>
  );
}