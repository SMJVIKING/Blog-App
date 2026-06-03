"use client";

import { useState, useRef, Fragment } from "react";
import { LayoutGrid } from "lucide-react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

interface CategoriesData {
  [key: string]: string[];
}

const CATEGORIES_DATA: CategoriesData = {
  الکترونیک: ["موبایل", "لپ‌تاپ", "تبلت", "هدفون", "دوربین"],
  پوشاک: ["مردانه", "زنانه", "بچه‌گانه", "اکسسوری", "کفش"],
  "خانه و آشپزخانه": ["آشپزخانه", "دکور", "مبلمان", "لوازم برقی", "نورپردازی"],
  ورزشی: ["لباس ورزشی", "تجهیزات", "کفش ورزشی", "مکمل"],
  "کالای دیجیتال": ["نرم‌افزار", "گیم", "لایسنس", "شارژ"],
};

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative hidden lg:block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Popover className="relative">
        <PopoverButton className="flex items-center gap-2 px-3 py-2 text-secondary-400/80 hover:text-primary-300 transition-colors duration-300 outline-none cursor-pointer">
          <LayoutGrid size={18} />
          <span className="font-semibold text-sm">دسته‌بندی</span>
        </PopoverButton>

        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel static className="absolute top-full right-0 pt-3 z-50">
            <div className="bg-backgroud border border-border/20 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl min-w-[160px]">
              {Object.keys(CATEGORIES_DATA).map((cat) => (
                <a
                  key={cat}
                  href={`/category/${cat}`}
                  className="block px-4 py-2 text-sm text-secondary-400/70 hover:text-primary-300 hover:bg-primary-300/5 transition-all duration-200"
                >
                  {cat}
                </a>
              ))}
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
}