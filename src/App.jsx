// @ts-nocheck
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Layout } from "./components/Layout";

// Page Imports
import Index from "./pages/Index";
import NewsPage from "./pages/NewsPage";
import ProductsPage from "./pages/ProductsPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import DataSciencePage from "./pages/DataSciencePage";
import NewsCategoriesPage from "./pages/NewsCategoriesPage";
import KataPage from "./pages/KataPage";
import Katapage2 from "./pages/Katapage2";
import TrainingPage from "./pages/TrainingPage";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile"; // 1. Import the new Profile page
import NotFound from "./pages/NotFound";
import Train from "./pages/Train";
const queryClient = new QueryClient();

// A helper component to protect private routes
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" />; 
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/courses/web-development" element={<WebDevelopmentPage />} />
                <Route path="/courses/data-science" element={<DataSciencePage />} />
                <Route path="/news/categories" element={<NewsCategoriesPage />} />
                <Route path="/kata" element={<KataPage />} />
                <Route path="/kata2" element={<Katapage2 />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path='/train' element={<Train />} />
                
                {/* 2. Added Protected Profile Route */}
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } 
                />

                {/* Admin Route */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;