"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Navigation Item 1",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 2",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 3",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 4",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 5",
    href: "#",
    description: "Navigation Item Subtext",
  },
  {
    title: "Navigation Item 6",
    href: "#",
    description: "Navigation Item Subtext",
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Getting started at SMCCCD
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      NavItem 1
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Some brief description of this item.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Item 2">
                Item 2 description
              </ListItem>
              <ListItem href="/docs/installation" title="Item 3">
                Item 3 description
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Item 4">
                Item 4 description
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Tutorials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
