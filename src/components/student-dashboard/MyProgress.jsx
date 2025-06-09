"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Award, Target, Clock, BookOpen, Star, Calendar } from "lucide-react"

const progressStats = [
  {
    title: "Learning Streak",
    value: "15 days",
    subtitle: "Keep it up!",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    title: "Certificates Earned",
    value: "6",
    subtitle: "+1 this month",
    icon: Award,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Study Hours",
    value: "47.2h",
    subtitle: "This month",
    icon: Clock,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Courses Completed",
    value: "6/12",
    subtitle: "50% completion",
    icon: BookOpen,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
]

const skillProgress = [
  { skill: "JavaScript", progress: 85, level: "Advanced" },
  { skill: "React", progress: 75, level: "Intermediate" },
  { skill: "Node.js", progress: 60, level: "Intermediate" },
  { skill: "Python", progress: 70, level: "Intermediate" },
  { skill: "Data Analysis", progress: 45, level: "Beginner" },
  { skill: "UI/UX Design", progress: 90, level: "Advanced" },
]

const recentAchievements = [
  {
    title: "JavaScript Master",
    description: "Completed advanced JavaScript course",
    date: "2 days ago",
    icon: Award,
    color: "text-yellow-500",
  },
  {
    title: "15-Day Streak",
    description: "Maintained learning streak for 15 days",
    date: "Today",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    title: "UI/UX Certificate",
    description: "Earned UI/UX Design certification",
    date: "1 week ago",
    icon: Star,
    color: "text-purple-500",
  },
  {
    title: "First Course Complete",
    description: "Completed your first course",
    date: "2 weeks ago",
    icon: Target,
    color: "text-blue-500",
  },
]

const weeklyActivity = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 1.8 },
  { day: "Wed", hours: 3.2 },
  { day: "Thu", hours: 2.1 },
  { day: "Fri", hours: 1.5 },
  { day: "Sat", hours: 4.0 },
  { day: "Sun", hours: 2.8 },
]

export function ProgressPage() {
  const maxHours = Math.max(...weeklyActivity.map((d) => d.hours))

  return (
    <div className="min-h-screen bg-gray-50">
      <main className=" ">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Progress</h1>
          <p className="text-gray-600">Track your learning journey and achievements</p>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {progressStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-xs text-gray-500">{stat.subtitle}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Skills Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-red-500" />
                <span>Skills Progress</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skillProgress.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{skill.skill}</span>
                    <div className="flex items-center space-x-2">
                      
                      <span className="text-sm font-medium">{skill.progress}%</span>
                    </div>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Weekly Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-red-500" />
                <span>Weekly Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyActivity.map((day, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 text-sm font-medium text-gray-600">{day.day}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(day.hours / maxHours) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-12">{day.hours}h</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total this week:</span>
                  <span className="font-medium text-gray-900">
                    {weeklyActivity.reduce((sum, day) => sum + day.hours, 0).toFixed(1)}h
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-red-500" />
              <span>Recent Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAchievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`p-2 rounded-lg bg-white`}>
                    <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  <div className="text-xs text-gray-500">{achievement.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
