import {
  Activity,
  Bot,
  CheckCircle2,
  Clock3,
  Plus,
  Rocket,
  Settings2,
  TrendingUp,
  Users,
} from "lucide-react";

export const dashboardMetrics = [
  {
    title: "Active Workflows",
    value: "24",
    change: "+12%",
    trend: "from last week",
    icon: Activity,
  },
  {
    title: "Tasks Completed",
    value: "1,284",
    change: "+18%",
    trend: "this month",
    icon: CheckCircle2,
  },
  {
    title: "Automation Success",
    value: "96.8%",
    change: "+4.2%",
    trend: "performance gain",
    icon: Bot,
  },
  {
    title: "Team Efficiency",
    value: "87%",
    change: "+9%",
    trend: "workflow output",
    icon: Users,
  },
];

export const workflowActivity = [
  {
    name: "Invoice Processing",
    status: "Completed",
    time: "2 mins ago",
    type: "Finance Automation",
  },
  {
    name: "Client Onboarding",
    status: "Running",
    time: "8 mins ago",
    type: "Customer Success",
  },
  {
    name: "Lead Qualification",
    status: "Completed",
    time: "14 mins ago",
    type: "Sales Workflow",
  },
  {
    name: "Support Escalation",
    status: "Needs Review",
    time: "22 mins ago",
    type: "Support Ops",
  },
];

export const automationPerformance = {
  "7D": [
    { day: "Mon", completed: 120, automated: 96 },
    { day: "Tue", completed: 180, automated: 144 },
    { day: "Wed", completed: 150, automated: 132 },
    { day: "Thu", completed: 220, automated: 190 },
    { day: "Fri", completed: 260, automated: 230 },
    { day: "Sat", completed: 190, automated: 170 },
    { day: "Sun", completed: 240, automated: 218 },
  ],
  "30D": [
    { day: "W1", completed: 760, automated: 620 },
    { day: "W2", completed: 940, automated: 790 },
    { day: "W3", completed: 1180, automated: 980 },
    { day: "W4", completed: 1320, automated: 1120 },
  ],
  "90D": [
    { day: "Jan", completed: 3400, automated: 2850 },
    { day: "Feb", completed: 4100, automated: 3540 },
    { day: "Mar", completed: 4680, automated: 4010 },
  ],
};
export const aiInsights = [
  {
    title: "Workflow delay detected",
    description:
      "Client onboarding is running 14% slower than usual due to approval bottlenecks.",
    impact: "Medium impact",
    icon: Clock3,
  },
  {
    title: "Automation opportunity",
    description:
      "Support ticket routing can be automated to reduce manual triage time by 31%.",
    impact: "High impact",
    icon: TrendingUp,
  },
];

export const activities = [
  {
    user: "Sarah Kim",
    action: "updated onboarding workflow automation",
    time: "4 mins ago",
  },
  {
    user: "Michael Torres",
    action: "resolved support escalation queue",
    time: "12 mins ago",
  },
  {
    user: "Emma Wilson",
    action: "deployed new AI routing rules",
    time: "27 mins ago",
  },
  {
    user: "Daniel Lee",
    action: "reviewed automation analytics",
    time: "1 hour ago",
  },
];

export const systems = [
  {
    name: "Workflow Engine",
    status: "Operational",
    color: "bg-emerald-400",
  },
  {
    name: "AI Automation Core",
    status: "Healthy",
    color: "bg-cyan-400",
  },
  {
    name: "Cloud Synchronization",
    status: "Stable",
    color: "bg-violet-400",
  },
];

export const workflows = [
  {
    name: "Client Onboarding",
    department: "Customer Success",
    progress: 78,
    status: "Running",
  },
  {
    name: "Invoice Processing",
    department: "Finance",
    progress: 100,
    status: "Completed",
  },
  {
    name: "Lead Qualification",
    department: "Sales",
    progress: 64,
    status: "Running",
  },
];

export const workflowsTable = [
  {
    name: "Client Onboarding",
    owner: "Sarah Kim",
    status: "Running",
    priority: "High",
    updated: "4 mins ago",
  },
  {
    name: "Invoice Processing",
    owner: "Michael Torres",
    status: "Completed",
    priority: "Medium",
    updated: "11 mins ago",
  },
  {
    name: "Support Escalation",
    owner: "Emma Wilson",
    status: "Needs Review",
    priority: "High",
    updated: "22 mins ago",
  },
  {
    name: "Lead Qualification",
    owner: "Daniel Lee",
    status: "Running",
    priority: "Low",
    updated: "35 mins ago",
  },
];

export const actions = [
  {
    title: "Create Workflow",
    description: "Build a new automation pipeline",
    icon: Plus,
  },
  {
    title: "Launch Automation",
    description: "Deploy AI workflow execution",
    icon: Rocket,
  },
  {
    title: "AI Optimization",
    description: "Generate workflow improvements",
    icon: Bot,
  },
  {
    title: "System Settings",
    description: "Manage operational preferences",
    icon: Settings2,
  },
];
