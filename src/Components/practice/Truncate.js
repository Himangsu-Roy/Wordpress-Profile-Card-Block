import { __experimentalTruncate as Truncate } from "@wordpress/components";

function MyTruncate() {
  return (
    <Truncate numberOfLines={2}>
      Where the north wind meets the sea, there&apos;s a river full of memory.
      Sleep, my darling, safe and sound, for in this river all is found. In her
      waters, deep and true, lay the answers and a path for you. Dive down deep
      into her sound, but not too far or you&apos;ll be drowned
    </Truncate>
  );
}

export default MyTruncate;
