"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { User, Bell, Shield, Palette, Globe } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const settingsSections = [
	{
		id: "profile",
		title: "Profile Settings",
		icon: User,
		description: "Manage your personal information and preferences",
	},
	{
		id: "notifications",
		title: "Notifications", 
		icon: Bell,
		description: "Control how you receive updates and alerts",
	},
	{
		id: "privacy",
		title: "Privacy & Security",
		icon: Shield,
		description: "Manage your privacy settings and account security",
	},
	{
		id: "appearance",
		title: "Appearance",
		icon: Palette,
		description: "Customize the look and feel of your dashboard",
	},
	{
		id: "language",
		title: "Language & Region",
		icon: Globe,
		description: "Set your language and regional preferences",
	},
]

export function SettingsPage() {
	return (
		<div className="w-full min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
			<main className="max-w-7xl mx-auto py-6">
				<div className="mb-6">
					<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Settings</h1>
					<p className="text-sm sm:text-base text-gray-600">Manage your account settings and preferences</p>
				</div>

				<Tabs defaultValue="profile" className="space-y-4">
					<TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 mb-25">
						{settingsSections.map((section) => (
							<TabsTrigger key={section.id} value={section.id} className="flex w-fit md:h-full items-center gap-2">
								<section.icon className="h-4 w-4" />
								<span className=" sm:inline">{section.title}</span>
							</TabsTrigger>
						))}
					</TabsList>

					<TabsContent value="profile" >
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center space-x-2">
									<User className="h-5 w-5 text-red-500" />
									<span>Profile Settings</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4 sm:space-y-6">
								<div className="flex flex-col sm:flex-row items-center gap-4">
									<Avatar className="h-16 w-16 sm:h-20 sm:w-20">
										<AvatarImage src="/placeholder.svg?height=80&width=80" />
										<AvatarFallback>WA</AvatarFallback>
									</Avatar>
									<div className="flex flex-col sm:flex-row gap-2">
										<Button variant="outline">Change Photo</Button>
										<Button variant="ghost" className="text-red-500">
											Remove Photo
										</Button>
									</div>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="firstName">First Name</Label>
										<Input id="firstName" defaultValue="Wendy" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="lastName">Last Name</Label>
										<Input id="lastName" defaultValue="Ashley" />
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email">Email Address</Label>
									<Input id="email" type="email" defaultValue="wendy.ashley@example.com" />
								</div>

								<div className="space-y-2">
									<Label htmlFor="bio">Bio</Label>
									<Input id="bio" placeholder="Tell us about yourself..." />
								</div>

								<Button className="w-full sm:w-auto bg-red-500 hover:bg-red-600">Save Changes</Button>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="notifications">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center space-x-2">
									<Bell className="h-5 w-5 text-red-500" />
									<span>Notification Settings</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
									<div>
										<Label htmlFor="email-notifications">Email Notifications</Label>
										<p className="text-sm text-gray-500">Receive course updates via email</p>
									</div>
									<Switch id="email-notifications" defaultChecked />
								</div>

								<Separator />

								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
									<div>
										<Label htmlFor="push-notifications">Push Notifications</Label>
										<p className="text-sm text-gray-500">Get notified about new messages and updates</p>
									</div>
									<Switch id="push-notifications" defaultChecked />
								</div>

								<Separator />

								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
									<div>
										<Label htmlFor="course-reminders">Course Reminders</Label>
										<p className="text-sm text-gray-500">Remind me to continue my courses</p>
									</div>
									<Switch id="course-reminders" defaultChecked />
								</div>

								<Separator />

								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
									<div>
										<Label htmlFor="community-updates">Community Updates</Label>
										<p className="text-sm text-gray-500">Get notified about community discussions</p>
									</div>
									<Switch id="community-updates" />
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="privacy">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center space-x-2">
									<Shield className="h-5 w-5 text-red-500" />
									<span>Privacy & Security</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label>Change Password</Label>
									<div className="space-y-2">
										<Input type="password" placeholder="Current password" />
										<Input type="password" placeholder="New password" />
										<Input type="password" placeholder="Confirm new password" />
									</div>
									<Button variant="outline" className="w-full sm:w-auto">Update Password</Button>
								</div>

								<Separator />

								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
									<div>
										<Label htmlFor="profile-visibility">Public Profile</Label>
										<p className="text-sm text-gray-500">Make your profile visible to other learners</p>
									</div>
									<Switch id="profile-visibility" defaultChecked />
								</div>

								<Separator />

								<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
									<div>
										<Label htmlFor="activity-status">Show Activity Status</Label>
										<p className="text-sm text-gray-500">Let others see when you're online</p>
									</div>
									<Switch id="activity-status" />
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="appearance">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center space-x-2">
									<Palette className="h-5 w-5 text-red-500" />
									<span>Appearance</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="theme">Theme</Label>
									<Select defaultValue="light">
										<SelectTrigger>
											<SelectValue placeholder="Select theme" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="light">Light</SelectItem>
											<SelectItem value="dark">Dark</SelectItem>
											<SelectItem value="system">System</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="accent-color">Accent Color</Label>
									<Select defaultValue="red">
										<SelectTrigger>
											<SelectValue placeholder="Select accent color" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="red">Red</SelectItem>
											<SelectItem value="blue">Blue</SelectItem>
											<SelectItem value="green">Green</SelectItem>
											<SelectItem value="purple">Purple</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="language">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center space-x-2">
									<Globe className="h-5 w-5 text-red-500" />
									<span>Language & Region</span>
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="language">Language</Label>
									<Select defaultValue="en">
										<SelectTrigger>
											<SelectValue placeholder="Select language" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="en">English</SelectItem>
											<SelectItem value="es">Spanish</SelectItem>
											<SelectItem value="fr">French</SelectItem>
											<SelectItem value="de">German</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="timezone">Timezone</Label>
									<Select defaultValue="utc-5">
										<SelectTrigger>
											<SelectValue placeholder="Select timezone" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
											<SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
											<SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
											<SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</CardContent>
						</Card>

						{/* Danger Zone */}
						<Card className="border-red-200 mt-4">
							<CardHeader>
								<CardTitle className="text-red-600">Danger Zone</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex flex-col sm:flex-row items-center justify-between p-4 border border-red-200 rounded-lg gap-4">
									<div>
										<h4 className="font-medium text-gray-900">Delete Account</h4>
										<p className="text-sm text-gray-500">Permanently delete your account and all data</p>
									</div>
									<Button variant="destructive" className="w-full sm:w-auto">Delete Account</Button>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</main>
		</div>
	)
}
