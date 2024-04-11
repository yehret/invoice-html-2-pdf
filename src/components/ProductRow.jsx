const ProductRow = () => {
  return (
    <tr>
      <td className="row0 nr_col">1</td>
      <td className="row0 text-left name_col">
        <span>Товар1</span>
      </td>
      <td className="row3 quantity_col">1 шт</td>
      <td className="row1 price_net_col">150,00</td>
      <td className="row1 total_price_net_col">150,00</td>
      <td className="row2 tax_col">7</td>
      <td className="row1 tax_value_col">10,50</td>
      <td className="row1 total_price_gross_col">160,50</td>
    </tr>
  );
};

export default ProductRow;
