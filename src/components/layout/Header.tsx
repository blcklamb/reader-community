import { auth } from "@/auth";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default async function Header() {
  const session = await auth();

  return (
    <header className="fixed top-0 left-0 right-0  mx-auto h-14 z-10 px-4 flex justify-between items-center bg-white">
      <Menubar className="w-full h-full flex">
        <MenubarMenu>
          <Link href="/">
            <MenubarTrigger>메인</MenubarTrigger>
          </Link>
          <Link href="/post">
            <MenubarTrigger>게시판</MenubarTrigger>
          </Link>
          {session && (
            <>
              <Link href="/my-page">
                <MenubarTrigger>마이 페이지</MenubarTrigger>
              </Link>
              <Link href={"/api/auth/signout"}>
                <MenubarTrigger>로그아웃</MenubarTrigger>
              </Link>
              <Avatar>
                <AvatarImage src={session.user?.image || ""} />
                <AvatarFallback>{session.user?.name || ""}</AvatarFallback>
              </Avatar>
            </>
          )}
          {!session && (
            <Link href={"/api/auth/signin"}>
              <MenubarTrigger>로그인</MenubarTrigger>
            </Link>
          )}
        </MenubarMenu>
      </Menubar>
    </header>
  );
}
