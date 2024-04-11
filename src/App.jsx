import './App.css';

function App() {
  return (
    <div className="container">
      <div className="invoice-wrapper">
        <div className="invoice">
          <div className="invoice-content">
            <table className="clean">
              <tbody>
                <tr>
                  <td className="half-left">
                    <div className="left-invoice-part">
                      <div className="invoice-title">
                        <h1>Рахунок фактура </h1>
                        <strong>№ 1</strong>
                        <div className="clear"></div>
                      </div>
                      <div className="clear"></div>
                      <div className="additional-data">
                        <h2>Дата виставлення: </h2>
                        <p>09.04.2024</p>
                      </div>
                      <div className="clear"></div>
                      <div className="seller">
                        <h2>Постачальник</h2>
                        <section>
                          {`ТОВ "Тестова назва"`}
                          <br />
                          {`вул. Шахтарська, 12`}
                          <br />
                          {`45400 Нововолинськ`}
                          <br />
                          {`ЄДРПОУ/ІПН 9999999`}
                          <br />
                          {`МоноБанк`}
                          <br />
                          {`UAYYZZZZZ0000012345678901234`}
                          <br />
                          {`тел. (033)-333-33-333 `}
                          <br />
                        </section>
                        <div className="clear"></div>
                      </div>
                      <div className="buyer">
                        <h2>Платник</h2>
                        <section>
                          {`Іванов Іван Іванович`}
                          <br />
                          {`вул.Шахтарська, 12`}
                          <br />
                          {`45400 Нововолинськ`}
                          <br />
                          {`ЄДРПОУ/ІПН 8888888`}
                          <br />
                          {`тел. (022)-22-22-222 `}
                          <br />
                        </section>
                        <div className="clear"></div>
                      </div>
                      <div className="additional-data bottom-data">
                        <h2>Дата оплати:</h2>
                        <p>10.04.2024</p>
                        <div className="clear"></div>
                        <h2>Спосіб оплати:</h2>
                        <p>Переказ</p>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </td>
                  <td className="half-right">
                    <div className="company-logo right-invoice-part"></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="clear"></div>
            <table className="main-invoice-table">
              <thead>
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
              </thead>
              <tbody>
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
                <tr>
                  <td className="row0 nr_col">1</td>
                  <td className="row0 text-left name_col">
                    <span>Товар2</span>
                  </td>
                  <td className="row3 quantity_col">1 шт</td>
                  <td className="row1 price_net_col">100,00</td>
                  <td className="row1 total_price_net_col">100,00</td>
                  <td className="row2 tax_col">0</td>
                  <td className="row1 tax_value_col">0</td>
                  <td className="row1 total_price_gross_col">100,00</td>
                </tr>
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
              </tbody>
            </table>
            <div className="clear"></div>
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
            <div className="clear"></div>
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
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
