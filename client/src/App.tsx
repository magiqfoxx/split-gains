import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Home from "./pages/home/Home";
import Nav from "./pages/Nav";

import Wallet from "./pages/wallet/Wallet";
import WalletList from "./pages/wallet/WalletList";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddMovie from "./pages/admin/AddMovie";
import AddShareholder from "./pages/admin/AddShareholder";
import InitiateTranfer from "./pages/admin/InitiateTransfer";

const Layout = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.n * 3}px;
`;
function App() {
  return (
    <Layout>
      <header>
        <Nav />
      </header>
      <StyledMain>
        <Routes>
          <Route index element={<Home />} />
          <Route path="wallet" element={<WalletList />}/>
          <Route path="/wallet/:walletId" element={<Wallet />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/new-movie" element={<AddMovie />} />
          <Route path="admin/new-shareholder" element={<AddShareholder />} />
          <Route path="admin/new-transfer" element={<InitiateTranfer />} />
        </Routes>
      </StyledMain>
      <Footer />
    </Layout>
  );
}

export default App;
