import AppLink from "./appLink";
import LearnExternalCss from "./LearnCss/LearnExternalCss";
import LearnForm from "./LearnForm/LearnForm";
import GetLocalStorage from "./LearnLocalStorage/GetLocalStorage";
import RemoveLocalStorage from "./LearnLocalStorage/RemoveLocalStorage";
import SetLocalStorage from "./LearnLocalStorage/SetLocalStorage";
import Routing from "./LearnRouting/Routing";
import SessionStorage from "./LearnSessionStorage/SessionStorage";

const App = () => {
  return (
    <div>
      <AppLink></AppLink>
      <Routing></Routing>
      {/* <LearnExternalCss></LearnExternalCss> */}
      {/* {<LearnForm></LearnForm>} */}
      {/* {<SetLocalStorage></SetLocalStorage>} */}
      {/* {<GetLocalStorage></GetLocalStorage>} */}
      {/* {<RemoveLocalStorage></RemoveLocalStorage>} */}
      {/* <SessionStorage /> */}
    </div>
  );
};

export default App;
