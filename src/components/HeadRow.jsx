const HeadRow = () => {
  return (
    <tr>
      <th className="width0 nr_col">№</th>
      <th className="width4 text-left name_col">Найменування</th>
      <th className="width0 quantity_col">Кількість</th>
      <th className="width1 quantity_col">Од.</th>
      <th className="width3 price_net_col">Ціна</th>
      <th className="width3 total_price_net_col">Сума</th>
    </tr>
  );
};

export default HeadRow;
