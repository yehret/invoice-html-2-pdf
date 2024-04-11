const TaxRow = () => {
  return (
    <tr>
      <td className="empty footer"></td>
      <td className="empty footer"></td>
      <td className="empty footer"></td>
      <td className="including footer">Ставка податку</td>
      <td className="total_price_net_col nowrap footer">150,00</td>
      <td className="tax_col nowrap footer">7</td>
      <td className="tax_value_col nowrap footer">10,50</td>
      <td className="total_price_gross_col nowrap footer">160,50</td>
    </tr>
  );
};

export default TaxRow;
