import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <span className="text-2xl font-bold text-primary">FT</span>
        </NavLink>
        <DesktopNav />
        <div className="ml-auto flex items-center gap-4">
          <SearchBar />
          <UserMenu />
        </div>
        <MobileNav />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const DesktopNav = () => (
  <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm">
    {navItems.map((item) => (
      <NavItem key={item.to} to={item.to}>
        {item.title}
      </NavItem>
    ))}
  </nav>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <span className="text-2xl font-bold text-primary">FT</span>
        </NavLink>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const SearchBar = () => (
  <div className="relative hidden md:block">
    <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
    <Input
      type="search"
      placeholder="Search..."
      className="pl-8 w-[200px] lg:w-[300px]"
    />
  </div>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Subscriptions</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground"
      )
    }
  >
    {children}
  </NavLink>
);

const Footer = () => (
  <footer className="border-t bg-muted/40 py-6 px-4 md:px-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <span className="text-sm text-muted-foreground">© 2024 Financial Times. All rights reserved.</span>
      </div>
      <nav className="flex gap-4 text-sm">
        <a href="#" className="text-muted-foreground hover:text-primary">About Us</a>
        <a href="#" className="text-muted-foreground hover:text-primary">Contact</a>
        <a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a>
        <a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a>
      </nav>
    </div>
  </footer>
);

export default Layout;