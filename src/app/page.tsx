import { prisma } from "@/lib/prisma";


export default async function HomePage() {
  const novelCount = await prisma.novel.count();

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Creasta</h1>
      <p className="mt-2 text-sm text-gray-600">
        登録作品数: {novelCount}件
      </p>
    </main>
  );
}