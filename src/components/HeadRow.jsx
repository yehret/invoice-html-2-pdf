const HeadRow = () => {
  return (
    <tr>
      <th className="width0 nr_col">№</th>
      <th className="width4 text-left name_col">Найменування</th>
      <th className="width1 quantity_col">Кількість</th>
      <th className="width3 price_net_col">Ціна без ПДВ</th>
      <th className="width3 total_price_net_col">Сума без ПДВ</th>
      <th className="width1 tax_col nowrap">ПДВ %</th>
      <th className="width3 tax_value_col">Сума ПДВ</th>
      <th className="width3 total_price_gross_col">Сума з ПДВ</th>
    </tr>
  );
};

export default HeadRow;
