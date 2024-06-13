import BackEvent from "@/components/BackEvent";
import Data from "@/components/Data";

export default function TrackerPage() {
  return (
    <div>
      <BackEvent
        name={"Add"}
        titleOfPage={"Trackers"}
        href={"/dashboard/trackers/add"}
      />
      <Data />
    </div>
  );
}
