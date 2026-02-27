import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MessageCircle, Send, ThumbsUp, ArrowLeft } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const TrainingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { exercise, subject, topic, level } = location.state || {};

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Sample questions for the exercise (used if no exercise data is passed via state)
  const exerciseQuestions = exercise?.questions || [
    {
      id: 'q1',
      question: 'What is the time complexity of a linear search?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      correctAnswers: [2],
      type: 'single'
    },
    {
      id: 'q2', 
      question: 'Which of the following are sorting algorithms? (Select all that apply)',
      options: ['Bubble Sort', 'Binary Search', 'Quick Sort', 'Merge Sort'],
      correctAnswers: [0, 2, 3],
      type: 'multiple'
    },
    {
      id: 'q3',
      question: 'What does XOR operation return when both operands are the same?',
      options: ['True', 'False', '1', '0'],
      correctAnswers: [1, 3],
      type: 'multiple'
    }
  ];

  // Comments state
  const [comments, setComments] = useState([
    {
      id: 'c1',
      author: 'Jane Doe',
      avatar: '/placeholder.svg',
      time: '2h ago',
      content: 'Great training session! The questions really helped me understand the concept better.',
      likes: 5,
      replies: [],
    },
    {
      id: 'c2',
      author: 'Alex Chen',
      avatar: '/placeholder.svg',
      time: '1d ago',
      content: 'Question 2 was tricky, but I learned a lot from the explanation.',
      likes: 3,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyingToId, setReplyingToId] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleAnswerChange = (questionId, optionIndex) => {
    const question = exerciseQuestions.find(q => q.id === questionId);
    if (!question) return;

    setSelectedAnswers(prev => {
      const current = prev[questionId] || [];
      
      if (question.type === 'single') {
        return { ...prev, [questionId]: [optionIndex] };
      } else {
        const newAnswers = current.includes(optionIndex)
          ? current.filter(idx => idx !== optionIndex)
          : [...current, optionIndex];
        return { ...prev, [questionId]: newAnswers };
      }
    });
  };

  const handleSubmit = () => {
    let correctCount = 0;
    
    exerciseQuestions.forEach(question => {
      const userAnswers = selectedAnswers[question.id] || [];
      const correctAnswers = question.correctAnswers;
      
      if (userAnswers.length === correctAnswers.length &&
          userAnswers.every(answer => correctAnswers.includes(answer))) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setShowResults(true);
    toast.success(`Quiz completed! Score: ${correctCount}/${exerciseQuestions.length}`);
  };

  const genId = () => Math.random().toString(36).slice(2);

  // Helper to update comment tree (likes/replies)
  const updateTree = (list, id, updater) =>
    list.map((c) =>
      c.id === id ? updater(c) : { ...c, replies: updateTree(c.replies, id, updater) }
    );

  const handleAddComment = () => {
    const text = newComment.trim();
    if (!text) return;
    const item = {
      id: genId(),
      author: 'You',
      avatar: '/placeholder.svg',
      time: 'Just now',
      content: text,
      likes: 0,
      replies: [],
    };
    setComments((prev) => [item, ...prev]);
    setNewComment('');
  };

  const handleLike = (id) => {
    setComments((prev) => updateTree(prev, id, (c) => ({ ...c, likes: c.likes + 1 })));
  };

  if (!exercise) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <Card>
          <CardContent className="p-8 text-center">
            <p>No exercise data found. Please go back and select an exercise.</p>
            <Button onClick={() => navigate('/kata')} className="mt-4">
              Back to Kata
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderComment = (comment, depth = 0) => (
    <div key={comment.id} className={`${depth > 0 ? 'ml-8 mt-4' : 'mb-6'}`}>
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.avatar} alt={comment.author} />
          <AvatarFallback>{comment.author.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm">{comment.author}</span>
            <span className="text-xs text-gray-400">{comment.time}</span>
          </div>
          <p className="text-sm mb-2">{comment.content}</p>
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => handleLike(comment.id)}
              className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ThumbsUp className="h-3 w-3" />
              {comment.likes}
            </button>
            <button
              onClick={() => setReplyingToId(replyingToId === comment.id ? null : comment.id)}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Reply
            </button>
          </div>

          {replyingToId === comment.id && (
            <div className="mt-3 flex gap-2">
              <Textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="flex-1 min-h-[60px] bg-gray-800 border-gray-700"
              />
              <Button
                onClick={() => {
                  setReplyingToId(null);
                  setReplyText('');
                }}
                size="icon"
                className="self-end"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          )}

          {comment.replies.map((reply) => renderComment(reply, depth + 1))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/kata')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Kata
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Exercise Description */}
        <Card className="overflow-hidden border-t-4 border-t-blue-500">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{exercise.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {subject} {'>'}  {topic} - {level}
                </p>
              </div>
              <Badge className="bg-yellow-600 text-white">6 kyu</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
                <p className="text-muted-foreground">{exercise.statement}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <p className="text-muted-foreground">{exercise.requirements}</p>
              </div>

              {exercise.signature && (
                <div className="bg-muted p-4 rounded border-l-4 border-primary">
                  <h4 className="font-semibold mb-2">Function Signature</h4>
                  <code className="text-sm font-mono">
                    {exercise.signature}
                  </code>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Right Side - Questions Interface */}
        <Card>
          <CardHeader>
            <CardTitle>Practice Questions</CardTitle>
            {showResults && (
              <div className="text-lg font-semibold text-green-600">
                Score: {score}/{exerciseQuestions.length}
              </div>
            )}
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {exerciseQuestions.map((question, index) => (
                <div key={question.id} className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-sm mt-1">{index + 1}.</span>
                    <div className="flex-1">
                      <p className="font-medium mb-3">{question.question}</p>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex items-center space-x-2">
                            <input
                              type={question.type === 'single' ? 'radio' : 'checkbox'}
                              id={`${question.id}-${optionIndex}`}
                              name={question.type === 'single' ? question.id : undefined}
                              checked={selectedAnswers[question.id]?.includes(optionIndex) || false}
                              onChange={() => handleAnswerChange(question.id, optionIndex)}
                              className="w-4 h-4 cursor-pointer"
                              disabled={showResults}
                            />
                            <Label 
                              htmlFor={`${question.id}-${optionIndex}`} 
                              className={`flex-1 cursor-pointer ${
                                showResults
                                  ? question.correctAnswers.includes(optionIndex)
                                    ? 'text-green-600 font-semibold'
                                    : selectedAnswers[question.id]?.includes(optionIndex)
                                    ? 'text-red-600'
                                    : ''
                                  : ''
                              }`}
                            >
                              {option}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t">
              <Button 
                onClick={handleSubmit}
                disabled={showResults || Object.keys(selectedAnswers).length === 0}
                className="w-full"
              >
                Submit Answers
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Allies / Leaderboard Section */}
      <Card className="bg-gray-900 text-white border-none w-full mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="mr-2">⚔️</span>
            Allies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-gray-300">
            You are automatically given an allegiance with anyone who is in the same clan as you.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Position</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">User</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Clan</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Honor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-sm">1</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center">
                      <Badge className="mr-2 bg-yellow-600 text-white">6 kyu</Badge>
                      <span>username</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{subject} Masters</td>
                  <td className="px-4 py-3 text-sm">158</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Social / Comments Section */}
      <Card className="bg-gray-900 text-white border-none w-full mt-6">
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3 mb-6">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder.svg" alt="Your avatar" />
              <AvatarFallback>YOU</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts about this training..."
                className="min-h-[80px] bg-gray-800 border-gray-700 mb-3"
              />
              <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                <MessageCircle className="h-4 w-4 mr-2" />
                Post Comment
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {comments.map((comment) => renderComment(comment))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingPage;