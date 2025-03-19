import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import React from 'react';

function Settings() {
  return (
    <div>
      <h2 className="text-4xl mb-4">Settings</h2>
      <div className="mb-8">
        <h3 className="text-2xl mb-2">Notifications</h3>
        <div className="flex gap-2 items-center">
          <Label htmlFor="airplane-mode" className="text-md cursor-pointer">
            Enable Notifications
          </Label>
          <Switch id="airplane-mode" className="cursor-pointer" />
        </div>
        {/* <div>
          <h3 className="text-lg">Why you should enable notifications?</h3>
          <div className="flex flex-col gap-1">
            <p>
              Post & Scheduling Alerts – Get notified when your scheduled posts
              are published, failed, or about to go live.
            </p>
            <p>
              Engagement & Performance Updates – Stay in the loop with new
              comments, mentions, and trending posts.
            </p>
            <p>
              Account & Security Updates – Get notified about logins from new
              devices, billing reminders, and integration issues.
            </p>
          </div>
        </div> */}
      </div>
      <div className="mb-8">
        <h3 className="text-2xl">Integrations</h3>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl">Security & Privacy</h3>
      </div>
      <div>
        <h3 className="text-2xl">Account Preferences</h3>
      </div>
    </div>
  );
}

export default Settings;
