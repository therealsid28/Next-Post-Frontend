import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import SocialMediaGroup from './SocialMediaGroup';
import Logo from './Logo';
import { Home, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {/* Profile Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link to="/app">
                  <SidebarMenuButton className="cursor-pointer flex items-center">
                    <span>
                      <Home size={22} />
                    </span>
                    <span className="text-md">Home</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link to="/app/settings">
                  <SidebarMenuButton className="cursor-pointer flex items-center">
                    <span>
                      <Settings size={22} />
                    </span>
                    <span className="text-md">Settings</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Social Media Section */}
        <SocialMediaGroup />
        {/* Social Medai Section End */}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
