import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function PostPage() {
  const authSession = await auth();

  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();
  return (
    <div className="w-full h-full flex flex-col  overflow-hidden">
      <div className="h-10 bg-white">
        <Button>
          <Link href="/post/create">게시글 작성하기</Link>
        </Button>
      </div>
      <Table className="pt-16 h-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead>작성자</TableHead>
            <TableHead>책 이름</TableHead>
            <TableHead>글 종류</TableHead>
            <TableHead>글 제목</TableHead>
            <TableHead className="text-right">작성일자</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((ele) => (
            <TableRow className="h-5" key={ele.id}>
              <TableCell>{ele.userId.slice(10)}</TableCell>
              <TableCell>{ele.bookId}</TableCell>
              <TableCell>{ele.type}</TableCell>
              <Link href={`post/${ele.id}`}>
                <TableCell>{ele.title}</TableCell>
              </Link>
              <TableCell>{ele.createdAt.toLocaleDateString("kr")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
