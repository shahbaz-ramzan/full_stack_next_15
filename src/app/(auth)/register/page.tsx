import Link from "next/link";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-violet-50/50 to-indigo-50 dark:from-slate-900 dark:via-violet-900/20 dark:to-indigo-900/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative glass rounded-2xl p-8 shadow-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Create your account
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-violet-600 hover:text-violet-500 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        <form className="space-y-6">
          <Input
            id="name"
            name="name"
            type="text"
            label="Full Name"
            required
            placeholder="John Doe"
          />

          <Input
            id="email"
            name="email"
            type="email"
            label="Email Address"
            required
            placeholder="john@example.com"
          />

          <Input
            id="password"
            name="password"
            type="password"
            label="Password"
            required
            placeholder="Password"
          />

          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            required
            placeholder="Confirm Password"
          />

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
            />
            <label
              htmlFor="terms"
              className="ml-3 block text-sm text-slate-700 dark:text-slate-300"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-violet-600 hover:text-violet-500 font-medium"
              >
                Terms and Conditions
              </a>
            </label>
          </div>

          <Button type="submit" variant="gradient" className="w-full" size="lg">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}
