import Filter from "../Filter/Filter";
import cn from "classnames";

function BucketList() {
  return (
    <div className="bucket-list">
      <main className="bucket-list__main">
        <div className="bucket-list__filter"><Filter/> </div>
        <div className="bucket-list__content"></div>
      </main>
    </div>
  );
}

export default BucketList;
