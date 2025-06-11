import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	LayoutDashboard,
	BookOpen,
	Plus,
	Users,
	MessageSquare,
	Star,
	DollarSign,
	Megaphone,
	Settings,
	ChevronLeft,
	ChevronRight,
	ChevronDown,
	ChevronUp,
	Eye,
	Upload,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const menuItems = [
	{
		id: "dashboard",
		label: "Dashboard",
		icon: LayoutDashboard,
		path: "/instructor-dashboard",
	},
	{
		id: "instructor-dashboard/my-courses",
		label: "Modules",
		icon: BookOpen,
		hasDropdown: true,
		children: [
			{
				id: "create-course",
				label: "Upload Module",
				icon: Upload,
				path: "/instructor-dashboard/create-course",
			},
			{
				id: "view-courses",
				label: "View Modules",
				icon: Eye,
				path: "/instructor-dashboard/my-courses",
			},
		],
	},
	{
		id: "dashboard/students",
		label: "Students",
		icon: Users,
		path: "/instructor-dashboard/students",
	},
	{
		id: "messages",
		label: "Messages",
		icon: MessageSquare,
		path: "/instructor-dashboard/messages",
	},
	{
		id: "earnings",
		label: "Q & A",
		icon: BookOpen,
		path: "/instructor-dashboard/quiz",
	},
	{
		id: "announcements",
		label: "Announcements",
		icon: Megaphone,
		path: "/instructor-dashboard/announcements",
	},
	{
		id: "profile",
		label: "Settings",
		icon: Settings,
		path: "/instructor-dashboard/profile",
	},
];

export function InstructorSidebar({ isOpen, setIsOpen }) {
	const location = useLocation();
	const currentPath = location.pathname;
	const [openDropdowns, setOpenDropdowns] = useState({});

	const toggleDropdown = (itemId) => {
		setOpenDropdowns(prev => ({
			...prev,
			[itemId]: !prev[itemId]
		}));
	};

	const isChildActive = (children) => {
		return children?.some(child => currentPath === child.path);
	};

	const isParentActive = (item) => {
		if (item.hasDropdown) {
			return isChildActive(item.children);
		}
		return currentPath === item.path || (item.id === "dashboard" && currentPath === "/dashboard");
	};

	return (
		<div
			className={cn(
				"bg-gray-900 text-white border-r border-gray-700 transition-all duration-300 hidden lg:flex flex-col  min-h-vh",
				isOpen ? "w-64" : "w-16"
			)}
		>
			{/* Toggle Button */}
			<div className="p-4 border-b border-gray-700">
				<Button
					variant="ghost"
					size="icon"
					onClick={() => setIsOpen(!isOpen)}
					className="h-8 w-8 text-white hover:bg-gray-800 hover:text-white"
				>
					{isOpen ? (
						<ChevronLeft className="h-4 w-4" />
					) : (
						<ChevronRight className="h-4 w-4" />
					)}
				</Button>
			</div>

			{/* Navigation Menu */}
			<nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
				{menuItems.map((item) => {
					const Icon = item.icon;
					const isActive = isParentActive(item);
					const hasChildren = item.hasDropdown && item.children;
					const isDropdownOpen = openDropdowns[item.id];

					return (
						<div key={item.id} className="w-full">
							{hasChildren ? (
								// Dropdown Menu Item
								<div>
									<Button
										variant="ghost"
										className={cn(
											"w-full justify-start text-white hover:bg-gray-800 hover:text-white",
											isActive && "bg-gray-800 text-white"
										)}
										onClick={() => {
											if (isOpen) {
												toggleDropdown(item.id);
											}
										}}
									>
										<Icon className="h-4 w-4 flex-shrink-0" />
										{isOpen && (
											<>
												<span className="ml-3 flex-1 text-left truncate">{item.label}</span>
												{isDropdownOpen ? (
													<ChevronUp className="h-4 w-4 flex-shrink-0" />
												) : (
													<ChevronDown className="h-4 w-4 flex-shrink-0" />
												)}
											</>
										)}
									</Button>

									{/* Dropdown Content */}
									{isOpen && isDropdownOpen && (
										<div className="ml-6 mt-1 space-y-1 border-l border-gray-700 pl-4">
											{item.children.map((child) => {
												const ChildIcon = child.icon;
												return (
													<NavLink
                          key={child.id}
                          to={child.path}
                          end
														className={({ isActive }) =>
															cn(
																"block rounded-md transition-colors",
																isActive ? "bg-gray-800" : ""
															)
														}
													>
														{({ isActive }) => (
															<Button
																variant="ghost"
																size="sm"
																className={cn(
																	"w-full justify-start text-gray-300 hover:bg-gray-800 hover:text-white",
																	isActive && "bg-gray-800 text-white"
																)}
															>
																<ChildIcon className="h-3 w-3 flex-shrink-0" />
																<span className="ml-2 text-sm truncate">{child.label}</span>
															</Button>
														)}
													</NavLink>
												);
											})}
										</div>
									)}
								</div>
							) : (
								// Regular Menu Item
								<NavLink
									to={item.path}
                  end
									className={({ isActive }) =>
										cn(
											"block rounded-md transition-colors",
											isActive ? "bg-gray-800" : ""
										)
									}
								>
									{({ isActive }) => (
										<Button
											variant="ghost"
											className={cn(
												"w-full justify-start text-white hover:bg-gray-800 hover:text-white",
												isActive && "bg-gray-800 text-white"
											)}
										>
											<Icon className="h-4 w-4 flex-shrink-0" />
											{isOpen && <span className="ml-3 truncate">{item.label}</span>}
										</Button>
									)}
								</NavLink>
							)}
						</div>
					);
				})}
			</nav>
		</div>
	);
}