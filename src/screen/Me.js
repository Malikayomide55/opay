import './Me.css'
import {useNavigate} from "react-router-dom";
import {useState} from 'react';
const paying=[
	{
		icon1:<span class="material-symbols-outlined">
task
</span> ,
		title:"Transaction History",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
		
	},
	{
		icon1:<span class="material-symbols-outlined">
speed
</span> ,
		title:"Account Limit",
		text:"View your account limit ",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
	},
	{
		icon1: <span class="material-symbols-outlined">
credit_card
</span> ,
		title:"Bank Card/Account",
		text:"1 linked card/account",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
	},
	{
		icon1: <span class="material-symbols-outlined">
flash_on
</span> ,
		title:"Transfer to me ",
		text:"Receive payment for your business",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
	},
	{
		icon1: <span class="material-symbols-outlined">
account_balance_wallet
</span> ,
		title:"Pay ID",
		text:"Generate unique code for online transactions",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
	}
	
];

const services=[
	{
		icon1:<span class="material-symbols-outlined">
verified_user
</span> ,
		title:"Security Center",
		text:"Protect your funds",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
	},
	{
		icon1:<span class="material-symbols-outlined">
call
</span>,
		title:"Opay USSD",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
	},
	{
		icon1: <span class="material-symbols-outlined">
support_agent
</span>,
		title:"Coustomer Service Center",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
	},
	{
		icon1: <span class="material-symbols-outlined">
star
</span>,
		title:"Rate Us",
		icon2:<span class="material-symbols-outlined">
chevron_right
</span>
	}
];

function Me(){
	
	const[acctBal]=useState("5,000,000.00")
	const[showAcctBal,setShowAcctBal]=useState(false)
	const clickBut=()=>{
		setShowAcctBal(!showAcctBal)
	}
	
	const[CashBack]=useState("50,000.00")
	const[showCashBack,setShowCashBack]=useState(false)
	const clickCashback=()=>{
		setShowCashBack(!showCashBack)
	}
	
	const navigate=useNavigate()
	const clickHome=()=>{
	navigate("/Home",{})
	}
	
	const clickReward=()=>{
	navigate("/Reward",{})
	}
	
	const clickFinance=()=>{
	navigate("/Finance",{})
	}
	
	const clickCard=()=>{
	navigate("/Card",{})
	}
	
	const clickMe=()=>{
	navigate("/Me",{})
	}
	
	return(
	<div className="Mcon">
	
	
		<div className="Mtop"> 
			<div className="Musericon"><span class="material-symbols-outlined">
account_circle
</span> </div>
			<div className="Muser">
				<div className="Musername">Malik</div>
				<div className="Muserupgrade">Upgrade Tier</div>
			</div>
			<div className="Mseticon"><span class="material-symbols-outlined">
settings
</span> </div>
		</div>
		
		<div className="Mbalance">
			<div onClick={clickBut} className="MbalAsset">
				<div>{showAcctBal ? 'Total Asset' : 'Total Asset'}</div>
				<div>{showAcctBal? acctBal : '*****'}</div>
			</div>
			<div onClick={clickCashback} className="MbalCashback">
				<div>{showCashBack ? 'Cashback' : 'Cashback'}</div>
				<div>{showCashBack? CashBack : '*****'}</div>
			</div>
		</div>
		
		
		
		
		
		
		
		
		
		<div className="Mpaying">
        {paying.map((item, index) => (
          <div key={index} className="Mph">
            <div className="paying-icon1">{item.icon1}</div>
            <div className="paying-tt">
              <h2 className="Mpay-title">{item.title}</h2>
              <p className="Mpay-text">{item.text}</p>
            </div>
            <div className="paying-icon2">{item.icon2}</div>
          </div>
        ))}
      </div>
      
      <div className="Mservice">
        {services.map((item, index) => (
          <div key={index} className="Mholder">
            <div className="services-icon1">{item.icon1}</div>
            <div className="services-th">
              <h2 className="services-title">{item.title}</h2>
              <p className="services-text">{item.text}</p>
            </div>
            <div className="services-icon2">{item.icon2}</div>
          </div>
        ))}
      </div>
		
		<div className="Mlicense">
			<div>license by </div>
			<div className="MlicenseCBN">CBN</div>
			<div className="Mlicensetext">and insured by the</div>
			<div className="MlicenseNDIC">NDIC</div>
		</div>
		
		
		
		
		
		
		
		
		
		
		<div className="options">
			<div onClick={clickHome} className="Home">
				<span className="material-symbols-outlined">
home
</span>
				<div>Home</div>
			</div>
			<div onClick={clickReward} className="Reward">
				<span class="material-symbols-outlined">
diamond
</span>
				 <div>Reward</div>
			</div>
			<div onClick={clickFinance} className="Finance">
				<span class="material-symbols-outlined">
bid_landscape
</span>
				<div>Finance</div>
			</div>
			<div onClick={clickCard} className="Card">
				<span class="material-symbols-outlined">
credit_card
</span>
				<div>Card</div>
			</div>
			<div onClick={clickMe} className="Me">
				<span class="material-symbols-outlined">
account_circle
</span>
				<div>Me</div>
			</div>
		</div>
	</div>
);
}

export default Me;