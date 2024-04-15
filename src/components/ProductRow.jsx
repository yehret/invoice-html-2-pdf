const ProductRow = () => {
  return (
    <tr>
      <th className="width0 nr_col">1</th>
      <th className="width4 text-left name_col">
        <span>Товар1</span>
      </th>
      <th className="width0 quantity_col">1</th>
      <th className="width1 quantity_col">шт</th>
      <th className="width3 price_net_col">150,00 грн</th>
      <th className="width3 total_price_net_col">150,00 грн</th>
    </tr>
  );
};

export default ProductRow;
