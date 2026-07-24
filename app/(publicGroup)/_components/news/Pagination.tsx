"use client";

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IMeta } from "@/lib/types";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

export default function PaginationAll({ meta }: { meta: IMeta }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = meta.page;
  const totalPages = meta.totalPages;
  const limit = 6;

  const visiblePages = 5;

  const startPage = Math.min(
    Math.max(currentPage, 1),
    Math.max(totalPages - visiblePages + 1, 1)
  );

  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());
    params.set("limit", limit.toString());

    router.replace(`${pathname}?${params.toString()}`);
  };


  return (
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          href="#"
          aria-disabled={currentPage === 1}
          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(currentPage - 1);
          }}
        />
      </PaginationItem>

      {pages.map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            isActive={currentPage === page}
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(page);
            }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}

      {endPage < totalPages && (
        <>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              href="#"
              isActive={currentPage === totalPages}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(totalPages);
              }}
            >
              {totalPages}
             
            </PaginationLink>
          </PaginationItem>
        </>
      )}

      <PaginationItem>
        <PaginationNext
          href="#"
          aria-disabled={currentPage === totalPages}
          className={
            currentPage === totalPages
              ? "pointer-events-none opacity-50"
              : ""
          }
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(currentPage + 1);
          }}
        /> 
      </PaginationItem>
    </PaginationContent>
  );
}