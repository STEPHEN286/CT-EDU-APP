"use client"

import * as React from "react"
import { useState } from "react" // Added useState import
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Users,
  BookOpen,
  DollarSign,
  Star,
  MessageSquare,
  Filter,
  X,
  CalendarIcon,
  CheckCircle,
  AlertCircle,
  TestTube,
} from "lucide-react"
import { addDays, format } from "date-fns"
// import  { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { useDashboardFilters } from "@/hooks/useDashboardFilters"
import { courseOptions, metricOptions, statusOptions } from "@/data/dashboardData"

// Test data with more comprehensive information


export function FilterTestDashboard() {
//   const [dateRange, setDateRange] = useState({
//     from: addDays(new Date(), -30),
//     to: new Date(),
//   })
//   const [selectedCourse, setSelectedCourse] = useState("all")
//   const [selectedStatus, setSelectedStatus] = useState("all")
//   const [selectedMetric, setSelectedMetric] = useState("all")
//   const [testResults, setTestResults] = useState([])

  const {
    dateRange,
    setDateRange,
    selectedCourse,
    setSelectedCourse,
    selectedStatus,
    setSelectedStatus,
    selectedMetric,
    setSelectedMetric,
    // getFilteredChartData,
    getSummaryData,
  } = useDashboardFilters()
 

 



 
  // Test functions
 
  const clearFilters = () => {
    setDateRange({
      from: addDays(new Date(), -30),
      to: new Date(),
    })
    setSelectedCourse("all")
    setSelectedStatus("all")
    setSelectedMetric("all")
  }

  const hasActiveFilters = selectedCourse !== "all" || selectedStatus !== "all" || selectedMetric !== "all"
//   const filteredCourses = getFilteredCourses()
//   const filteredMessages = getFilteredMessages()
  const summaryData = getSummaryData()


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Filter Testing Dashboard</h1>
        <p className="text-muted-foreground">Test all filter combinations and validate functionality</p>
      </div>

      <Tabs defaultValue="filters" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="filters">Filter Testing</TabsTrigger>
          <TabsTrigger value="results">Test Results</TabsTrigger>
          <TabsTrigger value="data">Filtered Data</TabsTrigger>
        </TabsList>

        <TabsContent value="filters" className="space-y-6">
          {/* Filters Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Interactive Filters
                <Button 
                // onClick={runFilterTests} 
                className="ml-auto" size="sm">
                  <TestTube className="h-4 w-4 mr-2" />
                  Run Tests
                </Button>
              </CardTitle>
              <CardDescription>Test different filter combinations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Date Range Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date Range</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dateRange && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateRange?.from ? (
                          dateRange.to ? (
                            <>
                              {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(dateRange.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date range</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={dateRange?.from}
                        selected={dateRange}
                        onSelect={setDateRange}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Course Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Course</label>
                  <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Status Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Metric Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Focus Metric</label>
                  <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select metric" />
                    </SelectTrigger>
                    <SelectContent>
                      {metricOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Quick Test Buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedStatus("published")
                    setSelectedCourse("1")
                  }}
                >
                  Test: Published + React Course
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedStatus("draft")
                    setSelectedMetric("revenue")
                  }}
                >
                  Test: Draft + Revenue
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setDateRange({
                      from: new Date(2024, 1, 1),
                      to: new Date(2024, 1, 28),
                    })
                    setSelectedStatus("published")
                  }}
                >
                  Test: Feb 2024 + Published
                </Button>

                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear filters
                  </Button>
                )}
              </div>

              {/* Active Filters Display */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                  <span className="text-sm font-medium text-muted-foreground">Active filters:</span>
                  {selectedCourse !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      Course: {courseOptions.find((c) => c.value === selectedCourse)?.label}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCourse("all")} />
                    </Badge>
                  )}
                  {selectedStatus !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      Status: {statusOptions.find((s) => s.value === selectedStatus)?.label}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedStatus("all")} />
                    </Badge>
                  )}
                  {selectedMetric !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      Metric: {metricOptions.find((m) => m.value === selectedMetric)?.label}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedMetric("all")} />
                    </Badge>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {summaryData?.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                    <Icon className={`h-4 w-4 ${item.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-green-600">{item.change}</span>
                    </p>
                  </CardContent>
                </Card>
              )
            })} */}
          </div>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Test Results</CardTitle>
              <CardDescription>Automated filter functionality tests</CardDescription>
            </CardHeader>
            {/* <CardContent>
              {testResults.length === 0 ? (
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    No tests run yet. Click "Run Tests" to validate filter functionality.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="space-y-4">
                  {testResults.map((result, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                      {result.passed ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-medium">{result.test}</h4>
                        <p className="text-sm text-muted-foreground">{result.details}</p>
                      </div>
                      <Badge variant={result.passed ? "default" : "destructive"}>
                        {result.passed ? "PASS" : "FAIL"}
                      </Badge>
                    </div>
                  ))}
                  <div className="mt-4 p-3 rounded-lg bg-muted">
                    <p className="text-sm">
                      <strong>Summary:</strong> {testResults.filter((r) => r.passed).length} of {testResults.length}{" "}
                      tests passed
                    </p>
                  </div>
                </div>
              )}
            </CardContent> */}
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Filtered Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Filtered Courses ({getSummaryData.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getSummaryData.map((course) => (
                    <div key={course.id} className="p-3 rounded-lg border">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{course.title}</h4>
                        <Badge variant={course.status === "published" ? "default" : "secondary"}>{course.status}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{course.students} students</span>
                        <span>${course.revenue.toLocaleString()} revenue</span>
                        <span>Created: {format(course.createdDate, "MMM dd, yyyy")}</span>
                      </div>
                    </div>
                  ))}
                  {getSummaryData.length === 0 && (
                    <p className="text-muted-foreground text-center py-4">No courses match the current filters</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Filtered Messages */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Filtered Messages ({getFil.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredMessages.map((message) => (
                    <div key={message.id} className="p-3 rounded-lg border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{message.student}</span>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Course: {message.course}</p>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  ))}
                  {filteredMessages.length === 0 && (
                    <p className="text-muted-foreground text-center py-4">No messages match the current filters</p>
                  )}
                </div>
              </CardContent>
            </Card> */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
