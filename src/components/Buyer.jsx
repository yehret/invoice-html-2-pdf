import React from 'react';

const Buyer = () => {
  return (
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
  );
};

export default Buyer;
