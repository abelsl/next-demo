import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CloverIcon } from "lucide-react";
import Link from "next/link";

const page = () => {

  return (<div className="min-h-screen bg-white">
    <header className="flex items-center justify-between px-8 py-4 border-b">
      <div className="flex items-center space-x-8">

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center space-x-2">
              <CloverIcon className="w-6 h-6" />
              <span className="text-xl font-bold">worque.</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-full md:hidden">
            <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
              <DropdownMenuItem >
                Platform
              </DropdownMenuItem>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
              <DropdownMenuItem >
                Solutions
              </DropdownMenuItem>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
              <DropdownMenuItem >
                Resources
              </DropdownMenuItem>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
              <DropdownMenuItem >
                Pricing
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
        <nav className="hidden space-x-6 md:flex">
          <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
            Platform
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
            Solutions
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
            Resources
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
            Pricing
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-gray-700 hover:text-black" prefetch={false}>
          Log in
        </Link>
        <Button variant="outline">Get started</Button>
      </div>
    </header>
    <main className="flex flex-col items-center justify-between px-8 py-16 space-y-16 md:flex-row md:space-y-0 md:space-x-16">
      <div className="max-w-lg space-y-6">
        <h1 className="text-5xl font-bold leading-tight">Integrate your <br /> stack → automate your work</h1>
        <p className="text-lg text-gray-700">
          Evolve at the speed and scale of your business with the leader in low-code automation
        </p>
        <div className="flex space-x-4">
          <Button variant="default">Start free trial</Button>
          <Button variant="ghost" className="border-x-4 border-y-0 border-black rounded-xl">Get a demo</Button>
        </div>
        <div className="pt-8 gap-2 hidden md:flex md:flex-col">
          <p className="text-sm text-gray-500">Working with the best</p>
          <div className="flex gap-2">
            <div className="h-6" >Spotify </div>
            <div className="h-6" >Walmart </div>
            <div className="h-6" >Vodafone </div>
            <div className="h-6" >Canon</div>
          </div>
        </div>
      </div>
      <div className="relative w-full max-w-md">
        <img src="img.svg" alt="Automation illustration" className="w-full h-auto" />
      </div>
      <div className="pt-8 flex flex-col gap-2 md:hidden">
        <p className="text-sm text-gray-500">Working with the best</p>
        <div className="flex space-x-4">
          <div className="flex gap-2">
            <div className="h-6" >Spotify </div>
            <div className="h-6" >Walmart </div>
            <div className="h-6" >Vodafone </div>
            <div className="h-6" >Canon</div>
          </div>
        </div>
      </div>
    </main>
  </div>);
}

export default page;