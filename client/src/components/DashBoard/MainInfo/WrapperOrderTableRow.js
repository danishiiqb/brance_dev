import OrderTableRow from "./OrderTableRow";

function WrapperOrderTableRow({ setActionWithId, tableData, type }) {
  return (
    <OrderTableRow
      setActionWithId={setActionWithId}
      type={type}
      detailedItem={tableData}
    ></OrderTableRow>
  );
}

export default WrapperOrderTableRow;
