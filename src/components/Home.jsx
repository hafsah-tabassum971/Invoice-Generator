import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import jsPDF from "jspdf";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [invoices, setInvoices] = useState([]);

  // Form fields
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [items, setItems] = useState([{ description: "", quantity: 1, price: 0 }]);
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Load invoices
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("invoices")) || [];
    setInvoices(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("invoices", JSON.stringify(invoices));
  }, [invoices]);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItemRow = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }]);
  };

  const calculateSubtotal = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleAddInvoice = () => {
    if (!fromName || !clientName || !invoiceDate) return;

    const newInvoice = {
      id: Date.now(),
      invoiceNumber: `INV-${Math.floor(1000 + Math.random() * 9000)}`,
      fromName,
      fromEmail,
      fromAddress,
      clientName,
      clientEmail,
      clientAddress,
      items,
      invoiceDate,
      dueDate,
      subtotal: calculateSubtotal(),
      total: calculateSubtotal(),
    };

    setInvoices([newInvoice, ...invoices]);

    // reset
    setShowForm(false);
    setFromName("");
    setFromEmail("");
    setFromAddress("");
    setClientName("");
    setClientEmail("");
    setClientAddress("");
    setItems([{ description: "", quantity: 1, price: 0 }]);
    setInvoiceDate("");
    setDueDate("");

    // ✅ Stay inside home section
    document.getElementById("/")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCancel = () => {
    setShowForm(false);

    // ✅ Stay inside home section
    document.getElementById("/")?.scrollIntoView({ behavior: "smooth" });
  };


  // Generate PDF
const handleDownload = (invoice) => {
  const doc = new jsPDF();

  // HEADER
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("INVOICE", 105, 20, { align: "center" });

  // --- Invoice details (two-column layout) ---
  doc.setFontSize(12);
  let leftX = 20;
  let rightX = 140;

  doc.setFont("helvetica", "normal");
  doc.text(`Invoice #: ${invoice.invoiceNumber}`, leftX, 40);
  doc.text(`Invoice Date: ${invoice.invoiceDate}`, rightX, 40);
  doc.text(`Due Date: ${invoice.dueDate}`, rightX, 50);

  // FROM
  doc.setFont("helvetica", "bold");
  doc.text("From:", leftX, 65);
  doc.setFont("helvetica", "normal");
  doc.text(invoice.fromName, leftX, 72);
  if (invoice.fromEmail) doc.text(invoice.fromEmail, leftX, 79);
  if (invoice.fromAddress) doc.text(invoice.fromAddress, leftX, 86);

  // BILL TO
  doc.setFont("helvetica", "bold");
  doc.text("Bill To:", rightX, 65);
  doc.setFont("helvetica", "normal");
  doc.text(invoice.clientName, rightX, 72);
  if (invoice.clientEmail) doc.text(invoice.clientEmail, rightX, 79);
  if (invoice.clientAddress) doc.text(invoice.clientAddress, rightX, 86);

  // --- TABLE HEADER ---
  let startY = 110;
  doc.setFillColor(230, 230, 230);
  doc.rect(20, startY, 170, 10, "F");

  // Define column positions
  const colX = {
    desc: 25,
    qty: 120,
    price: 145,
    total: 170,
  };

  doc.setFont("helvetica", "bold");
  doc.text("Description", colX.desc, startY + 7);
  doc.text("Qty", colX.qty, startY + 7, { align: "center" });
  doc.text("Price", colX.price, startY + 7, { align: "right" });
  doc.text("Total", colX.total, startY + 7, { align: "right" });

  // --- TABLE ROWS ---
  let y = startY + 20;
  doc.setFont("helvetica", "normal");
  invoice.items.forEach((item) => {
    doc.text(item.description, colX.desc, y);
    doc.text(item.quantity.toString(), colX.qty, y, { align: "center" });
    doc.text(`$${item.price.toFixed(2)}`, colX.price, y, { align: "right" });
    doc.text(`$${(item.quantity * item.price).toFixed(2)}`, colX.total, y, { align: "right" });
    y += 10;
  });

  // --- SUMMARY (aligned with table right edge) ---
  y += 10;
  doc.setFont("helvetica", "bold");
  doc.text(`Subtotal: $${invoice.subtotal.toFixed(2)}`, colX.total, y, { align: "right" });
  y += 10;
  doc.text(`Grand Total: $${invoice.total.toFixed(2)}`, colX.total, y, { align: "right" });

  // FOOTER
  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.text("Thank you for your business!", 105, 280, { align: "center" });

  doc.save(`invoice-${invoice.invoiceNumber}.pdf`);
};

  return (
    <Wrapper id="/">
      <Content showForm={showForm}>

        <Title>Invoice Generator</Title>
{showForm && (
  <Description>
    Create and manage professional invoices in seconds. <br />
  </Description>
)}        {!showForm && (
  <Description>
    Create and manage professional invoices in seconds. <br />
    Perfect for freelancers, small businesses, and service providers. <br />
    <strong>Generate invoices quickly</strong> and keep track of your billing history.
  </Description>
)}

        {!showForm ? (
          <Button onClick={() => setShowForm(true)}>➕ Create New Invoice</Button>
        ) : (
          <InputBox>
            <h3>Your Info</h3>
            <Input placeholder="Your Business Name" value={fromName} onChange={(e) => setFromName(e.target.value)} />
            <Input placeholder="Your Email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} />
            <Input placeholder="Your Address" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} />

            <h3>Client Info</h3>
            <Input placeholder="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
            <Input placeholder="Client Email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
            <Input placeholder="Client Address" value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />

            <h3>Invoice Items</h3>
{items.map((item, i) => (
  <ItemRow key={i}>
    <Input
      placeholder="Description"
      value={item.description}
      onChange={(e) => handleItemChange(i, "description", e.target.value)}
    />
    <Input
      type="number"
      placeholder="Quantity"
      value={item.quantity}
      onChange={(e) =>
        handleItemChange(i, "quantity", parseInt(e.target.value))
      }
    />
    <Input
      type="number"
      placeholder="Price"
      value={item.price}
      onChange={(e) =>
        handleItemChange(i, "price", parseFloat(e.target.value))
      }
    />
  </ItemRow>
))}

            <Button onClick={addItemRow}>➕ Add Item</Button>

            <h3>Dates</h3>
            <label>Invoice Date:</label>
            <Input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
            <label>Due Date:</label>
            <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

            <ButtonRow>
               <CancelButton onClick={handleCancel}>Cancel</CancelButton>
          <Button onClick={handleAddInvoice}>Generate Invoice</Button>
            </ButtonRow>
          </InputBox>
        )}

        {invoices.length > 0 && (
          <Result>
            <h2>Your Invoices</h2>
            {invoices.map((inv) => (
              <InvoiceCard key={inv.id}>
                <p><strong>Invoice #:</strong> {inv.invoiceNumber}</p>
                <p><strong>Client:</strong> {inv.clientName}</p>
                <p><strong>Total:</strong> ${inv.total}</p>
                <p><strong>Invoice Date:</strong> {inv.invoiceDate}</p>
                <p><strong>Due Date:</strong> {inv.dueDate}</p>
                <ButtonRow>
                  <DeleteButton onClick={() => handleDelete(inv.id)}>Delete</DeleteButton>
                  <DownloadButton onClick={() => handleDownload(inv)}>Download PDF</DownloadButton>
                </ButtonRow>
              </InvoiceCard>
            ))}
          </Result>
        )}
      </Content>
    </Wrapper>
  );
};

