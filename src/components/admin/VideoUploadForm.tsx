
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

interface VideoUploadFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (videoData: any) => void;
}

export const VideoUploadForm: React.FC<VideoUploadFormProps> = ({ isOpen, onClose, onSave }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    status: 'processing',
    thumbnail: '',
    videoFile: null as File | null,
    duration: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.category || !formData.videoFile) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and select a video file",
        variant: "destructive"
      });
      return;
    }

    const videoData = {
      ...formData,
      id: Date.now(),
      creator: 'Current User', // This should come from auth context
      uploadDate: new Date().toISOString().split('T')[0],
      duration: formData.duration || '00:00',
      views: 0,
      likes: 0,
      dislikes: 0,
      comments: 0,
      videoFile: formData.videoFile.name // In real app, this would be uploaded to storage
    };

    onSave(videoData);
    toast({
      title: "Success",
      description: "Video uploaded successfully and is being processed",
    });
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      status: 'processing',
      thumbnail: '',
      videoFile: null,
      duration: ''
    });
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, videoFile: file }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Upload New Video</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="video-file">Video File *</Label>
            <div className="mt-2">
              <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex flex-col items-center">
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-600">
                    {formData.videoFile ? formData.videoFile.name : 'Click to upload video file'}
                  </span>
                  <span className="text-xs text-gray-400">MP4, MOV, AVI up to 500MB</span>
                </div>
                <input
                  id="video-file"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
              </label>
            </div>
          </div>

          <div>
            <Label htmlFor="video-title">Title *</Label>
            <Input
              id="video-title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Enter video title"
              required
            />
          </div>

          <div>
            <Label htmlFor="video-description">Description</Label>
            <Textarea
              id="video-description"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Describe your video content"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="video-category">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tutorial">Tutorial</SelectItem>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="Data Science">Data Science</SelectItem>
                  <SelectItem value="Programming">Programming</SelectItem>
                  <SelectItem value="CSS">CSS</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="video-duration">Duration (optional)</Label>
              <Input
                id="video-duration"
                value={formData.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
                placeholder="e.g., 15:30"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="thumbnail">Thumbnail URL (optional)</Label>
            <Input
              id="thumbnail"
              value={formData.thumbnail}
              onChange={(e) => handleChange('thumbnail', e.target.value)}
              placeholder="Enter thumbnail image URL"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Upload Video
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
