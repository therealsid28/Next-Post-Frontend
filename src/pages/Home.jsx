import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="mt-20 grid grid-cols-2">
        <div className="col-span-1">
          <h1 className="text-4xl">
            Plan, Schedule, and Analyze All Your Social Media in One Place
          </h1>
          <p className="dark:text-gray-400 mt-2 mb-8">
            Save time and grow your brand with AI-powered scheduling, analytics,
            and automation—all in one platform.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <Check size={18} />
              <span>Get Started for Free</span>
            </div>
            <div className="flex gap-1 items-center">
              <Check size={18} />
              <span>
                AI-Powered Scheduling – Automatically schedule posts at the best
                times for engagement.
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <Check size={18} />
              <span>
                Multi-Platform Posting – Publish across Instagram, Twitter,
                LinkedIn, and more from one dashboard.
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <Check size={18} />
              <span>
                Advanced Analytics – Track post performance and audience
                insights in real time.
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <Check size={18} />
              <span>
                Bulk Upload & Scheduling – Plan weeks of content in minutes.
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <Check size={18} />
              <span>
                Content Calendar – Plan and organize your social media strategy
                visually.
              </span>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/plan">
              <Button variant="default" className="cursor-pointer">
                Try for free
              </Button>
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Home;
