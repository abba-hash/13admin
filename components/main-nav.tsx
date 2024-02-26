"use client";
import { cn } from "@/lib/utils";
import {
  Settings,
  Home,
  Blocks,
  ShoppingBasket,
  Palette,
  PencilRuler,
  Club,
  ListOrdered
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Logo from "./logo";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
        href: `/${params.storeId}`,
        Icon: Home,
        active: pathname === `/${params.storeId}`,
      },
    {
      href: `/${params.storeId}/products`,
      Icon: ShoppingBasket,
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/billboards`,
      Icon: Club,
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      Icon: Blocks,
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      Icon: PencilRuler,
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colours`,
      Icon: Palette,
      active: pathname === `/${params.storeId}/colours`,
    },
    {
      href: `/${params.storeId}/orders`,
      Icon: ListOrdered,
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      Icon: Settings,
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
      <div className="flex flex-col items-center">
        <Logo />
        <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
          >
            <div
            className={cn(
                " transition-colors hover:text-primary bg-gray-100 hover:bg-gray-200 cursor-pointer my-3 p-3 rounded-lg inline-block",
                 route.active ? "text-black dark:text-white bg-gray-200" : "text-muted-foreground"
              )}
            >
              <route.Icon size={20}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
