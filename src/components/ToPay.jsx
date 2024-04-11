const ToPay = () => {
  return (
    <table className="clean to_pay">
      <tbody>
        <tr className="invoice_oid">
          <th>Номер замовлення:</th>
          <td>1</td>
        </tr>
        <tr className="invoice_to_pay">
          <th width="10">Загалом до сплати:</th>
          <td>
            {`260,00 UAH`}
            <br />
            {`Словами: двісті шістдесят гривень п'ятдесят копійок`}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ToPay;
