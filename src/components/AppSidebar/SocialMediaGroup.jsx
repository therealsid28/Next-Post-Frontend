import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { ChevronRight, Instagram } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';

const socialMediaList = [
  {
    name: 'Instagram',
    link: 'instagram',
    logo: <Instagram />,
    childern: [
      {
        name: 'Schedule',
        link: 'schedule',
      },
      {
        name: 'Insights',
        link: 'insights',
      },
    ],
  },
];

function SocialMediaGroup() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Social Media Platform</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {socialMediaList.map((item, inx) => {
            return (
              <Collapsible className="group/collapsible">
                <SidebarMenuItem className="list-none">
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="cursor-pointer">
                      <span className="flex items-center gap-2">
                        {item.logo}
                        <span>{item.name}</span>
                      </span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {item.childern.map((elm, i) => (
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <Link to={`${item.link}/${elm.link}`}>
                              <span>{elm.name}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export default SocialMediaGroup;
