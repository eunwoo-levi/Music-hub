"use client";

import { useUIState } from "@/hooks/useUIState";
import { homeCategoryList } from "@/lib/dummyData";
import { cn } from "@/lib/utils";

interface CategoryProps {
  label: string;
  src: string;
}

export default function Category() {
  const { homeCategory, setHomeCategory, setHeaderImageSrc } = useUIState();

  const onClickCategory = (item: CategoryProps) => {
    if (homeCategory === item.label) {
      setHomeCategory("");
      setHeaderImageSrc("");
    } else {
      setHomeCategory(item.label);
      setHeaderImageSrc(item.src);
    }
  };

  return (
    <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
      {homeCategoryList.map((item) => (
        <li
          key={item.label}
          className={cn(
            "h-[38px] min-w-fit flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer",
            item.label === homeCategory && "bg-white text-black hover:bg-white"
          )}
          onClick={() => onClickCategory(item)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
