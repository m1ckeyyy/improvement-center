import { useLayoutEffect, useRef, useState, useTransition } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory, createBrowserHistory, Update } from 'history';

export interface BrowserRouterProps {
  basename?: string;
  children?: React.ReactNode;
  window?: Window;
}

export function SuspenseRouter({ basename, children, window }: BrowserRouterProps) {
  let historyRef = useRef<BrowserHistory>();
  const [isPending, startTransition] = useTransition();

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window });
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  function setStateAsync(update: Update) {
    startTransition(() => {
      setState(update);
    });
  }

  useLayoutEffect(() => history.listen(setStateAsync), [history]);

  return <Router basename={basename} children={children} location={state.location} navigationType={state.action} navigator={history} />;
}
export default SuspenseRouter;
