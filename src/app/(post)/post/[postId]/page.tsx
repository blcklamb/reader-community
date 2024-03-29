import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

export default async function PostDetailPage({
  params,
}: {
  params: { postId: string };
}) {
  const authSession = await auth();
  const prisma = new PrismaClient();
  const post = await prisma.post.findUnique({ where: { id: params.postId } });
  if (!authSession?.user) {
    return <>로그인 후 이용할 수 있습니다.</>;
  }
  return (
    <div className="w-full h-full flex flex-col  overflow-hidden">
      {post && (
        <>
          <div>{post.bookId}</div>
          <div>{post.title}</div>
          <div>{post.description}</div>
          <div>{post.type}</div>
          <div>{post.createdAt.toDateString()}</div>
        </>
      )}
    </div>
  );
}
