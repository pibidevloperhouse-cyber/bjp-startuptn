"use client";

import { useState } from "react";
import Link from "next/link";

type Part =
  | string
  | { type: "link"; href: string; text: string }
  | { type: "br" };

export default function ParagraphReadMore({ bio }: { bio: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_LENGTH = 200;

  const regex = /<link\s+href="([^"]+)">([^<]+)<\/link>|<br\s*\/?>/g;

  const parts: Part[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(bio)) !== null) {
    if (match.index > lastIndex) {
      parts.push(bio.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      parts.push({
        type: "link",
        href: match[1],
        text: match[2],
      });
    } else {
      parts.push({ type: "br" });
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < bio.length) {
    parts.push(bio.slice(lastIndex));
  }

  const plainText = parts
    .map((part) => {
      if (typeof part === "string") return part;
      if (part.type === "link") return part.text;
    })
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
    }

    if (part.type === "link") {
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

    if (part.type === "br") {
      return <br key={index} />;
    }

    return null;
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
