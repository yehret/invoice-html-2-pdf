const SummaryRow = () => {
  return (
    <tr>
      <td className="empty footer"></td>
      <td className="empty footer"></td>
      <td className="empty footer"></td>
      <td className="including footer">
        <b>Всього</b>
      </td>
      <td className="total_price_net_col nowrap footer">
        <b>250,00</b>
      </td>
      <td className="tax_col nowrap footer"></td>
      <td className="tax_value_col nowrap footer">
        <b>10,50</b>
      </td>
      <td className="total_price_gross_col nowrap footer">
        <b>260,50</b>
      </td>
    </tr>
  );
};

export default SummaryRow;
