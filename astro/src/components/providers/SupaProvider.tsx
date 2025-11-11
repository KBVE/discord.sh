import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { initSupa, getSupa } from '@/lib/supa';

type Session = any; // bring in proper Supabase types if you like

type Ctx = {
  supa: ReturnType<typeof getSupa> | null;
  session: Session | null;
  ready: boolean;
};

const SupaCtx = createContext<Ctx>({ supa: null, session: null, ready: false });

export function SupaProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let off: (() => void) | null = null;
    (async () => {
      await initSupa();
      const supa = getSupa();

      // initial session
      const s = await supa.getSession().catch(() => null);
      setSession(s?.session ?? null);

      // live updates broadcast from the worker
      off = supa.on('auth', (msg) => setSession(msg.session ?? null));

      setReady(true);
    })();

    return () => off?.();
  }, []);

  const value = useMemo<Ctx>(() => ({ supa: ready ? getSupa() : null, session, ready }), [session, ready]);
  return <SupaCtx.Provider value={value}>{children}</SupaCtx.Provider>;
}

export function useSupa() {
  const { supa, ready } = useContext(SupaCtx);
  if (!ready || !supa) throw new Error('useSupa: not ready (wrap in <SupaProvider /> and use a client island)');
  return supa;
}

export function useSession() {
  const { session, ready } = useContext(SupaCtx);
  return { session, ready };
}
