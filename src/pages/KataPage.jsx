import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, ThumbsUp, ChevronDown, ChevronUp } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const KataPage = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('Math');
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const [selectedTopic, setSelectedTopic] = useState('Algebra');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

  // Initial comment data
  const [comments, setComments] = useState([
    {
      id: 'c1',
      author: 'Jane Doe',
      avatar: '/placeholder.svg',
      time: '2h ago',
      content: 'Nice challenge! I solved it using a simple parity check on the inputs.',
      likes: 3,
      replies: [
        {
          id: 'c1-r1',
          author: 'Marcos',
          avatar: '/placeholder.svg',
          time: '1h ago',
          content: 'Same here, XOR works great.',
          likes: 1,
          replies: [],
        },
      ],
    },
    {
      id: 'c2',
      author: 'Marcos',
      avatar: '/placeholder.svg',
      time: '1d ago',
      content: 'Pro tip: XOR works great here since one must be even and the other odd.',
      likes: 5,
      replies: [],
    },
    {
      id: 'c3',
      author: 'Amina',
      avatar: '/placeholder.svg',
      time: '3d ago',
      content: 'Clear statement and good starter kata. Thanks!',
      likes: 2,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState('');
  const [replyingToId, setReplyingToId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [expandedComments, setExpandedComments] = useState({});

  const genId = () => Math.random().toString(36).slice(2);

  // Helper to update nested comment tree
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

  const handleToggleReply = (id) => {
    setReplyingToId((prev) => (prev === id ? null : id));
    setReplyText('');
  };

  const handleAddReply = (parentId) => {
    const text = replyText.trim();
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
    setComments((prev) =>
      updateTree(prev, parentId, (c) => ({ ...c, replies: [...c.replies, item] }))
    );
    setReplyText('');
    setReplyingToId(null);
    setExpandedComments((e) => ({ ...e, [parentId]: true }));
  };

  const handleLike = (id) => {
    setComments((prev) => updateTree(prev, id, (c) => ({ ...c, likes: c.likes + 1 })));
  };

  const toggleReplies = (id) => {
    setExpandedComments((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const subjects = {
    Math: ['Algebra', 'Analytics', 'Geometry', 'Calculus', 'Statistics'],
    Physics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Quantum', 'Optics'],
    Biology: ['Genetics', 'Ecology', 'Anatomy', 'Microbiology', 'Evolution'],
    Info: ['Algorithms', 'Data Structures', 'Programming', 'Databases', 'Networks']
  };

  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const getExerciseList = (subject, topic) => {
    if (subject === 'Math' && topic === 'Algebra') {
      return [
        {
          id: 'alg-1',
          title: 'Solve for x (Linear Equation)',
          statement: 'Given the equation 2x + 5 = 17, find the value of x.',
          requirements: 'Return the numeric solution for x. If there is no solution, return null.',
          signature: 'function solve(equation)'
        },
        {
          id: 'alg-2',
          title: 'Quadratic Roots',
          statement: 'Find the real roots of ax^2 + bx + c = 0 using the quadratic formula.',
          requirements: 'Return an array of real roots sorted ascending. If no real roots, return an empty array.',
          signature: 'function roots(a, b, c)'
        },
        {
          id: 'alg-3',
          title: 'Simplify Expression',
          statement: 'Simplify the algebraic expression by combining like terms.',
          requirements: 'Return the simplified string form with terms ordered by degree.',
          signature: 'function simplify(expr)'
        },
      ];
    }
    return [0,1,2].map((i) => ({
      id: `${subject}-${topic}-${i}`,
      title: `${topic} Practice #${i+1}`,
      statement: `Solve a ${topic.toLowerCase()} problem in ${subject}. Provide a correct and efficient solution.`,
      requirements: 'Return the correct result for the given inputs and handle edge cases gracefully.',
      signature: 'function solve(input)'
    }));
  };

  useEffect(() => {
    const first = subjects[selectedSubject]?.[0];
    if (first) setSelectedTopic(first);
  }, [selectedSubject]);

  useEffect(() => {
    setCurrentExerciseIndex(0);
  }, [selectedSubject, selectedTopic]);

  const exerciseList = getExerciseList(selectedSubject, selectedTopic);
  const currentExercise = exerciseList[currentExerciseIndex % exerciseList.length];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
        <div className="grid grid-cols-1 gap-6">
          <div className="w-full">
            <Card className="overflow-hidden border-t-4 border-t-blue-500">
              <div className="flex">
                <div className="w-1/3 bg-gray-800 text-white p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Suggested Challenge</h3>
                    <Button variant="ghost" size="icon">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </Button>
                  </div>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="bg-gray-700 p-3 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Subject</span>
                      </div>
                      <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger className="w-full bg-gray-600 border-gray-500 text-white">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 z-50">
                          {Object.keys(subjects).map((subject) => (
                            <SelectItem key={subject} value={subject} className="text-white hover:bg-gray-700">
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-gray-700 p-3 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{selectedSubject} Topics</span>
                      </div>
                      <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                        <SelectTrigger className="w-full bg-gray-600 border-gray-500 text-white">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 z-50">
                          {subjects[selectedSubject].map((topic) => (
                            <SelectItem key={topic} value={topic} className="text-white hover:bg-gray-700">
                              {topic}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-gray-700 p-3 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Level</span>
                      </div>
                      <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                        <SelectTrigger className="w-full bg-gray-600 border-gray-500 text-white">
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 z-50">
                          {levels.map((level) => (
                            <SelectItem key={level} value={level} className="text-white hover:bg-gray-700">
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white hover:bg-gray-600 border-none w-1/2 font-bold"
                      onClick={() => navigate('/training', { 
                        state: { 
                          exercise: currentExercise, 
                          subject: selectedSubject, 
                          topic: selectedTopic, 
                          level: selectedLevel 
                        } 
                      })}
                    >
                      TRAIN
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-gray-700 text-white hover:bg-gray-600 border-none w-1/2"
                      onClick={() => setCurrentExerciseIndex((i) => i + 1)}
                    >
                      SKIP
                    </Button>
                  </div>
                </div>

                <div className="w-2/3">
                  <div className="h-full p-6 bg-white text-black">
                    <div className="border-b-2 border-gray-300 pb-4 mb-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h1 className="text-2xl font-bold text-gray-900 mb-2">Coding Challenge</h1>
                          <p className="text-sm text-gray-600">Document ID: KC-2024-001</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-yellow-600 text-white border-none mb-2">6 kyu</Badge>
                          <p className="text-sm text-gray-600">Difficulty: {selectedLevel}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-500 pl-4">
                          {currentExercise.title}
                        </h2>
                      </div>

                      <div className="space-y-4 text-gray-800 leading-relaxed">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Statement</h3>
                          <p className="text-justify">
                            {currentExercise.statement}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
                          <p className="text-justify">
                            {currentExercise.requirements}
                          </p>
                        </div>

                        {currentExercise.signature && (
                          <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-300">
                            <h4 className="font-semibold text-gray-900 mb-2">Function Signature</h4>
                            <code className="text-sm font-mono bg-gray-200 px-2 py-1 rounded">
                              {currentExercise.signature}
                            </code>
                          </div>
                        )}
                      </div>

                      <div className="border-t-2 border-gray-300 pt-4 mt-8">
                        <div className="flex justify-between items-center text-sm text-gray-600">
                          <span>Category: {selectedSubject} {'>'} {selectedTopic}</span>
                          <span>Page 1 of 1</span>
                          <span>© 2024 Kata Dojo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-gray-900 text-white border-none w-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V3z" clipRule="evenodd" />
                </svg>
                Allies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-300">
                You are automatically given an allegiance with anyone who is in the same clan as you. 
                You can also become allies with other warriors by following each other or inviting new warriors to join.
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
                      <td className="px-4 py-3 text-sm">{selectedSubject} Masters</td>
                      <td className="px-4 py-3 text-sm">158</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white border-none w-full mt-6 animate-fade-in">
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3 mb-4">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg" alt="Your avatar" />
                  <AvatarFallback>YOU</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="bg-gray-800 text-white border-gray-700 placeholder-gray-400"
                    rows={3}
                  />
                  <div className="mt-2 flex justify-end">
                    <Button onClick={handleAddComment} disabled={!newComment.trim()} className="hover-scale">
                      <Send className="mr-2" size={16} /> Send
                    </Button>
                  </div>
                </div>
              </div>

              <Separator className="my-4 bg-gray-800" />

              <ul className="space-y-6">
                {comments.map((c) => {
                  const expanded = expandedComments[c.id] ?? true;
                  return (
                    <li key={c.id} className="flex items-start gap-3 animate-fade-in">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={c.avatar} alt={`Avatar for ${c.author}`} />
                        <AvatarFallback>{c.author.slice(0,2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium">{c.author}</span>
                          <span className="text-gray-400">· {c.time}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-200 whitespace-pre-line">{c.content}</p>
                        <div className="mt-2 flex items-center gap-3 text-xs text-gray-300">
                          <Button variant="ghost" size="sm" className="h-7 px-2" onClick={() => handleToggleReply(c.id)}>
                            <MessageCircle className="mr-1" size={14} /> Reply
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 px-2" onClick={() => handleLike(c.id)}>
                            <ThumbsUp className="mr-1" size={14} /> {c.likes}
                          </Button>
                          {c.replies.length > 0 && (
                            <Button variant="ghost" size="sm" className="h-7 px-2" onClick={() => toggleReplies(c.id)}>
                              {expanded ? (
                                <ChevronUp className="mr-1" size={14} />
                              ) : (
                                <ChevronDown className="mr-1" size={14} />
                              )}
                              {expanded ? 'Hide replies' : `Show replies (${c.replies.length})`}
                            </Button>
                          )}
                        </div>

                        {replyingToId === c.id && (
                          <div className="mt-3 flex items-start gap-3">
                            <Avatar className="h-7 w-7">
                              <AvatarImage src="/placeholder.svg" alt="Your avatar" />
                              <AvatarFallback>YOU</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <Textarea
                                placeholder={`Reply to ${c.author}...`}
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                className="bg-gray-800 text-white border-gray-700 placeholder-gray-400"
                                rows={2}
                              />
                              <div className="mt-2 flex justify-end gap-2">
                                <Button variant="ghost" size="sm" onClick={() => setReplyingToId(null)}>Cancel</Button>
                                <Button size="sm" onClick={() => handleAddReply(c.id)} disabled={!replyText.trim()}>
                                  <Send className="mr-2" size={14} /> Reply
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}

                        {expanded && c.replies.length > 0 && (
                          <ul className="mt-3 space-y-4 border-l border-gray-800 pl-4">
                            {c.replies.map((r) => (
                              <li key={r.id} className="flex items-start gap-3 animate-fade-in">
                                <Avatar className="h-7 w-7">
                                  <AvatarImage src={r.avatar} alt={`Avatar for ${r.author}`} />
                                  <AvatarFallback>{r.author.slice(0,2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 text-xs">
                                    <span className="font-medium">{r.author}</span>
                                    <span className="text-gray-400">· {r.time}</span>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-200 whitespace-pre-line">{r.content}</p>
                                  <div className="mt-1 flex items-center gap-3 text-xs text-gray-300">
                                    <Button variant="ghost" size="sm" className="h-7 px-2" onClick={() => handleLike(r.id)}>
                                      <ThumbsUp className="mr-1" size={14} /> {r.likes}
                                    </Button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default KataPage;