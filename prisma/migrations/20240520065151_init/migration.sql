-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "publishedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");
