import Logo from '@/components/AppSidebar/Logo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import LoginForm from '@/Features/Login/LoginForm';
import React from 'react';

function Login() {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <Card className="w-[500px] min-w-[200px] bg-transparent">
        <CardHeader>
          <CardTitle>
            <span>
              <Logo />
            </span>
            <span className="text-2xl text-center block my-2">Signup</span>
          </CardTitle>
          <CardDescription className="text-center">
            Join Next Post, the ultimate social media management tool. Plan,
            schedule, and analyze your posts across multiple platforms with
            ease.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
