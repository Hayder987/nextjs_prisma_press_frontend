import { Button } from "@/components/ui/button";
import Link from "next/link";

const UserDashBoardPage = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <Link href={"/dashboard/my-post"}>
        <Button>My Post</Button>
      </Link>
    </div>
  );
};

export default UserDashBoardPage;
