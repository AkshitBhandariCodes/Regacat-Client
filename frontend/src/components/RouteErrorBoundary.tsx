import React from "react";
import { Link } from "react-router-dom";

interface RouteErrorBoundaryProps {
  children: React.ReactNode;
}

interface RouteErrorBoundaryState {
  hasError: boolean;
}

class RouteErrorBoundary extends React.Component<RouteErrorBoundaryProps, RouteErrorBoundaryState> {
  state: RouteErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): RouteErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Route render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-xl text-center space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Something went wrong on this page</h1>
            <p className="text-slate-600">
              We could not load this service page right now. Please return to FSSAI services and try again.
            </p>
            <Link
              to="/fssai-consultants-india"
              className="inline-flex items-center justify-center rounded-md bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
            >
              Go to FSSAI Services
            </Link>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default RouteErrorBoundary;
