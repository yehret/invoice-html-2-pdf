import { useRef } from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ProductRow from './components/ProductRow';
import ToPay from './components/ToPay';
import Summary from './components/Summary';
import TaxRow from './components/TaxRow';
import SummaryRow from './components/SummaryRow';
import HeadRow from './components/HeadRow';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
import AdditionalData from './components/AdditionalData';

function App() {
  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
    });
  };

  return (
    <div className="container">
      <button className="download-button" onClick={downloadPDF}>
        Завантажити PDF
      </button>
      <div className="invoice-wrapper">
        <div ref={pdfRef} className="invoice">
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
                      <Seller />
                      <Buyer />
                      <AdditionalData />
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
                <HeadRow />
              </thead>
              <tbody>
                <ProductRow />
                <ProductRow />
                <TaxRow />
                <SummaryRow />
              </tbody>
            </table>
            <div className="clear"></div>
            <Summary />
            <div className="clear"></div>
            <ToPay />
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
