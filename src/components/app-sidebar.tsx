'use client';

import * as React from 'react';
import {
  Book,
  Briefcase,
  LayoutDashboard,
  LifeBuoy,
  Notebook,
  Send,
  Settings2
} from 'lucide-react';
import { NavUser } from '@/components/nav-user';
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
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Platform',
      url: '/admin',
      // icon: LayoutDashboard,
      // icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Dashboard',
          url: '/admin',
          icon: LayoutDashboard,
        },
        {
          title: 'Projects',
          url: '/admin/projects',
          icon: Notebook,
        },
        {
          title: 'Blogs',
          url: '/admin/blogs',
          icon: Book,
        },
        {
          title: 'Services',
          url: '/admin/services',
          icon: Briefcase,
        },
      ],
    },

    // {
    //   title: 'Settings',
    //   url: '#',
    //   items: [
    //     {
    //       title: 'General',
    //       url: '/admin/settings',
    //       icon: Settings2,
    //     }
    //   ],
    // },
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const { state, setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader className={cn('', state === 'expanded' && '-ml-3')}>
        <div className='p-0'>
          {state === 'collapsed' ? (
            <div className='flex items-center justify-center w-full'>
              <img src='/logo-icon.png' alt='Logo' height={40} width={40} />
            </div>
          ) : (
            <img src='/logo.png' alt='Logo' height={80} width={160} />
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className={state === 'expanded' ? '-mt-3' : ''}>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={
                        pathname === item.url ||
                        (pathname.startsWith(item.url) &&
                          item.url !== '/admin' &&
                          item.url !== '/admin/settings')
                      }
                      tooltip={item.title}
                      onClick={() => {
                        navigate(item.url);
                        setOpenMobile(false);
                      }}
                    >
                      {item.icon && <item.icon />}
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
