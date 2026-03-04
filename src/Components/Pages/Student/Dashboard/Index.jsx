import Headercard from "./Headercard";
import Activechallenge from "./Activechallenge";
import Challengeboard from "./Challengeboard";
import Recentcommit from "./Recentcommit";
import Submission from "./Submission";

export default function Index() {
  return (
    // root container is full width so that layout wrapper can control overall
    // responsiveness; individual sections continue to use responsive grid
    // utilities as needed
    <div className="w-full space-y-6">

      <Headercard />
      <Activechallenge />
      <Submission />

      {/* challenge board + commits; use responsive columns at md/lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* span two columns on larger screens so board gets more room */}
        <div className="md:col-span-2 lg:col-span-2">
          <Challengeboard />
        </div>
        <Recentcommit />
      </div>



    </div>
  );
}