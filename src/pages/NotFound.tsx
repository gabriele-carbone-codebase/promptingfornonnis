import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const isItalian = location.pathname.startsWith("/it");

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {isItalian ? "Oops! Pagina non trovata" : "Oops! Page not found"}
        </p>
        <a href={isItalian ? "/it" : "/"} className="text-primary underline hover:text-primary/90">
          {isItalian ? "Torna alla Home" : "Return to Home"}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