export default Home;

// ---------------- Styled Components ----------------
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top left, #0d1b2a, #000);
  color: white;
  padding: 2rem;
    @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(20deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;

  /* ✅ Add margin only when form is open */
  margin-top: ${({ showForm }) => (showForm ? "5rem" : "0")};
    @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;


const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #d1d1d1;
  line-height: 1.6;
    @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 2rem;

  text-align: left;
    @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 12px;
  }

`;

const Input = styled.input`
  padding: 14px 16px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

const ItemRow = styled.div`
  display: flex;
  gap: 12px;   /* ✅ adds space between inputs */
  margin-bottom: 10px;

  /* optional: make description wider */
  & > input:first-child {
    flex: 2;
  }
  & > input:not(:first-child) {
    flex: 1;
  }
    @media (max-width: 600px) {
    flex-direction: column;
    & > input {
      flex: 1 !important;
      /* width: 100%; */
    }
  }
`;


const Button = styled.button`
  padding: 14px 20px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #61dafb, #21a1f1);
  font-weight: bold;
  transition: 0.3s;
  color: white;

  &:hover {
    background: linear-gradient(135deg, #21a1f1, #61dafb);
    transform: translateY(-2px) scale(1.05);
  }
    @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
  }
`;

const CancelButton = styled(Button)`
  background: #ff4d4d;
  &:hover {
    background: #ff1a1a;
  }
`;

const Result = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const InvoiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1rem;
    @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
   @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;

    button {
      width: 100%;
    }
  }
`;

const DeleteButton = styled.button`
  background: #ff4d4d;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  &:hover {
    background: #ff1a1a;
  }
`;

const DownloadButton = styled.button`
  background: #4caf50;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  &:hover {
    background: #45a049;
  }
`;
