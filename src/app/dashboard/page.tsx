export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
          Dashboard Overview
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Welcome back! Here's what's happening with your account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Users",
            value: "1,234",
            change: "+12% from last month",
            positive: true,
            gradient: "from-violet-500 to-indigo-500",
            icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
          },
          {
            title: "Revenue",
            value: "$45,231",
            change: "+8% from last month",
            positive: true,
            gradient: "from-emerald-500 to-teal-500",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          },
          {
            title: "Orders",
            value: "89",
            change: "-3% from last month",
            positive: false,
            gradient: "from-blue-500 to-cyan-500",
            icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
          },
          {
            title: "Active Sessions",
            value: "456",
            change: "+23% from last hour",
            positive: true,
            gradient: "from-purple-500 to-violet-500",
            icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="card card-hover p-6 transform transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={stat.icon}
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              {stat.title}
            </h3>
            <p className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
              {stat.value}
            </p>
            <p
              className={`text-sm font-medium ${
                stat.positive
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              {
                color: "bg-blue-500",
                activity: "New user registered",
                time: "2 mins ago",
              },
              {
                color: "bg-emerald-500",
                activity: "Payment received",
                time: "5 mins ago",
              },
              {
                color: "bg-amber-500",
                activity: "System update deployed",
                time: "1 hour ago",
              },
              {
                color: "bg-purple-500",
                activity: "New feature released",
                time: "2 hours ago",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                <span className="text-sm text-slate-700 dark:text-slate-300 flex-1">
                  {item.activity}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            Quick Actions
          </h3>
          <div className="space-y-3">
            {[
              {
                gradient: "from-violet-500 to-indigo-500",
                text: "Create New Project",
                icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
              },
              {
                gradient: "from-emerald-500 to-teal-500",
                text: "Generate Report",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                gradient: "from-purple-500 to-pink-500",
                text: "Manage Team",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
            ].map((action, index) => (
              <button
                key={index}
                className={`w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r ${action.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={action.icon}
                  />
                </svg>
                <span className="font-medium">{action.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
