# Migration `20201113203152-add-vocab`

This migration has been generated by Thomas Farla at 11/13/2020, 9:31:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "VocabularyKanji" (
    "id" TEXT NOT NULL,
    "vocabularyId" TEXT NOT NULL,
    "sentenceId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY ("vocabularyId") REFERENCES "Vocabulary"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("sentenceId") REFERENCES "Sentence"("id") ON DELETE CASCADE ON UPDATE CASCADE,
PRIMARY KEY ("id")
)

PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vocabulary" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "furigana" TEXT NOT NULL,
    "jlpt" INTEGER,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
PRIMARY KEY ("id")
);
INSERT INTO "new_Vocabulary" ("id", "word", "furigana", "jlpt", "userId", "createdAt", "updatedAt") SELECT "id", "word", "furigana", "jlpt", "userId", "createdAt", "updatedAt" FROM "Vocabulary";
DROP TABLE "Vocabulary";
ALTER TABLE "new_Vocabulary" RENAME TO "Vocabulary";
CREATE UNIQUE INDEX "Vocabulary.word_unique" ON "Vocabulary"("word");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201113151358-setup..20201113203152-add-vocab
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -16,23 +16,35 @@
 model Vocabulary {
   id                 String               @id @default(cuid())
   word               String               @unique
   furigana           String
-  jlpt               Int
+  jlpt               Int?
   author             User                 @relation(fields: [userId], references: [id])
   userId             String
   VocabularySentence VocabularySentence[]
   createdAt          DateTime             @default(now())
   updatedAt          DateTime             @default(now())
+  VocabularyKanji    VocabularyKanji[]
 }
+model VocabularyKanji {
+  id           String     @id @default(cuid())
+  vocabulary   Vocabulary @relation(fields: [vocabularyId], references: [id])
+  sentence     Sentence   @relation(fields: [sentenceId], references: [id])
+  vocabularyId String
+  sentenceId   String
+  createdAt    DateTime   @default(now())
+  updatedAt    DateTime   @default(now())
+}
+
 model Sentence {
   id                 String               @id @default(cuid())
   sentence           String
   KanjiSentence      KanjiSentence[]
   VocabularySentence VocabularySentence[]
   createdAt          DateTime             @default(now())
   updatedAt          DateTime             @default(now())
+  VocabularyKanji    VocabularyKanji[]
 }
 model VocabularySentence {
   id           String     @id @default(cuid())
```

