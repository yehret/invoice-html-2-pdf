const SummaryRow = () => {
  return (
    <tr>
      <td className="empty footer"></td>
      <td className="empty footer"></td>
      <td className="empty footer"></td>
      <td className="empty including footer"></td>
      <td className="total_price_net_col nowrap footer">
        <b>Всього</b>
      </td>
      <td className="total_price_gross_col nowrap footer">
        <b>260,50 грн</b>
      </td>
    </tr>
  );
};

export default SummaryRow;
