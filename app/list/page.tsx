import { FC } from "react";
import List from "@/app/_components/list/List";

interface ListProps {
  list: [];
}

const ListPage: FC<ListProps> = () => {
  return (
    <div>
      <List />
    </div>
  );
};

export default ListPage;
