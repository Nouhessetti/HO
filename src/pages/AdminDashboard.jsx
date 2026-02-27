import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UsersManagement } from '@/components/admin/UsersManagement';
import { ContentManagement } from '@/components/admin/ContentManagement';
import { AnalyticsDashboard } from '@/components/admin/AnalyticsDashboard';
import { SystemSettings } from '@/components/admin/SystemSettings';
import { AdminStats } from '@/components/admin/AdminStats';
import { BlogVideoManagement } from '@/components/admin/BlogVideoManagement';

// Removed the ": React.FC" type annotation
const AdminDashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your platform efficiently</p>
        </div>

        <AdminStats />

        <Tabs defaultValue="analytics" className="mt-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="blog-video">Blog & Video</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="mt-6">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="users" className="mt-6">
            <UsersManagement />
          </TabsContent>

          <TabsContent value="content" className="mt-6">
            <ContentManagement />
          </TabsContent>

          <TabsContent value="blog-video" className="mt-6">
            <BlogVideoManagement />
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <SystemSettings />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;