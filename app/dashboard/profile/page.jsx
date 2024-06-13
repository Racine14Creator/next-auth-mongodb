import BackEvent from "@/components/BackEvent";
import UserInfo from "@/components/UserInfo";

export default function ProfilePage() {
  return (
    <div>
      <BackEvent
        name={"View Users"}
        titleOfPage={"Profile"}
        href='/dashboard'
      />
      <UserInfo />
    </div>
  );
}
