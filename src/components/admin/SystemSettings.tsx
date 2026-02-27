
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Save, Shield, Mail, Globe, Database } from 'lucide-react';

export const SystemSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              General Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input id="siteName" defaultValue="Learning Platform" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteDescription">Site Description</Label>
              <Input id="siteDescription" defaultValue="A comprehensive learning platform" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input id="contactEmail" type="email" defaultValue="admin@platform.com" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="maintenanceMode" />
              <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
            </div>
            <Button className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Save General Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Security Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="twoFactorAuth" />
              <Label htmlFor="twoFactorAuth">Two-Factor Authentication</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="passwordPolicy" defaultChecked />
              <Label htmlFor="passwordPolicy">Strong Password Policy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="sessionTimeout" defaultChecked />
              <Label htmlFor="sessionTimeout">Session Timeout</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
              <Input id="maxLoginAttempts" type="number" defaultValue="5" />
            </div>
            <Button className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Save Security Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="smtpHost">SMTP Host</Label>
              <Input id="smtpHost" defaultValue="smtp.gmail.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpPort">SMTP Port</Label>
              <Input id="smtpPort" type="number" defaultValue="587" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtpUsername">SMTP Username</Label>
              <Input id="smtpUsername" type="email" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="emailNotifications" defaultChecked />
              <Label htmlFor="emailNotifications">Email Notifications</Label>
            </div>
            <Button className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Save Email Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Platform Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="userRegistration" defaultChecked />
              <Label htmlFor="userRegistration">Allow User Registration</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="courseCreation" />
              <Label htmlFor="courseCreation">Allow Course Creation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="kataSubmission" defaultChecked />
              <Label htmlFor="kataSubmission">Allow Kata Submission</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxFileSize">Max File Upload Size (MB)</Label>
              <Input id="maxFileSize" type="number" defaultValue="10" />
            </div>
            <Button className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Save Platform Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold">Platform Version</h3>
              <p className="text-2xl font-bold text-blue-600">v2.1.0</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold">Database Status</h3>
              <p className="text-2xl font-bold text-green-600">Online</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold">Server Uptime</h3>
              <p className="text-2xl font-bold text-purple-600">99.9%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
