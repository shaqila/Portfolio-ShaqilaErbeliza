import Button from "../../Elements/Button";

export default function ButtonEXP() {
  //   const insertClickHandler = (e) => {
  //     alert("Clicked on insert Button");
  //   };

  //   const saveClickHandler = (e) => {
  //     alert("Clicked on save Button");
  //   };

  return (
    <div>
      <h3>Button reusable component example</h3>

      <Button
        id={"btnInsert"}
        type={"Submit"}
        value={"Insert"}
        isDisabled={true}
      />

      <Button
        id={"btnSave"}
        type={"Submit"}
        value={"Save"}
        isDisabled={false}
      />
    </div>
  );
}
