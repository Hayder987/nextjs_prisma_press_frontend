import { Pagination } from "@/components/ui/pagination";
import PaginationAll from "./Pagination";
import { getAllNews } from "../../_actions/getAllNews";

const PublicPagination = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const query = await searchParams;
  const result = await getAllNews({ query });
  
  const meta =  result?.meta;

  return (
    <div className="">
      {result && result.data.length ? (
        <Pagination>
          <PaginationAll meta={meta} />
        </Pagination>
      ) : (
        ""
      )}
    </div>
  );
};

export default PublicPagination;
