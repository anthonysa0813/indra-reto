import React from "react";
import { AccountContainer } from "../../styles/mainPage.style";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

const Account = () => {
  return (
    <AccountContainer>
      <div className="col">
        <p>Indica la suma asegurada</p>
        <div className="maxMin">
          <span>MIN $12,500</span>
          <span>MAX $16,500</span>
        </div>
      </div>
      <div className="col">
        <div className="account__product">
          <AiOutlineLine />
          <span>$ 14,300</span>
          <AiOutlinePlus />
        </div>
      </div>
    </AccountContainer>
  );
};

export default Account;
