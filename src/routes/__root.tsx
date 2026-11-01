import { createRootRoute, HeadContent, Link, Outlet, Scripts } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import appCss from '../styles.css?url';
export const Route = createRootRoute({
  head: () => ({ meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }], links: [{ rel: 'stylesheet', href: appCss }] }),
  shellComponent: Shell,
  component: Layout,
  notFoundComponent: () => <main className="page-content page-intro"><h1>Страница не найдена</h1><Link to="/">На главную</Link></main>,
});
function Shell({ children }: { children: ReactNode }) { return <html lang="ru"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function Layout() { return <><header className="site-header"><Link to="/" className="wordmark">prnext<span>↗</span></Link><nav aria-label="Основная навигация"><Link to="/" activeOptions={{ exact: true }}>Статьи</Link><Link to="/about">О проекте</Link><a href="https://github.com/finniiik/prnext" aria-label="GitHub">↗</a></nav></header><Outlet /><footer className="site-footer"><span>prnext</span><span>React · Веб-разработка</span><a href="https://github.com/finniiik/prnext">GitHub ↗</a></footer></>; }
