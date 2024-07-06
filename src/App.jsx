import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, BarChart2, Briefcase, Cpu, PenTool } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Changed to navbar layout
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Markets",
    to: "/markets",
    icon: <BarChart2 className="h-4 w-4" />,
  },
  {
    title: "Economy",
    to: "/economy",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Companies",
    to: "/companies",
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    title: "Tech",
    to: "/tech",
    icon: <Cpu className="h-4 w-4" />,
  },
  {
    title: "Opinion",
    to: "/opinion",
    icon: <PenTool className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;