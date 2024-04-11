const Summary = () => {
  return (
    <table className="clean to-right">
      <tbody>
        <tr>
          <th>Сума без ПДВ</th>
          <td className="number">250,00 UAH</td>
        </tr>
        <tr>
          <th>Сума ПДВ</th>
          <td className="number">10,50 UAH</td>
        </tr>
        <tr>
          <th>Всього з ПДВ</th>
          <td className="number">260,50 UAH</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Summary;
