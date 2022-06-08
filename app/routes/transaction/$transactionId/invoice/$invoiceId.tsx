export const loader: LoaderFunction = ({ params }) => {
  const { invoiceId } = params;

  return json({
    invoiceId,
  });
};

export default function InvoiceIdPage() {
  const data = useLoaderData();
  const transactionData = useContextData();

  return (
    <div>
      <h1>{data.invoiceId}</h1>
      <p>This is invoice page</p>
    </div>
  );
}
