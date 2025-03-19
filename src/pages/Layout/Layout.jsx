import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar/AppSidebar';
import { ModeToggle } from '@/components/ModeToggle';
import ProfileDropdown from '@/components/ProfileDropdown/ProfileDropdown';

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="flex justify-between p-2 items-center">
          <SidebarTrigger className="cursor-pointer" />
          <div className="flex items-center gap-5">
            <ProfileDropdown />
            <ModeToggle />
          </div>
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
