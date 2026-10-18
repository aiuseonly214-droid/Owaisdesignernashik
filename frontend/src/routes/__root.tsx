import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { Toaster } from "sonner";
import { ChatbotWidget } from "@/components/ChatbotWidget";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Owais Interior Designer Nashik | POP False Ceiling, PVC & Interior Contractors" },
      {
        name: "description",
        content:
          "Best POP false ceiling and PVC wall panel contractor in Nashik. Expert gypsum false ceiling, modular kitchens & modern interiors. Call +91 7756043214 for free site estimate in Nashik.",
      },
      {
        name: "keywords",
        content:
          "owais interior, owaisinterior, nashikpop, pop contractor nashik, pvc panel nashik, false ceiling nashik, gypsum ceiling nashik, pop false ceiling nashik, pvc wall panel nashik, interior designer nashik, pop design nashik, wadala nashik interior",
      },
      { name: "author", content: "Owais Interior Designer" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:site_name", content: "Owais Interior Designer" },
      {
        property: "og:title",
        content: "Owais Interior Designer Nashik | POP False Ceiling, PVC & Interior Contractors",
      },
      {
        property: "og:description",
        content:
          "Best POP false ceiling and PVC wall panel contractor in Nashik. Expert gypsum false ceiling, modular kitchens & modern interiors. Call +91 7756043214 for free site estimate in Nashik.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "/images/pop-ceiling-nashik.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Owais Interior Designer Nashik | POP False Ceiling, PVC & Interior",
      },
      {
        name: "twitter:description",
        content:
          "Top POP false ceiling & PVC wall panel contractor in Nashik. Free site measurement & quotes across Nashik.",
      },
      { name: "twitter:image", content: "/images/pop-ceiling-nashik.jpg" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster richColors position="top-right" />
      <ChatbotWidget companyPhone="7756043214" />
    </QueryClientProvider>
  );
}
