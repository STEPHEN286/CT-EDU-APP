"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Megaphone, Plus, Send, Edit, Trash2, MoreHorizontal, Users, Eye, Calendar } from "lucide-react"

const announcementsData = [
  {
    id: 1,
    title: "New Section Added: Advanced Hooks",
    content:
      "I've just added a new section covering advanced React hooks including useCallback, useMemo, and custom hooks. Check it out!",
    course: "Complete React Development Course",
    recipients: 1250,
    sentDate: "2024-06-20",
    status: "sent",
    views: 890,
  },
  {
    id: 2,
    title: "Course Update: ES2024 Features",
    content:
      "Updated the JavaScript course with the latest ES2024 features including new array methods and improved async/await patterns.",
    course: "Advanced JavaScript Concepts",
    recipients: 890,
    sentDate: "2024-06-18",
    status: "sent",
    views: 654,
  },
  {
    id: 3,
    title: "Q&A Session This Friday",
    content:
      "Join me for a live Q&A session this Friday at 3 PM EST. We'll cover common questions about React state management.",
    course: "Complete React Development Course",
    recipients: 1250,
    sentDate: "2024-06-15",
    status: "sent",
    views: 1100,
  },
  {
    id: 4,
    title: "Welcome New Students!",
    content: "Welcome to the course! Here are some tips to get the most out of your learning experience...",
    course: "All Courses",
    recipients: 0,
    sentDate: "",
    status: "draft",
    views: 0,
  },
]

const coursesData = [
  { id: 1, title: "Complete React Development Course", students: 1250 },
  { id: 2, title: "Advanced JavaScript Concepts", students: 890 },
  { id: 3, title: "Modern CSS and Flexbox", students: 567 },
  { id: 4, title: "Node.js Backend Development", students: 0 },
]

export function ManageAnnouncements() {
  const [announcements, setAnnouncements] = useState(announcementsData)
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    course: "",
    sendImmediately: true,
  })

  const handleCreateAnnouncement = () => {
    if (newAnnouncement.title && newAnnouncement.content && newAnnouncement.course) {
      const selectedCourse = coursesData.find((c) => c.id.toString() === newAnnouncement.course)
      const announcement = {
        id: Date.now(),
        title: newAnnouncement.title,
        content: newAnnouncement.content,
        course: selectedCourse?.title || "All Courses",
        recipients: selectedCourse?.students || 0,
        sentDate: newAnnouncement.sendImmediately ? new Date().toISOString().split("T")[0] : "",
        status: newAnnouncement.sendImmediately ? "sent" : "draft",
        views: 0,
      }

      setAnnouncements([announcement, ...announcements])
      setNewAnnouncement({ title: "", content: "", course: "", sendImmediately: true })
      setIsCreateOpen(false)
    }
  }

  const handleDeleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter((a) => a.id !== id))
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-green-100 text-green-800">Sent</Badge>
      case "draft":
        return <Badge variant="secondary">Draft</Badge>
      case "scheduled":
        return <Badge variant="outline">Scheduled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const totalAnnouncements = announcements.length
  const sentAnnouncements = announcements.filter((a) => a.status === "sent").length
  const draftAnnouncements = announcements.filter((a) => a.status === "draft").length
  const totalViews = announcements.reduce((sum, a) => sum + a.views, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Announcements</h1>
        <p className="text-muted-foreground">Communicate important updates to your students</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Announcements</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAnnouncements}</div>
            <p className="text-xs text-muted-foreground">{sentAnnouncements} sent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Draft Messages</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{draftAnnouncements}</div>
            <p className="text-xs text-muted-foreground">Pending to send</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All time views</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Open Rate</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">Student engagement</p>
          </CardContent>
        </Card>
      </div>

      {/* Announcements Management */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Course Announcements</CardTitle>
              <CardDescription>Manage your announcements to students</CardDescription>
            </div>
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Create Announcement
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Announcement</DialogTitle>
                  <DialogDescription>Send an important message to your students</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Announcement Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter announcement title"
                      value={newAnnouncement.title}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Target Course</Label>
                    <Select onValueChange={(value) => setNewAnnouncement({ ...newAnnouncement, course: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Courses</SelectItem>
                        {coursesData.map((course) => (
                          <SelectItem key={course.id} value={course.id.toString()}>
                            {course.title} ({course.students} students)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Message Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Write your announcement message..."
                      rows={6}
                      value={newAnnouncement.content}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="sendImmediately"
                      checked={newAnnouncement.sendImmediately}
                      onChange={(e) => setNewAnnouncement({ ...newAnnouncement, sendImmediately: e.target.checked })}
                    />
                    <Label htmlFor="sendImmediately">Send immediately</Label>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleCreateAnnouncement}>
                      {newAnnouncement.sendImmediately ? (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Now
                        </>
                      ) : (
                        <>
                          <Edit className="h-4 w-4 mr-2" />
                          Save Draft
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {announcements.map((announcement) => (
                  <TableRow key={announcement.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{announcement.title}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">
                          {announcement.content.substring(0, 60)}...
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{announcement.course}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        {announcement.recipients > 0 ? announcement.recipients.toLocaleString() : "N/A"}
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(announcement.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        {announcement.views.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        {announcement.sentDate || "Not sent"}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          {announcement.status === "draft" && (
                            <DropdownMenuItem>
                              <Send className="mr-2 h-4 w-4" />
                              Send Now
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem
                            onClick={() => handleDeleteAnnouncement(announcement.id)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
