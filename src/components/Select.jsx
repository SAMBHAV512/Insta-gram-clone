import Feed from "./Feed";
import Settings from "./Settings";
import Story from "./Story";

function Select({ selectedTeb }) {
  return (
    <>
      {(() => {
        if (selectedTeb === "Feed") {
          return <Feed></Feed>;
        } else if (selectedTeb === "Story") {
          return <Story></Story>;
        } else {
          return <Settings></Settings>;
        }
      })()}
    </>
  );
}
export default Select;
