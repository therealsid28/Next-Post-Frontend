import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';
import React from 'react';

function Plans() {
  return (
    <>
      <div className="mt-14">
        <h2 className="text-center text-zinc-500 text-xl">Plans and Pricing</h2>
        <h1 className="text-center text-3xl my-3">
          Pick the Perfect Plan for Your Social Growth
        </h1>
        <p className="text-center max-w-7/12 mx-auto text-zinc-500">
          Find the perfect plan to streamline your social media workflow.
          Whether you're an individual creator, a growing brand, or an agency
          managing multiple accounts, we have a plan tailored for you. Unlock
          AI-powered scheduling, advanced analytics, and seamless automation—all
          at a price that fits your needs.
        </p>
        <div className="grid grid-cols-8 gap-2 mt-10">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Free</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias sunt nobis dolore.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <span className="text-2xl">$0</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <Button className="w-full my-3 cursor-pointer">
                Purchase Plan
              </Button>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Basic</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias sunt nobis dolore.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <span className="text-2xl">$19</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <Button className="w-full my-3 cursor-pointer">
                Purchase Plan
              </Button>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Standard</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias sunt nobis dolore.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <span className="text-2xl">$49</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <Button className="w-full my-3 cursor-pointer">
                Purchase Plan
              </Button>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias sunt nobis dolore.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <span className="text-2xl">$99</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <Button className="w-full my-3 cursor-pointer">
                Purchase Plan
              </Button>
              <div className="mt-4">
                <p className="text-zinc-500">What's included:</p>
                <div className="mt-2">
                  <div className="flex gap-2 items-center">
                    <Check size={18} />
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Plans;
