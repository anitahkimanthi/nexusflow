import {
  Activity,
  Bot,
  CheckCircle2,
  Clock3,
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

export const automationPerformance = [
  { day: "Mon", completed: 120, automated: 96 },
  { day: "Tue", completed: 180, automated: 144 },
  { day: "Wed", completed: 150, automated: 132 },
  { day: "Thu", completed: 220, automated: 190 },
  { day: "Fri", completed: 260, automated: 230 },
  { day: "Sat", completed: 190, automated: 170 },
  { day: "Sun", completed: 240, automated: 218 },
];

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
