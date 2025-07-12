"use client";

interface RouteGuardProps {
	children: React.ReactNode;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  // No authentication or route checking needed - just return the children
  return <>{children}</>;
};

export { RouteGuard };
