"use client";

import { useState } from "react";
import Link from "next/link";

export default function ParagraphReadMore({ bio }: { bio: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_LENGTH = 200;

  // Regex to match <link href="URL">TEXT</link>
  const linkRegex = /<link\s+href="([^"]+)">([^<]+)<\/link>/g;

  // Convert custom link tags into structured parts
  const parts: (string | { href: string; text: string })[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(bio)) !== null) {
    if (match.index > lastIndex) {
      parts.push(bio.slice(lastIndex, match.index));
    }

    parts.push({
      href: match[1],
      text: match[2],
    });

    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < bio.length) {
    parts.push(bio.slice(lastIndex));
  }

  // Convert all to plain text for length calculation
  const plainText = parts
    .map((part) => (typeof part === "string" ? part : part.text))
    .join("");

  const isLong = plainText.length > MAX_LENGTH;

  const displayLength = isExpanded ? plainText.length : MAX_LENGTH;

  let currentLength = 0;

  const renderedContent = parts.map((part, index) => {
    if (currentLength >= displayLength) return null;

    if (typeof part === "string") {
      const remaining = displayLength - currentLength;
      const textToShow = part.slice(0, remaining);
      currentLength += textToShow.length;
      return <span key={index}>{textToShow}</span>;
    } else {
      const remaining = displayLength - currentLength;
      const textToShow = part.text.slice(0, remaining);
      currentLength += textToShow.length;

      return (
        <Link
          key={index}
          href={part.href}
          className="text-primary underline"
          target="_blank"
        >
          {textToShow}
        </Link>
      );
    }
  });

  return (
    <div>
      <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
        {renderedContent}
        {!isExpanded && isLong && "..."}
      </p>

      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary font-medium hover:underline mt-1"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
