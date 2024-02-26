import { UserButton, auth } from "@clerk/nextjs";

import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Navbar = async() => {
    const { userId } = auth();

    if(!userId){
        redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId
        },
    })
  return (
    <div className="flex">
      <MainNav />
      <div className=" flex  px-4 pt-4 ml-20 w-full">
        <StoreSwitcher items={stores}/>
        <div className=" ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
