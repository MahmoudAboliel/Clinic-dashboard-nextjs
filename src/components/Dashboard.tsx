import Greeting from "@/components/Greeting";
import MainInfo from "@/components/MainInfo";
import Appointments from "@/components/Appointments";

const Dashboard = () => {
  return (
    <section className="p-5 space-y-5">
        <Greeting />
        <MainInfo />
        <Appointments />
    </section>
  );
}

export default Dashboard;