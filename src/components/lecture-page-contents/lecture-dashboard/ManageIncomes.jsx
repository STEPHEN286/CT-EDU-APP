"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, TrendingUp, Calendar, Download, CreditCard, Wallet } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const earningsData = [
  { month: "Jan", earnings: 1800, students: 45 },
  { month: "Feb", earnings: 2100, students: 52 },
  { month: "Mar", earnings: 1950, students: 48 },
  { month: "Apr", earnings: 2400, students: 61 },
  { month: "May", earnings: 2200, students: 55 },
  { month: "Jun", earnings: 2450, students: 67 },
]

const transactionsData = [
  {
    id: 1,
    date: "2024-06-20",
    course: "Complete React Development Course",
    student: "Alice Johnson",
    amount: 89.99,
    commission: 62.99,
    status: "completed",
  },
  {
    id: 2,
    date: "2024-06-19",
    course: "Advanced JavaScript Concepts",
    student: "Bob Smith",
    amount: 129.99,
    commission: 90.99,
    status: "completed",
  },
  {
    id: 3,
    date: "2024-06-18",
    course: "Modern CSS and Flexbox",
    student: "Carol Davis",
    amount: 79.99,
    commission: 55.99,
    status: "pending",
  },
  {
    id: 4,
    date: "2024-06-17",
    course: "Complete React Development Course",
    student: "David Wilson",
    amount: 89.99,
    commission: 62.99,
    status: "completed",
  },
]

const payoutHistory = [
  {
    id: 1,
    date: "2024-06-01",
    amount: 1850.5,
    method: "Bank Transfer",
    status: "completed",
    reference: "PAY-2024-001",
  },
  {
    id: 2,
    date: "2024-05-01",
    amount: 1650.25,
    method: "PayPal",
    status: "completed",
    reference: "PAY-2024-002",
  },
  {
    id: 3,
    date: "2024-04-01",
    amount: 1420.75,
    method: "Bank Transfer",
    status: "completed",
    reference: "PAY-2024-003",
  },
]

export function ManageIncomes() {
  // const [selectedPeriod, setSelectedPeriod] = useState("6months")

  const totalEarnings = earningsData.reduce((sum, month) => sum + month.earnings, 0)
  const currentMonthEarnings = earningsData[earningsData.length - 1]?.earnings || 0
  const pendingEarnings = transactionsData
    .filter((t) => t.status === "pending")
    .reduce((sum, t) => sum + t.commission, 0)
  const availableForPayout =
    transactionsData.filter((t) => t.status === "completed").reduce((sum, t) => sum + t.commission, 0) -
    payoutHistory.reduce((sum, p) => sum + p.amount, 0)

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Earnings & Payments</h1>
        <p className="text-muted-foreground">Track your course revenue and manage payouts</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Lifetime earnings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentMonthEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">June 2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingEarnings.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${availableForPayout.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">Ready for payout</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Earnings Trend
            </CardTitle>
            <CardDescription>Monthly earnings over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, "Earnings"]} />
                <Line type="monotone" dataKey="earnings" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Student Enrollments
            </CardTitle>
            <CardDescription>New students per month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="payouts">Payout History</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your latest course sales and commissions</CardDescription>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Student</TableHead>
                      <TableHead>Sale Amount</TableHead>
                      <TableHead>Your Commission</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactionsData.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell className="font-medium">{transaction.course}</TableCell>
                        <TableCell>{transaction.student}</TableCell>
                        <TableCell>${transaction.amount}</TableCell>
                        <TableCell className="font-medium">${transaction.commission}</TableCell>
                        <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payouts">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Payout History</CardTitle>
                  <CardDescription>Your payment history and methods</CardDescription>
                </div>
                <Button>
                  <CreditCard className="h-4 w-4 mr-2" />
                  Request Payout
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Reference</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payoutHistory.map((payout) => (
                      <TableRow key={payout.id}>
                        <TableCell>{payout.date}</TableCell>
                        <TableCell className="font-medium">${payout.amount}</TableCell>
                        <TableCell>{payout.method}</TableCell>
                        <TableCell className="font-mono text-sm">{payout.reference}</TableCell>
                        <TableCell>{getStatusBadge(payout.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
