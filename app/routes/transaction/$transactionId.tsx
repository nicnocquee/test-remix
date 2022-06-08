export const loader: LoaderFunction = ({ params }) => {
  const { transactionId } = params;
  const transaction = {
    id: transactionId,
  };

  return json({
    transaction,
  });
};

export default function TransactionIdLayout() {
  const data = useLoaderData();
  return (
    <div>
      <h1>Transaction {data.transaction.id}</h1>
      <Outlet context={data} />
    </div>
  );
}
