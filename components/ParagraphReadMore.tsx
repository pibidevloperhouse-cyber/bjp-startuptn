"use client";

import { useState } from "react";

export default function ParagraphReadMore({ bio }: { bio: string }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const MAX_LENGTH = 200;

  const plainText = bio.replace(/<[^>]+>/g, "");
  const isLong = plainText.length > MAX_LENGTH;

  const truncatedText = plainText.slice(0, MAX_LENGTH) + "...";

  return (
    <div>
      <p
        className="text-muted-foreground text-sm md:text-lg leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: isExpanded || !isLong ? bio : truncatedText,
        }}
      />

      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary mb-2 font-medium hover:underline"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}
