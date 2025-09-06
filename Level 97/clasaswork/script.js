function countWords(sentence) {
  const cleaned = sentence.trim().replace(/\s+/g, " ");

  if (cleaned === "") return 0;

  return cleaned.split(" ").length;
}
