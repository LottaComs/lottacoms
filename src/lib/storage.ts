const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/rtf",
  "application/vnd.oasis.opendocument.text",
  "image/png",
  "image/jpeg",
]);

export interface StoredFile {
  key: string;
  filename: string;
  size: number;
  contentType: string;
}

export async function uploadAttachments(
  bucket: R2Bucket,
  submissionId: string,
  files: File[],
): Promise<StoredFile[]> {
  const results: StoredFile[] = [];

  for (const file of files) {
    if (file.size === 0) continue;

    if (file.size > MAX_FILE_SIZE) {
      throw new Error(`File "${file.name}" exceeds 10 MB limit`);
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      throw new Error(`File type "${file.type}" is not allowed`);
    }

    const key = `submissions/${submissionId}/${file.name}`;
    await bucket.put(key, await file.arrayBuffer(), {
      httpMetadata: { contentType: file.type },
    });

    results.push({
      key,
      filename: file.name,
      size: file.size,
      contentType: file.type,
    });
  }

  return results;
}
